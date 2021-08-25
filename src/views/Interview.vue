<template>
  <v-container>
    <interview-params
      v-if="loading"
      @submitInterviewParams="filterQuestions"
    ></interview-params>
    <div v-else>
      <question-item
        v-for="el of filteredQuestions"
        :key="el.id"
        :questionData="el"
      ></question-item>
    </div>
  </v-container>
</template>

<script>
import InterviewParams from "../components/InterviewParams.vue";
import QuestionItem from "../components/QuestionItem.vue";
export default {
  components: {
    InterviewParams,
    QuestionItem,
  },
  data: () => ({
    filteredQuestions: [],
    loading: true,
    questionsData: [
      {
        id: 1,
        type: "JS",
        difficulty: "1",
        title: "Разница между let, var, const в JS",
        solution: "Область видимости и невозможность изменить const",
      },
      {
        id: 2,
        type: "JS",
        difficulty: "1",
        title: "Обработка событий в JS",
        solution: "AddEventListener",
      },
      {
        id: 3,
        type: "JS",
        difficulty: "1",
        title: "Всплытие и погружение событий",
        solution: "Как работает prevent, stopPropagation etc",
      },
      {
        id: 4,
        type: "CSS",
        difficulty: "2",
        title: "CSS quest",
        solution: "css",
      },
      {
        id: 5,
        type: "CSS",
        difficulty: "3",
        title: "css hard",
        solution: "AddEventListener",
      },
      {
        id: 6,
        type: "HTML",
        difficulty: "5",
        title: "Всплытие и погружение событий",
        solution: "Как работает prevent, stopPropagation etc",
      },
    ],
  }),
  methods: {
    filterQuestions(e) {
      this.filteredQuestions = this.questionsData.filter((question) => {
        if (
          e.difficulty >= question.difficulty &&
          e.type.includes(question.type)
        ) {
          return true;
        }
      });

      this.loading = false;
    },
  },
};
</script>

<style></style>
