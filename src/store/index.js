import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Hangout with the Gang',
        date: new Date(),
        completed: false,
        description: 'Clubbing at Quilox with Olisa and Chike'
      }
    ]
  },
  mutations: {
    ADD_TODO (state, todo) {
      state.todos.push({
        title: todo.title,
        description: todo.description,
        date: todo.date,
        completed: false
      })
    },
    REMOVE_TODO (state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO (state, todo) {
      todo.completed = !todo.completed
    }
  },
  actions: {
    addTodo ({commit}, todo) {
      commit('ADD_TODO', todo)
    },
    removeTodo ({commit}, todo) {
      commit('REMOVE_TODO', todo)
    },
    completeTodo ({commit}, todo) {
      commit('COMPLETE_TODO', todo)
    }
  },
  getters: {
    todos: state => state.todos
  }
})
