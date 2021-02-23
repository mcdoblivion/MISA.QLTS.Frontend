import Footer from "../../components/layout/Footer.vue";
import AssetListDetail from "../../views/dictionary/asset/AssetListDetail.vue";
import * as axios from "axios";
import moment from "moment";
const BASE_URL = "http://localhost:49398";
export default {
  components: { AssetListDetail, Footer },
  data() {
    return {
      isEditing: false,

      isAdding: false,

      currentAsset: {
        assetId: null,
        assetCode: null,
        assetName: null,
        assetTypeId: null,
        departmentId: null,
        increaseDate: null,
        timeUse: null,
        wearRate: null,
        originalPrice: null,
        wearValue: null,
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

      assetTypes: [
        {
          assetTypeId: "1731fa87-79fd-4cc1-6978-553c0310877a",
          assetTypeCode: "LTS5072",
          assetTypeName: "toan6",
          description:
            "Suscipit et sed. Doloribus consequuntur ea. Dolores eius et. Nihil blanditiis voluptates. Iste fugit similique? Quia qui et. Ut assumenda vero. Natus...",
          createdDate: "1992-07-21T23:02:33",
          createdBy: "tran Bain",
          modifiedDate: "2001-12-01T02:12:54",
          modifiedBy: "thai Elizondo",
        },
        {
          assetTypeId: "185f84ed-4563-51a0-cac7-6c0aeb6ec302",
          assetTypeCode: "LTS7505",
          assetTypeName: "Abreu1984",
          description:
            "Facilis animi a. Fugiat saepe inventore; et eum animi. Ut tenetur animi. Aspernatur et veniam. Quae placeat dolorem. Voluptas dolores unde. Ea vel sit. Sed.",
          createdDate: "1978-07-30T18:10:46",
          createdBy: "hoa Curtis",
          modifiedDate: "1999-10-05T00:37:59",
          modifiedBy: "windy Holden",
        },
        {
          assetTypeId: "19165ed7-212e-21c4-0428-030d4265475f",
          assetTypeCode: "LTS3847",
          assetTypeName: "Edmonds2029",
          description:
            "Eaque commodi est. Qui at optio; rem quisquam sit. Nemo et nihil; ut libero ea. Beatae est unde? Et est aut.",
          createdDate: "2019-03-08T23:42:38",
          createdBy: "van Edmonds",
          modifiedDate: "1987-11-10T23:10:57",
          modifiedBy: "sunny Acker",
        },
        {
          assetTypeId: "27366e4a-5248-12e3-e312-ebbbcf065d1c",
          assetTypeCode: "LTS1865",
          assetTypeName: "boy862",
          description: null,
          createdDate: "0001-01-01T00:00:00",
          createdBy: null,
          modifiedDate: "0001-01-01T00:00:00",
          modifiedBy: null,
        },
        {
          assetTypeId: "2924c34d-68f1-1d0a-c9c7-6c0aeb6ec302",
          assetTypeCode: "LTS5663",
          assetTypeName: "Swain2004",
          description: "Quisquam ut suscipit accusantium omnis vero alias.",
          createdDate: "1991-04-06T09:50:35",
          createdBy: "van Beatty",
          modifiedDate: "1970-01-01T00:31:40",
          modifiedBy: "boy Patten",
        },
        {
          assetTypeId: "3631011e-4559-4ad8-b0ad-cb989f2177da",
          assetTypeCode: "LTS4560",
          assetTypeName: "tien772",
          description:
            "Aliquam perspiciatis quasi. Necessitatibus voluptas quos. Omnis minus voluptatem? Tempora earum quidem. Cum tempore porro. Est tempora error. Qui error et.",
          createdDate: "2014-06-04T21:01:08",
          createdBy: "boy Brubaker",
          modifiedDate: "1970-01-01T00:00:07",
          modifiedBy: "handsome Mclean",
        },
        {
          assetTypeId: "471530a2-44fe-7395-b1ad-cb989f2177da",
          assetTypeCode: "LTS0530",
          assetTypeName: "ma164",
          description:
            "Aut sunt delectus. Delectus voluptatem molestias fugiat! Maiores ipsum magni nam et vel. Et dolorem illo! Officia doloremque unde.",
          createdDate: "1970-01-01T00:08:53",
          createdBy: "manh Abernathy",
          modifiedDate: "1975-02-18T04:52:17",
          modifiedBy: "hoang Holiday",
        },
        {
          assetTypeId: "4cf2dd43-5f4b-71b6-e212-ebbbcf065d1c",
          assetTypeCode: "LTS2240",
          assetTypeName: "Dudley1981",
          description:
            "Qui harum officiis. Unde repellendus beatae cumque. Nulla nihil quo rerum consequuntur dolorem? Ea alias omnis quos sit maxime. Laudantium adipisci culpa...",
          createdDate: "1994-03-01T08:06:22",
          createdBy: "nguyen Travers",
          modifiedDate: "1970-01-01T00:00:01",
          modifiedBy: "manh Basham",
        },
        {
          assetTypeId: "5f7b48e5-16f9-2f2f-ecdc-845b5dcdad45",
          assetTypeCode: "LTS2643",
          assetTypeName: "Watson1986",
          description:
            "Quia aut commodi. Est aut iure delectus iusto. Animi non perspiciatis quis ut quia! Quaerat numquam et quia blanditiis voluptas eius. Voluptatem fuga et...",
          createdDate: "2017-02-16T06:43:15",
          createdBy: "tuan Burk",
          modifiedDate: "1982-12-26T14:29:36",
          modifiedBy: "thai Springer",
        },
        {
          assetTypeId: "7a0b757e-41eb-4df6-c6f8-494a84b910f4",
          assetTypeCode: "LTS6927",
          assetTypeName: "huong9",
          description:
            "Error nesciunt illum. Vel ad dolorum. Voluptas soluta fugit; distinctio fugit vel? Eum quia et. Omnis sit expedita. Natus minus nobis!",
          createdDate: "1999-03-11T08:08:41",
          createdBy: "tran Benitez",
          modifiedDate: "1970-01-01T00:00:09",
          modifiedBy: "huan Bergman",
        },
      ],

      departments: [
        {
          departmentId: "3f8e6896-4c7d-15f5-a018-75d8bd200d7c",
          departmentCode: "PB9473",
          departmentName: "Information Technology",
          description:
            "Dolor sed enim repellat. Qui quo atque. Omnis delectus sunt non. Tempora maiores enim reprehenderit tenetur. Impedit modi inventore. Eum porro omnis...",
          createdDate: "1970-01-01T02:13:43",
          createdBy: "windy Hutchens",
          modifiedDate: "1984-03-25T21:59:05",
          modifiedBy: "boy Ligon",
        },
        {
          departmentId: "45ac3d26-18f2-18a9-3031-644313fbb055",
          departmentCode: "PB7909",
          departmentName: "Customer Support",
          description:
            "Dolore suscipit est ipsa. Suscipit voluptas et omnis. Iste sed distinctio ab sint. Deleniti eius ea? Sunt labore vel; ut eum dolorem.",
          createdDate: "1992-04-11T00:50:57",
          createdBy: "huan Bohannon",
          modifiedDate: "2005-12-16T19:15:08",
          modifiedBy: "nguyen Abernathy",
        },
        {
          departmentId: "78aafe4a-67a7-2076-3bf3-eb0223d0a4f7",
          departmentCode: "PB2451",
          departmentName: "Finance",
          description:
            "Et modi reprehenderit. Vero est sed alias voluptatem nostrum facilis! Iste voluptatem magni impedit temporibus odit ducimus.",
          createdDate: "2009-02-21T10:44:56",
          createdBy: "baby Eldridge",
          modifiedDate: "2001-05-21T06:30:25",
          modifiedBy: "van Blaylock",
        },
        {
          departmentId: "7c4f14d8-66fb-14ae-198f-6354f958f4c0",
          departmentCode: "PB4185",
          departmentName: "Executive",
          description:
            "Impedit beatae aspernatur dignissimos voluptatem et in. Eum nisi nostrum quidem ullam fugiat eum.",
          createdDate: "1977-09-03T22:08:58",
          createdBy: "huong Beaty",
          modifiedDate: "1993-03-15T20:27:01",
          modifiedBy: "tuan Aiello",
        },
      ],
    };
  },

  methods: {
    // Hiển thị form thêm tài sản
    // CreatedBy: DMCUONG (21/02/2021)
    handleBeforeAddAsset() {
      this.$refs.assetDetail.openModal();
      this.isAdding = true;
      this.isEditing = false;
      this.currentAsset = {};
    },

    handleBeforeEditAsset(asset) {
      this.$refs.assetDetail.openModal();
      this.isAdding = false;
      this.isEditing = true;
      this.currentAsset = asset;
      this.currentAsset = this.assetDto;
    },

    // Xử lý khi đóng form thêm/sửa tài sản
    cancelEdit() {
      this.isAdding = false;
      this.isEditing = false;
      this.currentAsset = {};
    },

    // Điều khiển thêm/sửa khi ấn lưu
    // CreatedBy: DMCUONG (21/02/2021)

    controlAddEditAsset() {
      if (this.isAdding) this.addAsset();
      else if (this.isEditing) this.editAsset();
    },

    // Thêm 1 tài sản vào database
    // CreatedBy: DMCUONG (21/02/2021)
    async addAsset() {
      if (this.isAdding)
        try {
          const response = await axios.post(
            BASE_URL + "/api/v1/assets",
            this.assetDto
          );
          console.log(response);
          this.refresh();
          this.$refs.assetDetail.closeModal();
          this.isAdding = false;
          this.isEditing = false;
          this.currentAsset = {};
          setTimeout(() => {
            alert("Thêm thành công " + response.data + " tài sản.");
          }, 100);
        } catch (error) {
          console.log(error);
          this.$refs.assetDetail.closeModal();
          this.isAdding = false;
          this.isEditing = false;
          this.currentAsset = {};
          setTimeout(() => {
            alert("Thêm thất bại.");
          }, 100);
        }
    },

    // Sửa 1 tài sản trong database
    // CreatedBy: DMCUONG (21/02/2021)
    async editAsset() {
      if (this.isEditing)
        try {
          const response = await axios.put(
            BASE_URL + "/api/v1/assets/" + this.currentAsset.assetId,
            this.assetDto
          );
          console.log(response);
          this.refresh();
          this.$refs.assetDetail.closeModal();
          this.isAdding = false;
          this.isEditing = false;
          this.currentAsset = {};
          setTimeout(() => {
            alert("Cập nhật thành công " + response.data + " tài sản.");
          }, 100);
        } catch (error) {
          console.log(error);
          this.$refs.assetDetail.closeModal();
          this.isAdding = false;
          this.isEditing = false;
          this.currentAsset = {};
          setTimeout(() => {
            alert("Cập nhật thất bại.");
          }, 100);
        }
    },

    // Định dạng số
    // CreatedBy: DMCUONG (21/02/2021)
    formatCurrency(number) {
      return number?.toLocaleString("de-DE", { minimumFractionDigits: 0 });
    },

    // Định dạng ngày tháng
    // CreatedBy: DMCUONG (21/02/2021)
    formatDate(dateString, formater = "DD/MM/YYYY") {
      if (dateString != undefined) return moment(dateString).format(formater);
    },

    // Tìm kiếm tài sản
    // CreatedBy: DMCUONG (21/02/2021)
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

    // Tải lại trang
    // CreatedBy: DMCUONG (21/02/2021)
    async refresh() {
      try {
        this.refreshAssetType();
        this.refreshDepartment();
        this.refreshAsset();
      } catch (error) {
        console.log(error);
      }
    },

    // Tải lại tài sản
    // CreatedBy: DMCUONG (21/02/2021)
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

    // Tải lại loại tài sản
    // CreatedBy: DMCUONG (21/02/2021)
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

    // Tải lại phòng ban
    // CreatedBy: DMCUONG (21/02/2021)
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

    // Xử lý chọn nhiều tài sản
    // CreatedBy: DMCUONG (21/02/2021)
    handleSelectAsset(id) {
      var selectedId = this.selectedAssetIds.find((i) => i === id);
      if (selectedId == undefined) this.selectedAssetIds.push(id);
      else this.selectedAssetIds = this.selectedAssetIds.filter((i) => i != id);
    },

    // Kiểm tra tài sản có đang được chọn không
    // CreatedBy: DMCUONG (21/02/2021)
    isSelected(id) {
      return this.selectedAssetIds.find((i) => i === id) != undefined;
    },

    // Hiển thị thao tác tài sản
    // CreatedBy: DMCUONG (21/02/2021)
    showOperation(index) {
      this.isShow = index;
    },

    // Ẩn thao tác tài sản
    // CreatedBy: DMCUONG (21/02/2021)
    hideOperation() {
      this.isShow = -1;
    },

    // Lấy tên tài sản theo id
    // CreatedBy: DMCUONG (21/02/2021)
    getAssetType(id) {
      return this.assetTypes.find((a) => a.assetTypeId === id)?.assetTypeName;
    },

    // Lấy tên phòng ban theo id
    // CreatedBy: DMCUONG (21/02/2021)
    getDepartment(id) {
      return this.departments.find((d) => d.departmentId === id)
        ?.departmentName;
    },

    // Xoá 1 tài sản
    // CreatedBy: DMCUONG (21/02/2021)
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

    // Xoá nhiều tài sản
    // CreatedBy: DMCUONG (21/02/2021)
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
    // Tính tổng số tài sản
    // CreatedBy: DMCUONG (21/02/2021)
    totalAsset: function() {
      return this.formatCurrency(this.assets.length);
    },

    // Tính tổng nguyên giá
    // CreatedBy: DMCUONG (21/02/2021)
    totalOriginalPrice: function() {
      const total = this.assets.reduce(
        (accumulator, currentValue) => accumulator + currentValue.originalPrice,
        0
      );
      return !isNaN(total) ? this.formatCurrency(total) : "0";
    },

    assetDto: function() {
      return {
        assetId: this.currentAsset.assetId || null,
        assetCode: this.currentAsset.assetCode || null,
        assetName: this.currentAsset.assetName || null,
        assetTypeId: this.currentAsset.assetTypeId || null,
        departmentId: this.currentAsset.departmentId || null,
        increaseDate:
          this.formatDate(this.currentAsset.increaseDate, "YYYY-MM-DD") || null,
        timeUse: !isNaN(Number.parseInt(this.currentAsset.timeUse))
          ? Number.parseInt(this.currentAsset.timeUse)
          : null,
        wearRate: !isNaN(Number.parseInt(this.currentAsset.wearRate))
          ? Number.parseInt(this.currentAsset.wearRate)
          : null,
        originalPrice: !isNaN(Number.parseInt(this.currentAsset.originalPrice))
          ? Number.parseInt(this.currentAsset.originalPrice)
          : null,
        wearValue: !isNaN(Number.parseInt(this.currentAsset.wearValue))
          ? Number.parseInt(this.currentAsset.wearValue)
          : null,
      };
    },
  },

  // Load dữ liệu từ database
  // CreatedBy: DMCUONG (21/02/2021)
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
