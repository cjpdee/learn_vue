
// var query = 'something'

// fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=GkCKerLay5i7Vqx2sYJOiSE5dGvyGYfU&limit=5`)






Vue.component('temp',{
    template : `
    <div>
        <input type="text" v-model="input" @keyup="updateSearch()" />
        <div class="container">
            <div id="display" v-if="this.images">
                <div class="img-wrap" v-for="image in images">
                    <img crossorigin="anonymous" v-bind:src="image" @click="addToList" />
                </div>
            </div>
            <div id="list">
                <div class="img-wrap" v-for="img in list">
                    <img @click="removeFromList" v-bind:src="img" />
                </div>
            </div>
            </div>
        <button @click="num++">{{num}}</button>
    </div>
    `,
    data() {
        return {
            input : '',
            data: null,
            images: [],
            num: 10,
            list: []
        }
    },
    created() {
        let x  = this;
        fetch(`https://api.giphy.com/v1/gifs/search?q=hello&api_key=GkCKerLay5i7Vqx2sYJOiSE5dGvyGYfU&limit=${x.num}`)
            .then(response => response.json())
            .then(function(data) {
                x.data=data.data;
                x.images = [];
                x.data.forEach(function(t) {
                    x.images.push(t.images.original.url);
                })
            })
    },
    methods: {
        updateSearch() {
            let x  = this;
            let query = this.input.replace(' ','_');
            fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=GkCKerLay5i7Vqx2sYJOiSE5dGvyGYfU&limit=${x.num}`)
                .then(response => response.json())
                .then(function(data) {
                    // console.log(data);
                    x.data=data.data;
                    x.images = [];
                    x.data.forEach(function(t) {
                        x.images.push(t.images.downsized.url);
                    })
                })
        },
        addToList(e) {
            // console.log(e.target.src);
            this.list.push(e.target.src);
        },
        removeFromList(e){
            if(this.list.length == 1) {
                this.list.shift();
            } else if (this.list.indexOf(e.target.src) == 0) {
                this.list.shift();
            } else {
                this.list.splice(this.list.indexOf(e.target.src),this.list.indexOf(e.target.src));
            }
        }
    }
});

new Vue({
    el: '#entry',

})

