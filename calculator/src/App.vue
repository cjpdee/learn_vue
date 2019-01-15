<template>
    <div id="app">
        <display v-bind:numbers="numbers"></display>
        <keypad v-on:number="concatNumber" v-on:operator="addOperator" v-on:evaluate="evaluate"></keypad>
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
    methods: {
        concatNumber(number) {
            if(number == '.') {
                if(this.currentNumber.indexOf('.') > -1) {
                    return
                } else {
                    this.currentNumber = this.currentNumber + number;
                }
            } else {
                this.currentNumber = this.currentNumber + number.toString();
            }
            console.log('number: ',this.currentNumber);
            console.log('index: ',this.currentNumber.indexOf('.'));
        },
        addOperator(operator) {
            this.numbers.push(parseFloat(this.currentNumber));
            this.operators.push(operator);
            this.currentNumber = '';
            console.log(this.numbers);
        },
        evaluate() {
            console.log(this.numbers,this.operators);
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