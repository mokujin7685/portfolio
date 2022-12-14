<template>
  <v-container class="main ma-0 pa-0" fluid>
    <!-- <v-img src="@/assets/background/background.svg" class="background-img">
    </v-img> -->
    <v-row class="text-center">
      <v-col cols="12" class="d-flex align-center justify-center">
        <h1 class="title-word title-word-1">FrontEnd&emsp;</h1>
        <h1 class="title-word title-word-2">Developer&emsp;</h1>
        <h1 class="title-word title-word-3">Hoon's&emsp;</h1>
        <h1 class="title-word title-word-4">Page</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IntroducePage",

  data: () => ({
    name: "hoons",
  }),
});
</script>
<style>
@import "./css/Introduce.css";
</style>
