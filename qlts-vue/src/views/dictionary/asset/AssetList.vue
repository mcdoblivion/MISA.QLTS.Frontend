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
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th style="width: 3%">STT</th>
            <th style="width: 10%">NGÀY GHI TĂNG</th>
            <th style="width: 10%">MÃ TÀI SẢN</th>
            <th style="width: 25%">TÊN TÀI SẢN</th>
            <th style="width: 12%">LOẠI TÀI SẢN</th>
            <th style="width: 20%">PHÒNG BAN</th>
            <th style="width: 10%">NGUYÊN GIÁ</th>
            <th style="width: 10%">CHỨC NĂNG</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(asset, index) in assets"
            :key="index"
            @mouseover="showOperation(index)"
            @mouseout="hideOperation()"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ asset.increaseDate }}</td>
            <td>{{ asset.assetCode }}</td>
            <td>{{ asset.assetName }}</td>
            <td>{{ asset.assetType }}</td>
            <td>{{ asset.department }}</td>
            <td></td>
            <td class="asset-operation">
              <div class="icon-group" :class="{ isHide: isShow != index }">
                <div class="icon icon-edit"></div>
                <div class="icon icon-delete"></div>
                <div class="icon icon-history"></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer :totalAsset="totalAsset" :totalOriginalPrice="totalOriginalPrice" />
  </div>
</template>

<script>
import Footer from "../../../components/layout/Footer.vue";
import AssetListDetail from "./AssetListDetail.vue";
export default {
  components: { AssetListDetail, Footer },
  data() {
    return {
      totalAsset: 0,
      totalOriginalPrice: 0,
      isShow: -1,
      assets: [
        {
          increaseDate: "1/1/2021",
          assetCode: "TS000",
        },
        {
          increaseDate: "1/1/2021",
          assetCode: "TS001",
        },
        {
          increaseDate: "1/1/2021",
          assetCode: "TS002",
        },
      ],
    };
  },
  methods: {
    showOperation(index) {
      this.isShow = index;
    },
    hideOperation() {
      this.isShow = -1;
    },
    updateTotalAsset() {
      this.totalAsset = this.assets.length;
      this.totalOriginalPrice = this.assets.reduce(
        (accumulator, currentValue) => accumulator + currentValue.originalPrice,
        0
      );
    },
  },
};
</script>