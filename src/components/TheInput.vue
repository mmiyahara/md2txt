<template>
  <div class="input-wrapper">
  <prism-editor
    id="input"
    class="input"
    v-model="input"
    line-numbers
    language="md"
    v-if="!isOutputOpen"
    :highlight="highlighter"
    @input="$emit('update:input', input)"
  ></prism-editor>
  </div>
</template>

<script>
  import Prism from 'prismjs';
  Prism.highlightAll()
  import { PrismEditor } from 'vue-prism-editor';
  import 'vue-prism-editor/dist/prismeditor.min.css';

  export default {
    components: {
      PrismEditor,
    },
    props: ['isOutputOpen'],
    data: () => {
      return {
        input: '# md2txt\n\n'
        + '## md2txt について\n\n'
        + 'Markdown で記述した文章を指定したフォーマットに変換できます。\n'
        + 'こんな人に便利なツールです。\n\n'
        + '- Markdown で取ったメモを変換して共有したい。\n'
        + '- 社内の Markdown 文章が読みづらい。\n\n'
        + '### 使い方\n\n'
        + '1. 画面左上のアイコンからフォーマットを指定できます。\n'
        + '2. markdown テキストを入力します。\n'
        + '3. 指定したフォーマットのテキストが表示されます。\n'
        + '4. 右上のアイコンから出力結果をコピーできます。\n\n'
        + '### その他\n\n'
        + '- 入力された情報はサーバーに送信、保存されません。\n\n'
      }
    },
    methods: {
      highlighter(code) {
        return Prism.highlight(code, Prism.languages.markdown, 'markdown')
      }
    }
  };
</script>

<style>
.input-wrapper {
  grid-column: 1 / 2;
  border-width: 0 .1em 0 0;
  border-style: solid;
  border-color: #ccc;
  background: #2d2d2d;
}

.input {
  color: #ccc;
  font-size: 1.2em;
  font-family: 'Roboto Mono', 'Noto Serif JP', monospace;
  line-height: 1.5;
  height: calc(100vh - 25px);
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>