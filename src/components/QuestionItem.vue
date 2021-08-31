<template>
  <v-row>
    <v-card width="800px" class="mx-auto mt-2">
      <v-card-title>
        <h3>{{ questionData.title }}</h3>
        <v-chip class="ml-auto">{{ questionData.type }}</v-chip>
        <span class="ml-4">{{ questionData.difficulty }}/5</span>
      </v-card-title>
      <v-card-text v-if="showSolution" class="pb-0">
        <h4>Answer</h4>
        {{ questionData.solution }} <br />
        <a :href="questionData.link" target="_blank">View more</a>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="ml-auto"
          color="primary"
          @click="showSolution = !showSolution"
          >Show answer</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
export default {
  props: {
    questionData: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    showSolution: false,
  }),
};
</script>

<style></style>
