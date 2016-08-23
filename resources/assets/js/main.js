/**
 * Created by waviq on 20/08/2016.
 */
import Vue from "vue";

var todoAgenda = Vue.extend({
    template:'#todoTemplate',

    props:['todoe'],

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

var todo_add = Vue.extend({
    template:'#todoAdd-template',

    data:function () {
        return{
            tempTodo:{id:null, agenda:'', completed:false},
        }
    },

    props:['newTodo'],

    methods:{
        addNewTodo(){
            this.newTodo = this.tempTodo;
            this.tempTodo = {id:null, agenda:'', completed:false};
        }
    }
});

Vue.component('todo-add',todo_add);
Vue.component('todo-component',todoAgenda);

new Vue({
    el: 'body',

    data:{
        newTodo: {}
    },

    watch:{
        newTodo(newValue, oldValue){
            console.log(newValue);
        }
    }




});

