/**
 * Created by waviq on 20/08/2016.
 */
import Vue from "vue";

new Vue({
    el: 'body',
    data: {
        title: 'Welcome Vue Js',
        name: '',
        todo: [
            {id: 1, agenda: 'Go to shopping', completed:true},
            {id: 2, agenda: 'Go to Sleep',completed:false}
        ],
       MyAgenda: {id: null, agenda: '',completed:false}

    },

    computed:{
      toDoCount(){
          return this.todo.length;
      }
    },
    methods: {
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

    }

});

