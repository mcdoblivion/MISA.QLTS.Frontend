<template>
  <div class="footer">
    <div class="footer-left">
      <div>Tổng tài sản: {{ totalAsset }}</div>
    </div>
    <div class="footer-right">
      <div>Tổng nguyên giá: {{ totalOriginalPrice }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    totalAsset: {
      type: String,
      default: "0",
    },
    totalOriginalPrice: {
      type: String,
      default: "0",
    },
  },
};
</script>
<style>
</style>