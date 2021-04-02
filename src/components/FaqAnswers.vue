<template>
  <div class="faq-answers">
    <div class="faq-answers__top">
      <img
        class="faq-answers--arrow"
        src="@/assets/images/arrow-left.svg"
        alt="arrow"
        @click="backToFaqAnswers()"
      />
      <h2>{{ $singleQuestion.title }}</h2>
    </div>
    <p class="faq-answers__answer" v-html="$singleQuestion.content"></p>
  </div>
</template>

<script>
export default {
  name: 'FaqAnswers',
  computed: {
    $singleQuestion() {
      return this.$store.getters.$singleQuestion;
    },
  },
  methods: {
    backToFaqAnswers() {
      this.$store.dispatch('changeCurrentComponent', 'FaqQuestions');
    },
    getIcon(category) {
      return require(`@/assets/images/${category.icon}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-answers {
  color: #f5f6f8;

  .faq-answers__top {
    padding: 35px 35px 0 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1rem;
    }

    .faq-answers--arrow {
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      width: 2.8rem;
      margin-right: 15px;

      &:hover {
        background-color: #26282c;
      }
    }
  }

  .faq-answers__answer {
    padding: 35px;
    font-size: 0.813rem;
    line-height: 1.25rem;
  }
}
</style>
