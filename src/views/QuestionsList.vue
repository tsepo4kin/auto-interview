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
import questionsData from "@/tasks.json";
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
    questionsData: questionsData,
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
