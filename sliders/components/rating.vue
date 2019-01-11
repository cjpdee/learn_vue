<template>
    <div>
        <span>
            <label for="name">Name</label>
            <input type="text" id="name" 
                v-bind:value="name"
            />
        </span>
        <span>
            <label for="name">Height</label>
            <input type="range" id="name" min="0" max="20" v-model="height" v-on:input="doThing()" />
            <span v-bind:value="height">{{ height }}</span>
        </span>
        <button>Save</button>
    </div>
</template>

<script>

export default Vue.component('rating',{
    name: "rating",

    components: {

    },

    props: {
        name : {
            type: String,
            required: true
        },
        gender : {
            type: String,
            required: true
        },
        height : {
            type: Number
        }
    },
    data() {
        return {
            greeting : "hello"
        }
    },
    methods : {
        doThing() {
            console.log(this);
        }
    }
})





</script>

<style lang="style" scoped>

</style>