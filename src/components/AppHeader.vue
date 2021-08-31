<template>
  <v-app-bar app color="primary" dark>
    <v-btn to="/" class="d-flex align-center" text height="80">
      <v-img
        alt="Interview Logo"
        class="shrink mr-2"
        contain
        src="../assets/autoInterviewLogo.png"
        transition="scale-transition"
        width="80"
      />
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn style="cursor: pointer" to="/interview" text>
      <span class="mr-2">Interview</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>

    <v-btn class="mx-3" style="cursor: pointer" to="/questionsList" text>
      <span class="mr-2">All questions</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
