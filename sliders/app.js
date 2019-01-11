import rating from './components/rating.vue';

var app = new Vue({
    el: '#app',
    template : `
        <div id="app">
            <h1>People</h1>
            <rating v-for="person in people"
                v-bind:name="person.name"
                v-bind:gender="person.gender"
                v-bind:height="person.height"
            ></rating>
        </div>
    `,
    data: {
        message : new Date().toLocaleString(),
        people : [
            {
                id : 1,
                name : 'Janet',
                gender : 'f',
                height: 10
            },
            {
                id : 2,
                name : 'BasicG',
                gender : 'm',
                height: 15
            }
        ]
    }
});
