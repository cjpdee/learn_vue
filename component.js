export default (function() {
    Vue.component('myComponent', {
        props: {
            message : {
                type: String,
                default: 'Hello world'
            }
        },
        template:   `<div>
                        <span>{{ message }}</span>
                    </div>`,
        data() {
            return {
                
            }
        }
    })
})();