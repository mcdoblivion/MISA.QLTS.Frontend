<template>
  <div id="app">
    <v-main class="main">
      <div class="main-left">
        <LeftSidebar />
      </div>
      <div class="main-right">
        <Header />
        <Content />
        <Footer />
      </div>
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
  min-height: 780px;
  overflow: hidden;
}
.main{
  display: flex;
  width: 100%;
  height: 100%;
}
.main-left{
  width: 15%;
}
.main-right{
  width: 85%;
}
</style>
