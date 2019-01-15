<template>
    <div v-on:click="reset">
        <span>{{ operation }}</span>
        <span>{{ currentNumber }}</span>
    </div>
</template>


<script>

export default {
    name : "display",
    props : {
        operation: {
            type: String
        },
        currentNumber : {
            type: String
        }
    },
    methods: {
        reset() {
            this.$emit('reset');
        }
    }
}

</script>


<style scoped>

div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 20vh;
    width: 100%;
    background-color: rgb(39, 39, 39);
}

div:hover {
    background-color: rgb(56, 56, 56);
}

span {
    display: inline-block;
    width: 100%;
    margin-left: 40px;
    font-size: 60px;
    font-family: monospace;
    text-align: left;
    color: rgb(25, 155, 25);
}

span:last-child {
    margin-right: 40px;
    font-size: 96px;
    text-align: right;
}

</style>