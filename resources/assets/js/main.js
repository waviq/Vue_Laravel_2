/**
 * Created by waviq on 20/08/2016.
 */
import Vue from "vue";

Vue.component('todo-add',{
    template:'#todoAdd-template',

    data:function () {
        return{
            MyAgenda: {}
        }
    },

    methods:{
        addNewTodo(newAgenda){
            this.todo.push(newAgenda);
            this.MyAgenda = {id: null, agenda: '',completed:false}
        }
    }
});

Vue.component('todo-component',{
    template:'#todoTemplate',

    props:['todoe','MyAgendae'],

    methods:{
        addNewAgenda(newAgenda){
            this.todo.push(newAgenda);
            this.MyAgenda = {id: null, agenda: '',completed:false}
        },
        todoCompleted(todo){
            todo.completed = !todo.completed;
        },
        deleteTodo(todos){
            this.todo.$remove(todos)
        },
    },

    data:function () {
        return{
            title: 'Welcome Vue Js',
            name: '',
            todo: [
                {id: 1, agenda: 'Go to shopping', completed:true},
                {id: 2, agenda: 'Go to Sleep',completed:false}
            ],

        }
    },
    computed:{
        toDoCount(){
            return this.todo.length;
        }
    },
});





new Vue({
    el: 'body',

    watch:{
        MyAgandae(newValue, oldValue){
            console.log(newValue);
        }
    }




});

