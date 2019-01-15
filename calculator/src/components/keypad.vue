<template>
    <div>
        <button @click="pressNumber(1)">1</button>
        <button @click="pressNumber(2)">2</button>
        <button @click="pressNumber(3)">3</button>
        <button @click="pressOperator('subtract')">-</button>
        <button @click="pressNumber(4)">4</button>
        <button @click="pressNumber(5)">5</button>
        <button @click="pressNumber(6)">6</button>
        <button @click="pressOperator('add')">+</button>
        <button @click="pressNumber(7)">7</button>
        <button @click="pressNumber(8)">8</button>
        <button @click="pressNumber(9)">9</button>
        <button @click="pressOperator('multiply')">*</button>
        <button @click="pressNumber('.')">.</button>
        <button @click="pressNumber(0)">0</button>
        <button @click="evaluate()" operation="evaluate">=</button>
        <button @click="pressOperator('divide')">/</button>
    </div>
</template>

<script>

export default {
    name: "keypad",
    props: {},
    computed: {
        
    },
    methods: {
        pressNumber(num) {
            // console.log(num);
            this.$emit('number',num)
        },
        pressOperator(operator) {
            // console.log(operator);
            this.$emit('operator',operator);
        },
        evaluate() {

        }
    }
}

</script>

<style scoped>

div {
    display: flex;
    flex-wrap: wrap;
}

button {
    flex: 0 0 25%;
    height: calc(80vh / 4);

    font-size: 26px;
    font-weight: bold;
}

</style>
