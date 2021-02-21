<template>
  <div class="asset-list">
    <div class="asset-list-top">
      <div class="search-group">
        <input placeholder="Tìm kiếm" />
        <img src="../../../assets/icon/search-eye-line.svg" />
      </div>
      <div>
        <button class="add-item-button">Thêm</button>
        <button><img src="../../../assets/icon/refresh.svg" /></button>
        <button><img src="../../../assets/icon/trash.svg" /></button>
      </div>
    </div>
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>NGÀY GHI TĂNG</th>
            <th>MÃ TÀI SẢN</th>
            <th>TÊN TÀI SẢN</th>
            <th>LOẠI TÀI SẢN</th>
            <th>PHÒNG BAN</th>
            <th>NGUYÊN GIÁ</th>
            <th>CHỨC NĂNG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>29/9/2019</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>
              <button><img src="../../../assets/icon/seperator.svg" /></button>
              <button><img src="../../../assets/icon/trash.svg" /></button>
              <button><img src="../../../assets/icon/pie-chart-line.svg" /></button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>29/9/2019</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>29/9/2019</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>29/9/2019</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>29/9/2019</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>29/9/2019</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
  table, td{
    border: 1px solid gray;
    border-collapse: collapse;
  }
  .asset-list{
    padding: 20px;
  }
  .asset-list-top{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .search-group{
    background-color: white;
    border: 1px solid #E4E4E4;
    padding: 5px 0;
    display: flex;
    align-items: center;
  }
  .search-group input{
    border: none;
    padding-left: 20px;
    width: 300px;
    font-style: italic;
    font-size: 14px;
  }
  .search-group input:focus{
    outline: none;
  }
  .add-item-button{
    background-color: #00ABFE;
  }
</style>
