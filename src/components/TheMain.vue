<template>
  <div class="main">
    <TheInput
      :input.sync="input"
      :is-output-open="isOutputOpen"
    />
    <TheOutput
      :input="input"
      :is-output-open="isOutputOpen"
      :is-large-screen="isLargeScreen"
      :setting="setting"
    />
  </div>
</template>

<script>
import TheInput from './TheInput.vue';
import TheOutput from './TheOutput.vue';

export default {
  name: 'TheMain',
  data() {
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
      + '- 入力された情報はサーバーに送信、保存されません。\n'
    }
  },
  props: ['isOutputOpen', 'isLargeScreen', 'setting'],
  components: {
    TheInput, TheOutput
  }
}
</script>

<style>
.main {
  position: relative;
}

@media (min-width: 480px) {
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
