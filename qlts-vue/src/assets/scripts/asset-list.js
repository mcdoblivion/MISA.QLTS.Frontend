import Footer from "../../components/layout/Footer.vue";
import AssetListDetail from "../../views/dictionary/asset/AssetListDetail.vue";
import * as axios from "axios";
import moment from "moment";
const BASE_URL = "http://localhost:49398";
export default {
  components: { AssetListDetail, Footer },
  data() {
    return {
      currentAsset: {
        assetId: "159268a1-7e47-6b20-1618-7000f455f3d5",
        assetCode: "48238",
        assetName: "Mccreary1979",
        assetTypeId: "5f7b48e5-16f9-2f2f-ecdc-845b5dcdad45",
        departmentId: "3f8e6896-4c7d-15f5-a018-75d8bd200d7c",
        increaseDate: "2005-01-19T15:05:15",
        timeUse: 10,
        wearRate: 7,
        originalPrice: null,
        wearValue: 32,
        isUsed: false,
        createdDate: "2005-01-19T15:05:15",
        createdBy: null,
        modifiedDate: "1970-01-01T00:04:39",
        modifiedBy: "tuan Wooldridge",
      },
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
    formatCurrency(number) {
      return number?.toLocaleString("de-DE", { minimumFractionDigits: 0 });
    },

    formatDate(dateString, formater = "DD/MM/YYYY") {
      if (dateString != undefined) return moment(dateString).format(formater);
    },

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
    totalAsset: function() {
      return this.formatCurrency(this.assets.length);
    },
    totalOriginalPrice: function() {
      const total = this.assets.reduce(
        (accumulator, currentValue) => accumulator + currentValue.originalPrice,
        0
      );
      return !isNaN(total) ? this.formatCurrency(total) : "0";
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
