<template>
  <div class="asset-list">
    <div class="header-content">
      <div class="header-content-left">
        <div class="search">
          <input
            type="text"
            placeholder="Tìm kiếm"
            v-model="searchKeyword"
            @keyup.enter="search"
          />
          <div class="icon icon-search" @click="search"></div>
        </div>
      </div>
      <div class="header-content-right">
        <div class="btn btn-add">Thêm</div>
        <div class="icon icon-refresh" @click="refresh"></div>
        <div class="icon icon-delete" @click="deleteAssets"></div>
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
            @click="handleSelectAsset(asset.assetId)"
            :class="{ selected: isSelected(asset.assetId) }"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ asset.increaseDate }}</td>
            <td>{{ asset.assetCode }}</td>
            <td>{{ asset.assetName }}</td>
            <td>{{ getAssetType(asset.assetTypeId) }}</td>
            <td>{{ getDepartment(asset.departmentId) }}</td>
            <td>{{ asset.originalPrice }}</td>
            <td class="asset-operation">
              <div class="icon-group" :class="{ isHide: isShow != index }">
                <div class="icon icon-edit"></div>
                <div
                  class="icon icon-delete"
                  @click="deleteAsset(asset.assetId)"
                ></div>
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
import * as axios from "axios";
const BASE_URL = "http://localhost:49398";
export default {
  components: { AssetListDetail, Footer },
  data() {
    return {
      searchKeyword: "",
      selectedAssetIds: [],
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
      assetTypes: [],
      departments: [],
    };
  },
  methods: {
    async search() {
      try {
        this.refreshAssetType();
        this.refreshDepartment();

        const response = await axios.get(
          BASE_URL + "/api/v1/Assets/search?keyWord=" + this.searchKeyword
        );
        console.log(response);
        this.assets = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async refresh() {
      try {
        this.refreshAssetType();
        this.refreshDepartment();
        this.refreshAsset();
      } catch (error) {
        console.log(error);
      }
    },

    async refreshAsset() {
      try {
        this.assets = [];
        const responseAsset = await axios.get(BASE_URL + "/api/v1/assets");
        console.log(responseAsset);
        this.assets = responseAsset.data;
      } catch (error) {
        console.log(error);
      }
    },

    async refreshAssetType() {
      try {
        const responseAssetType = await axios.get(
          BASE_URL + "/api/v1/asset-types"
        );
        console.log(responseAssetType.data);
        this.assetTypes = responseAssetType.data;
      } catch (error) {
        console.log(error);
      }
    },

    async refreshDepartment() {
      try {
        const responseDepartment = await axios.get(
          BASE_URL + "/api/v1/departments"
        );
        console.log(responseDepartment);
        this.departments = responseDepartment.data;
      } catch (error) {
        console.log(error);
      }
    },

    handleSelectAsset(id) {
      var selectedId = this.selectedAssetIds.find((i) => i === id);
      if (selectedId == undefined) this.selectedAssetIds.push(id);
      else this.selectedAssetIds = this.selectedAssetIds.filter((i) => i != id);
    },

    isSelected(id) {
      return this.selectedAssetIds.find((i) => i === id) != undefined;
    },
    showOperation(index) {
      this.isShow = index;
    },

    hideOperation() {
      this.isShow = -1;
    },

    getAssetType(id) {
      return this.assetTypes.find((a) => a.assetTypeId === id)?.assetTypeName;
    },

    getDepartment(id) {
      return this.departments.find((d) => d.departmentId === id)
        ?.departmentName;
    },

    async deleteAsset(id) {
      try {
        const response = await axios.delete(
          BASE_URL + "/api/v1/assets?ids=" + id
        );
        setTimeout(
          () => alert("Xoá thành công " + response.data + " tài sản!"),
          10
        );
        this.assets = this.assets.filter((a) => a.assetId != id);
      } catch (error) {
        alert("Xoá thất bại !", setTimeout(10));
      }
    },

    async deleteAssets() {
      let ids = this.selectedAssetIds;
      try {
        let queryString = `?ids=${ids[0]}`;
        for (let index = 1; index < ids.length; index++) {
          const id = ids[index];
          queryString += `&ids=${id}`;
        }

        const response = await axios.delete(
          BASE_URL + "/api/v1/assets" + queryString
        );
        console.log(response);
        setTimeout(
          () => alert("Xoá thành công " + response.data + " tài sản!"),
          10
        );
        this.assets = this.assets.filter(
          (a) => ids.find((i) => i === a.assetId) == undefined
        );
        this.selectedAssetIds = [];
      } catch (error) {
        console.log(error);
        alert("Xoá thất bại!");
      }
    },
  },
  computed: {
    totalAsset: function () {
      return this.assets.length;
    },
    totalOriginalPrice: function () {
      const total = this.assets.reduce(
        (accumulator, currentValue) => accumulator + currentValue.originalPrice,
        0
      );
      return !isNaN(total) ? total : 0;
    },
  },
  async created() {
    try {
      const responseAsset = await axios.get(BASE_URL + "/api/v1/assets");
      console.log(responseAsset);
      this.assets = responseAsset.data;

      const responseAssetType = await axios.get(
        BASE_URL + "/api/v1/asset-types"
      );
      console.log(responseAssetType.data);
      this.assetTypes = responseAssetType.data;

      const responseDepartment = await axios.get(
        BASE_URL + "/api/v1/departments"
      );
      console.log(responseDepartment);
      this.departments = responseDepartment.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>