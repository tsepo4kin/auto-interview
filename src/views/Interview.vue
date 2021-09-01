<template>
  <v-container>
    <interview-params
      v-if="!filtered"
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
import questionsData from "@/tasks.json";
export default {
  components: {
    InterviewParams,
    QuestionItem,
  },
  data: () => ({
    filteredQuestions: [],
    filtered: false,
    questionsData: questionsData,
  }),
  methods: {
    filterQuestions(e) {
      // filter by diff and type
      this.filteredQuestions = this.questionsData.filter((question) => {
        if (
          e.difficulty >= question.difficulty &&
          e.type.includes(question.type)
        ) {
          return true;
        }
      });
      // random sort for limit count
      this.filteredQuestions.sort(() => {
        return Math.random() - 0.5;
      });
      this.filteredQuestions.length = e.count;

      this.filtered = true;
    },
  },
};
</script>

<style></style>
