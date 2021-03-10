<template>
  <div
    v-if="isLargeScreen || isOutputOpen"
    class="output-wrapper"
  >
    <prism-editor
      id="output"
      class="output"
      v-model="this.output"
      readonly
      line-numbers
      language="md"
      :highlight="highlighter"
    ></prism-editor>
    <TheCopyButton
      :text="output"
    />
  </div>
</template>

<script>
import Prism from 'prismjs';
Prism.highlightAll()
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import TheCopyButton from './TheCopyButton.vue'

const worker = new Worker('@/worker.js', {type: 'module'});

export default {
  name: 'TheOutput',
  data() {
    return {
      output: ''
    }
  },
  components: {
    PrismEditor, TheCopyButton
  },
  props: ['isOutputOpen', 'isLargeScreen', 'input', 'setting'],
  mounted() {
    worker.postMessage({setting: this.setting, input: this.input});
    worker.onmessage = (event) => this.output = event.data;
  },
  watch: {
    input: function() {
      worker.postMessage({setting: this.setting, input: this.input});
      worker.onmessage = (event) => this.output = event.data;
    },
    setting: {
      handler (){
        worker.postMessage({setting: this.setting, input: this.input});
        worker.onmessage = (event) => this.output = event.data;
      },
      deep: true
    }
  },
  methods: {
    highlighter(code) {
      return Prism.highlight(code, Prism.languages.markdown, 'markdown')
    }
  }
}
</script>

<style>
.output-wrapper {
  grid-column: 2 / 3;
  border-width: 0 0 0 .3em;
  border-style: solid;
  border-color: #bbb;
  scrollbar-color: #2d2d2d;
  scrollbar-width: thin;
}

.output {
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100vh - 25px);
  text-align: left;
  background: #2d2d2d;

  font-size: 1.2em;
  font-family: 'Roboto Mono', 'Noto Serif JP', monospace;
  line-height: 1.5;
}

.prism-editor__textarea:focus {
  outline: none;
}

.output ol {
  list-style-type: decimal;
}

@media (min-width: 480px) {
  .output {
    position: static;
  }
}

</style>
