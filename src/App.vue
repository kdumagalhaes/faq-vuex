<template>
  <div class="container">
    <div class="app">
      <component :is="$currentComponent" />
    </div>
  </div>
</template>

<script>
// components
import FaqCategories from './components/FaqCategories';
import FaqAnswers from './components/FaqAnswers';
import FaqQuestions from './components/FaqQuestions';

export default {
  name: 'App',
  components: {
    FaqCategories,
    FaqAnswers,
    FaqQuestions,
  },
  computed: {
    $currentComponent() {
      return this.$store.getters.$currentComponent;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f5f6f8;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .app {
    width: 100%;
    max-width: 305px;
    height: auto;
    background-image: linear-gradient(to bottom, #3f4452, #26282c);
    border-radius: 15px;
  }
}
</style>
