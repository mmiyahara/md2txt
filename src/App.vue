<template>
  <div id="app">
    <TheSetting
      v-if="isSettingOpen"
      :h1.sync="setting.h1"
      :h2.sync="setting.h2"
      :h3.sync="setting.h3"
      :h4.sync="setting.h4"
      :li.sync="setting.li"
    />
    <TheHeader
      :is-output-open="isOutputOpen"
      :is-large-screen="isLargeScreen"
      @setting-toggled="isSettingOpen = !isSettingOpen"
      @output-toggled="isOutputOpen = !isOutputOpen"
    />
    <TheMain
      :is-output-open="isOutputOpen"
      :is-large-screen="isLargeScreen"
      :setting="setting"
      :class="{ 'is-setting-open': isSettingOpen }"
    />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
import TheSetting from "./components/TheSetting.vue";

export default {
  name: "App",
  data() {
    return {
      isSettingOpen: false,
      isOutputOpen: false,
      isLargeScreen: window.innerWidth > 480,
      setting: {
        h1: '■',
        h2: '●',
        h3: '○',
        h4: '・',
        li: '-'
      },
    };
  },
  components: {
    TheHeader,
    TheMain,
    TheSetting,
  },
  methods: {
    checkScreenSize: function() {
      this.isLargeScreen = window.innerWidth > 480;
    },
    track () {
      this.$gtag.pageview({
        page_path: '/',
      });
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize);
  }
};
</script>

<style>
:root {
  box-sizing: border-box;
  font-size: calc(1vw + 0.6em);
}

@media (min-width: 480px) {
  :root {
    font-size: .8em;
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: 'Roboto', 'Noto Serif JP', monospace;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #bbbbbb;
  min-height: 100vh;
}
</style>
