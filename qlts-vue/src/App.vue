<template>
  <div id="app">
    <v-main>
      <LeftSidebar />
      <Header />
      <Content />
      <Footer />
    </v-main>
  </div>
</template>

<script>
import Content from "./components/layout/Content.vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
import LeftSidebar from "./components/layout/LeftSidebar.vue";

export default {
  name: "App",
  components: {
    Header,
    LeftSidebar,
    Content,
    Footer,
  },
};
</script>

<style>
@import "./styles/index.css";
#app {
  font-family: sans-serif;
  text-align: center;
}
</style>
