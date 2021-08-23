<template>
  <div>
    <interview-params></interview-params>
    <v-container>
      <question-item
        v-for="el of questionsData"
        :key="el.id"
        :questionData="el"
      ></question-item>
    </v-container>
  </div>
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
