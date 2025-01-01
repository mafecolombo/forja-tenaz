<template>
  <div class="main-div">
    <ForjaTenaz />
  </div>
</template>

<script>
import ForjaTenaz from '../components/ForjaTenaz.vue';

export default {
  name: 'HomePage',
  components: {
    ForjaTenaz 
  }
};
</script>

<style scoped>

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0%;
  padding: 0;
  background-color: rgba(248, 237, 237, 1);
  overflow-y: scroll;
}

</style>