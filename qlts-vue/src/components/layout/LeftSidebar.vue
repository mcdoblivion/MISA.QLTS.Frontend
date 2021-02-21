<template>
  <div class="left-sidebar">
    <div class="logo-group">
      <div>
         <img src='../../assets/icon/logo-qlts.svg' width="40"> <span>QLTS.VN</span>
      </div>
      <div class="common-item">
         <img src='../../assets/icon/hamburger-menu.svg' width="20">
      </div>
    </div>
    <div class="menu">
      <div class="menu-item">
        <img src='../../assets/icon/computer-line.svg'> <span>Tổng quan</span>
      </div>
      <div class="menu-item">
        <img src='../../assets/icon/community-line.svg'> <span>Tài sản</span>
      </div>
      <div class="menu-item">
        <img src='../../assets/icon/paint-brush-line.svg'> <span>Công cụ dụng cụ</span>
      </div>
      <div class="menu-item">
        <img src='../../assets/icon/common.svg'> <span>Danh mục</span>
      </div>
      <div class="menu-item">
        <img src='../../assets/icon/search-eye-line.svg'> <span>Tra cứu</span>
      </div>
      <div class="menu-item">
        <img src='../../assets/icon/settings.svg'> <span>Hệ thống</span>
      </div>
      <div class="menu-item">
        <img src='../../assets/icon/pie-chart-line.svg'> <span>Báo cáo</span>
      </div>
    </div>
  </div>
</template>

<script>
  //import ComputerIcon from '../../assets/icon/computer-line.svg';
export default {};
</script>

<style>
  .left-sidebar{
   background-color: #011239;
   height: 100%;
   margin-bottom: -5000px; /* any large number will do */
    padding-bottom: 5000px; 
  }
  .logo-group{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }
  .left-sidebar span{
    color: white;
  }
  .logo-group span {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    top: -10px;
  }
  .logo-group .common-item{
    display: flex;
    align-items: center;
  }
  .menu-item{
    text-align: left;
    padding: 10px 20px;
  }
  .menu-item:hover{
    background-color: #273557;
    cursor: pointer;
  }
  .menu-item span {
    font-size: 13px;
    position: relative;
    top: -6px
  }
</style>