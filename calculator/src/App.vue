<template>
    <div id="app">
        <display v-bind:operation="currentOperation" v-bind:currentNumber="currentNumber" v-on:reset="reset"></display>
        <keypad v-on:number="buildNumber" v-on:operator="addOperator" v-on:evaluate="validateOperation"></keypad>
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
        buildNumber(number) {
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
        validateOperation() {
            if ((this.numbers.length >= 2) || (this.numbers.length == 1 && this.existsCurrentNumber())) {
                this.pushNumber(this.currentNumber);
                console.log(this.numbers.length, this.operators.length)
                if(this.numbers.length <= this.operators.length) {
                    console.log('evaluate: The operation needs another number');
                } else {
                    // actual logic here
                    this.evaluate();
                }
            } else {
                console.log('Operation cannot be evaluated');
            }
        },
        evaluate() {
            for(let i=0; i < this.numbers.length; i++) {
                console.log(this.numbers[i],this.operators[i]);
            }

            let orderOfOperations = ['/','*','+','-'];
            let newOrder = [];
            orderOfOperations.forEach((operator)=> {
                let index = this.operators.indexOf(operator);
                if(index >= 0) {
                    console.log("Operator " + operator + " got through");
                    let orderedOperations = [];
                    let operation = this.numbers[index].toString() + this.operators[index] + this.numbers[index+1].toString();
                    console.log('op',operation);
                    console.log('op  index',this.operators[index]);
                    console.log('num index',this.numbers[index]);
                    console.log('num index',this.numbers[index+1]);
                    // orderedOperations.push(operation)
                    let orderOfOperationsIndex = orderOfOperations.indexOf(this.operators[index]);
                    console.log(orderOfOperationsIndex);
                    newOrder[orderOfOperationsIndex] = operation;
                    console.log(newOrder);
                }
                console.log('index',index);
                
            });

            

            // division
            // multiplication
            // addition
            // subtraction

            this.currentNumber = '42';
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