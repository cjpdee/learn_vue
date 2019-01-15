<template>
    <div>
        <span>{{ number1 }}</span>
    </div>
</template>


<script>

export default {
    name : "display",
    props : {
        number1: {
            type: String
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
    background-color: rgb(56, 56, 56);
}

span {
    margin-right: 40px;
    font-size: 96px;
    font-family: monospace;
    text-align: right;
    color: rgb(25, 155, 25);
}

</style>