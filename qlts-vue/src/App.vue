<template>
  <div id="app">
    <div class="main">
      <div class="main-left">
        <LeftSidebar />
      </div>
      <div class="main-right">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
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
</style>
