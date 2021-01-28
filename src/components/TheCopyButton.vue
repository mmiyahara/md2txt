<template>
  <div>
  <span
    class="copy-to-clipboard material-icons"
    @click="copyToClipboard"
  >
  {{ this.icon }}
  </span>
  <span
    class="copy-to-clipboard-message"
    v-if="isCopied"
  >
  {{ this.message }}
  </span>
  </div>
</template>

<script>
export default {
  name: 'TheCopyButton',
  props: ['text'],
  data() {
    return {
      icon: 'content_copy',
      message: 'Copied!',
      isCopied: false
    }
  },
  methods: {
    copyToClipboard: function() {
      navigator.clipboard.writeText(this.text).then(() => {
        this.isCopied = true;
        this.icon = 'done';
        setTimeout(() => {
          this.icon = 'content_copy';
          this.isCopied = false;
        }, 2000);
      })
    }
  }
}
</script>

<style scoped>

.copy-to-clipboard {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.copy-to-clipboard-message {
  color: #bbbbbb;
  position: absolute;
  top: 25px;
  right: 5px;
  cursor: pointer;
}

</style>
