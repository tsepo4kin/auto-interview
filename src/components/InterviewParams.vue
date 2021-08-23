<template>
  <v-row>
    <v-col class="mx-auto" lg="4">
      <v-form>
        <v-text-field
          label="Questions count"
          placeholder="10"
          v-model="count"
          outlined
          shaped
          type="number"
        ></v-text-field>
        <v-select
          :items="selectType"
          v-model="type"
          dense
          solo
          label="Choose questions type"
          chips
          multiple
        ></v-select>
        <v-select
          :items="selectDifficulty"
          v-model="difficulty"
          dense
          solo
          label="Choose difficulty"
        ></v-select>
        <v-btn :disabled="isDisabled" @click="submitForm" color="primary"
          >Start</v-btn
        >
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    selectType: ["JS", "HTML", "CSS", "VUE", "Algoritms"],
    selectDifficulty: [1, 2, 3, 4, 5],
    count: null,
    difficulty: null,
    type: null,
  }),
  methods: {
    submitForm() {
      console.log(this.count, this.difficulty, this.type);
    },
  },
  computed: {
    isDisabled() {
      if (!this.count || !this.difficulty || !this.type) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
