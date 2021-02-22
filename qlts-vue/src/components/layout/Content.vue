<template>
  <div class="content">
    <asset-list />
    <asset-list-detail />
  </div>
</template>

<script>
import AssetList from "../../views/dictionary/asset/AssetList.vue";
import AssetListDetail from "../../views/dictionary/asset/AssetListDetail.vue";
export default {
  components: { AssetList, AssetListDetail },
};
</script>

<style>
</style>