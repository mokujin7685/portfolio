<template>
  <!-- <v-app> -->
  <!-- <v-app-bar app color="#CAB4A680" shrink-on-scroll dark class="app-bar"> -->
  <!-- <h1>S.H PARK Frontend Developer</h1> -->
  <!-- <v-spacer></v-spacer>
      <h1 class="top-menu">INTRO</h1>
      <h1>&emsp;</h1>
      <h1 class="top-menu">Who am I</h1>
      <h1>&emsp;</h1>
      <h1 class="top-menu">CAREER</h1> -->
  <!-- <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Intro</v-tab>
          <v-tab>Who am I</v-tab>
          <v-tab>Career</v-tab>
        </v-tabs>
      </template> -->
  <!-- </v-app-bar> -->

  <!-- <v-main class="main-view"> -->
  <!-- <router-view /> -->
  <!-- </v-main> -->
  <!-- </v-app> -->
  <v-card class="overflow-hidden">
    <!-- https://picsum.photos/1920/1080?random-->
    <v-app-bar
      absolute
      color="#CAB4A680"
      dark
      shrink-on-scroll
      prominent
      src="@/assets/background/background.svg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(202, 180, 166, 0.802), rgba(202, 180, 166, 0.202)"
        ></v-img>
      </template>
      <v-app-bar-title>Title</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
<style>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css");

* {
  font-family: "pretendard variable";
  /* color:#cab4a680; */
}
.app-bar {
  width: 100%;
  height: 64px;
}
.main-view {
  width: 100%;
  height: -webkit-calc(100vh - 64px); /* for Chrome, Safari */
  height: -moz-calc(100vh - 64px); /* for Firefox */
  height: calc(100vh - 64px); /* for IE */
}
.top-menu {
  font-weight: 500;
}
</style>
