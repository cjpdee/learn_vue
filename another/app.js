
var query = 'something'

fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=GkCKerLay5i7Vqx2sYJOiSE5dGvyGYfU&limit=5`)






Vue.component('temp',{
    template : `
        <div>
            <input type="text" v-model="input" @keyup="updateSearch()" />
            <div id="display">
                <div v-if="this.images">
                    <img crossorigin="anonymous" v-for="image in images" v-bind:src="image" />
                </div>
                <button @click="num++">{{num}}</button>
            </div>
        </div>
    `,
    data() {
        return {
            input : '',
            data: null,
            images: [],
            num:0
        }
    },
    created() {
        // this.images=['hello','world'];
        let x  = this;
        fetch(`https://api.giphy.com/v1/gifs/search?q=hello&api_key=GkCKerLay5i7Vqx2sYJOiSE5dGvyGYfU&limit=5`)
            .then(response => response.json())
            .then(function(data) {
                console.log(this.images);
                x.data=data.data;
                x.images = [];
                x.data.forEach(function(t) {
                    x.images.push(t.images.original.url);
                })
                console.log(x.images);
            })
    },
    methods: {
        updateSearch() {
            let x  = this;
            let query = this.input;
            fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=GkCKerLay5i7Vqx2sYJOiSE5dGvyGYfU&limit=5`)
                .then(response => response.json())
                .then(function(data) {
                    console.log(x.images);
                    x.data=data.data;
                    x.images = [];
                    x.data.forEach(function(t) {
                        x.images.push(t.images.original.url);
                    })
                    console.log(x.images);
                })
        }
    }
});

new Vue({
    el: '#entry',

})

// 