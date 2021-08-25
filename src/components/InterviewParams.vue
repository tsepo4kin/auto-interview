<template>
  <v-form>
    <v-row>
      <v-col lg="2" class="ml-auto">
        <v-text-field
          label="Questions count"
          placeholder="10"
          v-model="count"
          outlined
          hide-details="true"
          shaped
          type="number"
        ></v-text-field>
      </v-col>
      <v-col lg="2" class="mr-auto">
        <v-select
          :items="selectDifficulty"
          v-model="difficulty"
          outlined
          hide-details="true"
          shaped
          label="Choose difficulty"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mx-auto" lg="4">
        <v-select
          :items="selectType"
          v-model="type"
          outlined
          hide-details="true"
          solo
          label="Choose questions type"
          chips
          multiple
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mx-auto" lg="4">
        <v-btn
          @click="submitForm"
          :disabled="isDisabled"
          color="primary"
          style="width: 100%"
          >Submit</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
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
      this.$emit("submitInterviewParams", {
        count: this.count,
        difficulty: this.difficulty,
        type: this.type,
      });
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
