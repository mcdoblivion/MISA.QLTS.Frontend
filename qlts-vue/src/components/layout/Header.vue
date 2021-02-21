<template>
  <div class="header">
    <div class="header-left">
      <p><span style="color: #20B6FE">Tài sản</span> / <span>Danh sách tài sản</span></p>
    </div>
    <div class="header-right">
      <div class="header-right-group">
        <p>Sở tài chính</p>
      </div>
      <div class="header-right-group">
        <select>
          <option value="">2000</option>
        </select>
      </div>
      <div class="header-right-group">
        <img src="../../assets/icon/help.svg" />
      </div>
      <div class="header-right-group">
        <img src="../../assets/icon/bell.svg" />
      </div>
      <div class="header-right-group">
        <img src="../../assets/icon/Divider.svg" />
      </div>
      <div class="header-right-group">

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E8E8E8;
  padding: 2px 20px;
}
.header-left span{
  font-size: 14px;
  font-weight: 500;
}
.header-right {
  display: flex;
}
.header-right p {
  font-weight: bold;
  font-size: 14px;
}
.header-right-group{
  margin-left: 20px;
  display: flex;
  align-items: center;
}
</style>
