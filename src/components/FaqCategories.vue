<template>
  <div class="faq-categories">
    <div class="faq-categories__top">
      <img src="@/assets/images/astronaut.svg" alt="astronauta" />
      <h1>Perguntas frequantes</h1>
      <h3>Escolha a categoria desejada</h3>
    </div>
    <div class="faq-categories__categories">
      <li
        v-for="category in $allFaqCategories"
        :key="category.id"
        @click="goToQuestion(category)"
      >
        <img :src="getIcon(category)" :alt="`${category.title}`" />
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
    $allFaqCategories() {
      return this.$store.getters.$allFaqCategories;
    },
  },

  methods: {
    goToQuestion(category) {
      this.$store.dispatch('changeCurrentComponent', 'FaqQuestions');
      this.$store.dispatch('getSingleCategory', category);
    },
    getIcon(category) {
      return require(`@/assets/images/${category.icon}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-categories {
  color: #f5f6f8;

  .faq-categories__top {
    line-height: 1.5rem;
    margin-bottom: 30px;
    padding: 35px 0 0 35px;

    h1 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 0.813rem;
      font-weight: normal;
    }
  }

  .faq-categories__categories {
    padding: 0 5px;

    li {
      display: flex;
      align-items: center;
      height: 60px;
      cursor: pointer;
      padding: 0 30px;
      margin-bottom: 10px;

      &:hover {
        background-color: #3f4452;
      }
    }

    img {
      width: 1.5rem;
      margin-right: 25px;
    }
  }
}
</style>
