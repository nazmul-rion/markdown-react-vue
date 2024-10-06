<template>
    <div v-html="compiledMarkdown"></div>
  </template>
  
  <script>
  import {marked} from 'marked';
  
  export default {
    props: {
      markdown: {
        type: String,
        required: true
      }
    },
    computed: {
      compiledMarkdown() {
        return marked(this.markdown, { sanitize: true });
      }
    }
  };
  </script>
  