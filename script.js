const app = new Vue ({
    el:"#app",
    data(){
        return {
            todoItems: [],
            input:'',
        }
    },
    methods: {
        submit(){
            if(!this.input){
                return;
            }
            this.todoItems.unshift({
                task:this.input,
                time: moment(Date.now()).format('MMMM Do YYYY, h:mm a'),
                done:false
            });
            this.input='';

        },
        remove(item) {
            this.todoItems.splice(item, 1)
        },
    }
})


