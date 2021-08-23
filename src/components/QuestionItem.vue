<template>
  <v-row>
    <v-card width="800px" class="mx-auto mt-2">
      <v-card-title> {{ questionData.title }}// some data </v-card-title>
      <v-card-text v-if="showSolution">{{ questionData.solution }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="showSolution = !showSolution"
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
