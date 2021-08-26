<template>
  <v-container>
    <h1 class="text-center">About auto interview</h1>
    <v-row>
      <v-col lg="9" class="mx-auto">
        <p>
          An application where you can view the most popular interview
          questions, sort them by difficulty and technology, see the answer, and
          read more in the links to the specification, documentation, etc.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="6" class="ml-auto">
        <img src="" alt="screen" />
      </v-col>
      <v-col lg="3" class="mr-auto">
        <p>
          SCR description how work interview and all questions pages. Add you
          can add new qst on github pulreq in form { <br />
          id: lastQstid+1, <br />
          type: JS/HTML/CSS/VUE/Algoritms, <br />
          difficulty: 1-5, <br />
          title: You qst, <br />
          solution: solution qst, <br />
          link: src <br />
          }
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="4" class="ml-auto">
        <v-btn style="width: 100%" to="/interview" color="primary"
          >Start interview</v-btn
        >
      </v-col>
      <v-col lg="4" class="mr-auto">
        <v-btn style="width: 100%" to="/questionsList" color="primary"
          >Check all questions</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
