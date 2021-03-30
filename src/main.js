import Vue from 'vue';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: true,
    },
    methods: {
        hide: function () {
            this.seen = !(this.seen)
        }
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        message: 'puta puta puta tua mae eh uma puta'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})


Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetables'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Whatever else humans are supposed to eat'}
        ]
    }
})