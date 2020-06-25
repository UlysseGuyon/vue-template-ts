<template>
  <div id="app">
    Application {{ name }} by {{ author }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue { }
</script>

<style>
/* basic fonts for the entire app */
#app {
    font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
}

/* class noselect used to disable the text selection */
.noselect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
}
</style>
