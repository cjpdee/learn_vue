<template>
    <div id="app">
        <display v-bind:operation="currentOperation" v-bind:currentNumber="currentNumber" v-on:reset="reset"></display>
        <keypad v-on:number="addNumber" v-on:operator="addOperator" v-on:evaluate="evaluate"></keypad>
    </div>
</template>

<script>

import display from './components/display';
import keypad from './components/keypad';

export default {
    name: 'App',
    components: {
        display,
        keypad
    },
    data() {
        return {
            currentNumber: '',
            numbers : [],
            operators: []
        }
    },
    computed: {
        currentOperation() {
            let fullOperation = '';
            for (let i=0; i < this.numbers.length; i++) {
                fullOperation = fullOperation + this.numbers[i];
                this.operators[i] && (fullOperation = fullOperation + this.operators[i]); 
            }
            console.log(fullOperation);
            return fullOperation
        }
    },
    methods: {
        addNumber(number) {
            if (number == '.') {
                if(this.currentNumber.indexOf('.') > -1) {
                    return
                } else {
                    this.currentNumber = this.currentNumber + number;
                }
            } else {
                this.currentNumber = this.currentNumber + number.toString();
            }
        },
        existsCurrentNumber() {
            return this.currentNumber.length > 0 ? true : false;
        },
        pushNumber(number) {
            this.numbers.push(parseFloat(this.currentNumber));
            this.currentNumber = '';
        },
        addOperator(operator) {
            if(this.existsCurrentNumber()) {
                console.log(this.existsCurrentNumber());
                this.pushNumber(this.currentNumber);
                this.operators.push(operator);
                console.log(this.numbers);
            } else {
                console.log(this.existsCurrentNumber());
                console.log('addOperator: No number given to operate on');
            }
        },
        evaluate() {
            if ((this.numbers.length >= 2) || (this.numbers.length == 1 && this.existsCurrentNumber())) {
                this.pushNumber(this.currentNumber);
                console.log(this.numbers.length, this.operators.length)
                if(this.numbers.length <= this.operators.length) {
                    console.log('evaluate: The operation needs another number');
                } else {
                    for(let i=0; i < this.numbers.length; i++) {
                        console.log(this.numbers[i],this.operators[i]);
                    }
                }
            } else {
                console.log('Operation cannot be evaluated');
            }
        },
        reset() {
            this.currentNumber = '';
            this.numbers = [];
            this.operators = [];
        }
    }
}


</script>


<style scoped>

    #app {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

</style>