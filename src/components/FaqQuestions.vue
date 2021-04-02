<template>
  <div class="faq-questions">
    <div class="faq-questions__top">
      <img
        class="faq-questions--arrow"
        src="@/assets/images/arrow-left.svg"
        alt="arrow"
        @click="backToFaqCategories()"
      />
      <span>
        <h1>{{ $singleCategory.title }}</h1>
        <h3>Selecione uma pergunta</h3>
      </span>
      <img
        class="faq-questions--icon"
        :src="getIcon($singleCategory)"
        :alt="`${$singleCategory.icon}`"
      />
    </div>
    <div class="faq-questions__questions">
      <li
        v-for="question in $singleCategory.questions"
        :key="question.id"
        @click="goToAnswer(question)"
      >
        {{ question.title }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqQuestions',
  computed: {
    $singleCategory() {
      return this.$store.getters.$singleCategory;
    },
  },
  methods: {
    backToFaqCategories() {
      this.$store.dispatch('changeCurrentComponent', 'FaqCategories');
    },
    goToAnswer(question) {
      this.$store.dispatch('getSingleQuestion', question);
      this.$store.dispatch('changeCurrentComponent', 'FaqAnswers');
    },
    getIcon(category) {
      return require(`@/assets/images/${category.icon}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-questions {
  color: #f5f6f8;

  .faq-questions__top {
    margin-bottom: 30px;
    padding: 35px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #4d535c;

    h1 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 0.813rem;
      font-weight: normal;
    }

    span {
      line-height: 1.5rem;
    }

    .faq-questions--arrow {
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      width: 2.8rem;

      &:hover {
        background-color: #26282c;
      }
    }

    .faq-questions--icon {
      width: 1.5rem;
    }
  }

  .faq-questions__questions {
    li {
      display: flex;
      align-items: center;
      height: 50px;
      cursor: pointer;
      padding: 0 30px;
      margin-bottom: 5px;

      &:hover {
        background-color: #3f4452;
      }
    }
  }
}
</style>
