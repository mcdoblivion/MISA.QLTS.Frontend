<template>
  <div class="content">
    <asset-list />
  </div>
</template>

<script>
import AssetList from "../../views/dictionary/asset/AssetList.vue";
export default {
  components: { AssetList },
};
</script>

<style scoped>
.content {
  padding-bottom: 50px;
}
</style>