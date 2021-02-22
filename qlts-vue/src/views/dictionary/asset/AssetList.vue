<template>
  <div class="asset-list">
    <div class="header-content">
      <div class="header-content-left">
        <div class="search">
          <input type="text" placeholder="Tìm kiếm" />
          <div class="icon icon-search"></div>
        </div>
      </div>
      <div class="header-content-right">
        <div class="btn btn-add">Thêm</div>
        <div class="icon icon-refresh"></div>
        <div class="icon icon-delete"></div>
      </div>
      <asset-list-detail />
    </div>
  </div>
</template>

<script>
import AssetListDetail from "./AssetListDetail.vue";
export default {
  components: { AssetListDetail },
  data() {
    return {};
  },
};
</script>