<template>
  <div class="setting">
    <div class="setting-heading">
      <h3 class="setting-title">Heading</h3>
      <!-- TODO: コンポーネント化する -->
      <div class="setting-items">
        <span class="setting-item-name"># : </span>
        <input class="setting-item-value" :value="h1" @input="$emit('update:h1', $event.target.value)" placeholder="■" size=10>
      </div>
      <div class="setting-items">
        <span class="setting-item-name">## : </span>
        <input class="setting-item-value" :value="h2" @input="$emit('update:h2', $event.target.value)" placeholder="●" size=10>
      </div>
      <div class="setting-items">
      <span class="setting-item-name">### : </span>
        <input class="setting-item-value" :value="h3" @input="$emit('update:h3', $event.target.value)" placeholder="○" size=10>
      </div>
      <div class="setting-items">
      <span class="setting-item-name">#### : </span>
        <input class="setting-item-value" :value="h4" @input="$emit('update:h4', $event.target.value)" placeholder="・" size=10>
      </div>
    </div>
    <h3 class="setting-title">List</h3>
      <div class="setting-items">
        <span class="setting-item-name">- : </span>
        <input class="setting-item-value" :value="li" @input="$emit('update:li', $event.target.value)" placeholder="-" size=10>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TheSetting',
  props: ['h1','h2','h3','h4','li']
}
</script>

<style>
.setting {
  overflow-x: hidden;
  background-color: #2d2d2d;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 18em;
  z-index: 2;
}

.setting-items {
  display: flex;
  margin: 0 1em;
  justify-content: center;
}

.setting-item-name {
  width: 3em;
  text-align: left;
  line-height: 1.6;
}

.setting-item-value {
  border-radius: .3em;
  border-color: transparent;
  margin: .1em .2em;
}

</style>
