<template>
  <div class="faq-categories">
    <div class="faq-categories__top">
      <img src="@/assets/images/astronaut.svg" alt="astronauta" />
      <h1>Perguntas frequantes</h1>
      <h3>Escolha a categoria desejada</h3>
    </div>
    <div class="faq-categories__categories">
      <li v-for="category in $allFaqCategories" :key="category.id">
        <p>{{ category.title }}</p>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqCategories',

  created() {
    this.$store.dispatch('fetchFaqCategories');
  },

  computed: {
    allFaqCategories() {
      return this.$store.getters.$allFaqCategories;
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-categories {
  color: #fff;

  .faq-categories__top {
    line-height: 1.5rem;

    h1 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 0.813rem;
      font-weight: 100;
    }
  }
}
</style>
