<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-list two-line>
            <v-list-tile avatar ripple v-for="(item, index) in todos" v-bind:key="item.title">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.description }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.date }}</v-list-tile-action-text>
                <v-list-tile-action-text>{{ item.time }}</v-list-tile-action-text>                
              </v-list-tile-action>
              <v-btn @click="remove(todos.indexOf(item))">Delete</v-btn>
              <v-btn v-if="!item.completed" @click="completed(todos.indexOf(item))">Complete</v-btn>
              <v-btn flat v-else><v-icon>done</v-icon>Completed</v-btn>
              <v-divider v-if="index + 1 < todos.length"></v-divider>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      todos () {
        return this.$store.getters.todos
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      completed (todo) {
        this.$store.dispatch('completeTodo', this.todos[todo])
      },
      remove (todo) {
        this.$store.dispatch('removeTodo', this.todos[todo])
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
