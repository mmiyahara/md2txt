<template>
  <header class="header">
    <span class="setting-toggle material-icons" @click="$emit('setting-toggled')">settings</span>
    <h1 class="title">md2txt</h1>
    <span
      class="output-toggle material-icons"
      @click="$emit('output-toggled')"
    >
      {{ this.controlsOutputIcon() }}
    </span>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: ['isOutputOpen', 'isLargeScreen'],
  methods: {
    controlsOutputIcon: function() {
      if (!this.isLargeScreen) {
        if (this.isOutputOpen) {
          return 'visibility_off';
        }
        return 'visibility';
      }
      return '';
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #2d2d2d;
  display: flex;
  align-items: center;
  padding: .05em 0;
  border-bottom: .25em solid #ccc;
}

.setting-toggle {
  margin-left: 6px;
  margin-right: auto;
  z-index: 2;
}

@media (min-width: 480px) {
  .setting-toggle {
    margin-left: .25em;
  }
}

.setting-toggle:hover {
  cursor: pointer;
}

.output-toggle {
  margin-right: 6px;
  margin-left: auto;
  z-index: 2;
}

.output-toggle:hover {
  cursor: pointer;
}

.material-icons {
  font-size: 1.6em;
}

.title {
  font-size: 1.6rem;
  margin: 0;
  margin-top: -2px;
}

@media (min-width: 480px) {
  .material-icons {
    font-size: 2.5em;
  }
  .title {
    font-size: 2.5em;
    letter-spacing: 2px;
    margin-left: -1.3em;
  }
}
</style>
