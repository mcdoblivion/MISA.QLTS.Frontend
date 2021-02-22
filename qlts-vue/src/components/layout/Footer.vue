<template>
  <div class="footer">
    <div class="footer-left">
      <div>Tổng tài sản:</div>
      <div>{{ totalAsset }}</div>
    </div>
    <div class="footer-right">
      <div>Tổng nguyên giá:</div>
      <div>{{ totalOriginalPrice }}</div>
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
      type: Number,
      default: 0,
    },
    totalOriginalPrice: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style>
</style>