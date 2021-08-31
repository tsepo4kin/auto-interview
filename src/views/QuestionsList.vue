<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col lg="7">
          <v-text-field label="task name" v-model="taskName"></v-text-field>
        </v-col>
        <v-col lg="4">
          <v-select
            clearable
            label="task types"
            multiple
            outlined
            solo
            dense
            chips
            :items="selectType"
            v-model="type"
          ></v-select>
        </v-col>
        <v-col lg="1">
          <v-select
            outlined
            solo
            dense
            label="difficulty"
            :items="selectDifficulty"
            v-model="difficulty"
          ></v-select>
        </v-col>
      </v-row>
    </v-form>
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
        link: "https://developer.mozilla.org/ru/",
      },
      {
        id: 2,
        type: "JS",
        difficulty: "1",
        title: "Обработка событий в JS",
        solution: "AddEventListener",
        link: "https://developer.mozilla.org/ru/",
      },
      {
        id: 3,
        type: "JS",
        difficulty: "1",
        title: "Всплытие и погружение событий",
        solution: "Как работает prevent, stopPropagation etc",
        link: "https://developer.mozilla.org/ru/",
      },
      {
        id: 4,
        type: "CSS",
        difficulty: "2",
        title: "CSS quest",
        solution: "css",
        link: "https://developer.mozilla.org/ru/",
      },
      {
        id: 5,
        type: "CSS",
        difficulty: "3",
        title: "css hard",
        solution: "AddEventListener",
        link: "https://developer.mozilla.org/ru/",
      },
      {
        id: 6,
        type: "HTML",
        difficulty: "5",
        title: "Всплытие и погружение событий",
        solution: "Как работает prevent, stopPropagation etc",
        link: "https://developer.mozilla.org/ru/",
      },
    ],
  }),
  computed: {
    filteredTasks() {
      let result = this.questionsData;
      if (this.taskName) {
        result = result.filter((e) =>
          e.title.toLowerCase().includes(this.taskName.toLowerCase())
        );
      }

      if (this.difficulty) {
        result = result.filter((e) => e.difficulty <= this.difficulty);
      }

      if (this.type) {
        result = result.filter((e) => this.type.includes(e.type));
      }
      return result;
    },
  },
};
</script>

<style></style>
