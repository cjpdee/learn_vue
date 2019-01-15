<template>
    <div id="app">
        <display v-bind:number1="number1"></display>
        <keypad v-on:number="concatNumber"></keypad>
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
            number1 : '',
            number2 : '',
            operator: '',

            decimalPressed: false
        }
    },
    methods: {
        concatNumber(number) {
            console.log('at app',number);
            this.number1 = this.number1 + number.toString();
            console.log(this.number1);
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