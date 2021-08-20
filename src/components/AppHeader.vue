<template>
  <v-app-bar app color="primary" dark>
    <router-link tag="div" to="/" class="d-flex align-center">
      <v-img
        alt="Interview Logo"
        class="shrink mr-2"
        contain
        src="logo"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="Interview Logo text"
        width="100"
      />
      temp text
    </router-link>

    <v-spacer></v-spacer>

    <router-link style="cursor: pointer" tag="v-btn" to="/interview" text>
      <span class="mr-2">Interview</span>
      <v-icon>mdi-open-in-new</v-icon>
    </router-link>

    <router-link
      class="mx-3"
      style="cursor: pointer"
      tag="v-btn"
      to="/questionsList"
      text
    >
      <span class="mr-2">All questions</span>
      <v-icon>mdi-open-in-new</v-icon>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
