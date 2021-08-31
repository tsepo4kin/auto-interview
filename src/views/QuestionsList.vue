<template>
  <v-container>
    <v-text-field v-model="taskName"></v-text-field>
    <v-select :items="selectType" v-model="type"></v-select>
    <v-select :items="selectDifficulty" v-model="difficulty"></v-select>
    <question-item
      v-for="question of filteredTasks"
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
    taskName: null,
    selectType: ["JS", "HTML", "CSS", "VUE", "Algoritms"],
    type: null,
    selectDifficulty: [1, 2, 3, 4, 5],
    difficulty: null,
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
  computed: {
    filteredTasks() {
      let result = this.questionsData;
      if (this.taskName) {
        result = this.questionsData.filter((e) =>
          e.title.toLowerCase().includes(this.taskName.toLowerCase())
        );
      }

      if (this.difficulty) {
        result = this.questionsData.filter(
          (e) => e.difficulty <= this.difficulty
        );
      }

      if (this.type) {
        result = this.questionsData.filter((e) => this.type.includes(e));
      }
      return result;
    },
  },
};
</script>

<style></style>
