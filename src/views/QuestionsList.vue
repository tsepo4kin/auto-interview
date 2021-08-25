<template>
  <v-container>
    <question-item
      v-for="question of questionsData"
      :key="question.id"
      :questionData="question"
    ></question-item>
  </v-container>
</template>

<script>
import QuestionItem from "../components/QuestionItem.vue";
export default {
  components: {
    QuestionItem,
  },
  data: () => ({
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
    ],
  }),
};
</script>

<style></style>
