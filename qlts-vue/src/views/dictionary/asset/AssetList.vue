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
        </div>
      </div>
      <div class="header-content-right">
        <div class="btn btn-primary" @click="handleBeforeAddAsset()">Thêm</div>
        <div class="icon icon-refresh" @click="handleRefresh"></div>
        <div class="icon icon-delete" @click="deleteAssets"></div>
        <asset-list-detail ref="assetDetail" @cancelEdit="cancelEdit">
          <template v-slot:header>
            <h2>Ghi tăng tài sản</h2>
          </template>
          <template v-slot:body>
            <div class="form-row">
              <div class="form-row-left">
                <label for="asset-code">Mã tài sản (*)</label>
                <br />
                <input
                  id="asset-code"
                  type="text"
                  v-model="currentAsset.assetCode"
                />
              </div>
              <div class="form-row-right">
                <label for="asset-name">Tên tài sản (*)</label>
                <br />
                <input
                  id="asset-name"
                  type="text"
                  v-model="currentAsset.assetName"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-row-left">
                <label for="department-code">Mã phòng ban</label>
                <br />
                <select
                  name=""
                  id="department-code"
                  v-model="currentAsset.departmentId"
                >
                  <option
                    v-for="(department, index) in departments"
                    :key="index"
                    :value="department.departmentId"
                  >
                    {{ department.departmentCode }}
                  </option>
                </select>
              </div>
              <div class="form-row-right">
                <label for="department-name">Tên phòng ban</label>
                <br />
                <input
                  id="department-name"
                  type="text"
                  :value="getDepartment(currentAsset.departmentId)"
                  disabled
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-row-left">
                <label for="asset-type-code">Mã loại tài sản (*)</label>
                <br />
                <select
                  name=""
                  id="asset-type-code"
                  v-model="currentAsset.assetTypeId"
                >
                  <option
                    v-for="(assetType, index) in assetTypes"
                    :key="index"
                    :value="assetType.assetTypeId"
                  >
                    {{ assetType.assetTypeCode }}
                  </option>
                </select>
              </div>
              <div class="form-row-right">
                <label for="asset-type-name">Tên loại tài sản (*)</label>
                <br />
                <input
                  id="asset-type-name"
                  type="text"
                  :value="getAssetType(currentAsset.assetTypeId)"
                  disabled
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-row-element">
                <label for="increase-date">Ngày ghi tăng</label>
                <br />
                <input
                  id="increase-date"
                  type="date"
                  v-model="currentAsset.increaseDate"
                />
              </div>
              <div class="form-row-element">
                <label for="time-use">Thời gian sử dụng (năm)</label>
                <br />
                <input
                  id="time-use"
                  type="text"
                  v-model="currentAsset.timeUse"
                />
              </div>
              <div class="form-row-element">
                <label for="wear-rate">Tỷ lệ hao mòn (%)</label>
                <br />
                <input
                  id="wear-rate"
                  type="text"
                  v-model="currentAsset.wearRate"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-row-element">
                <label for="original-price">Nguyên giá</label>
                <br />
                <input
                  id="original-price"
                  type="text"
                  v-model="currentAsset.originalPrice"
                />
              </div>
              <div class="form-row-element">
                <label for="wear-value">Giá trị hao mòn năm</label>
                <br />
                <input
                  id="wear-value"
                  type="text"
                  v-model="currentAsset.wearValue"
                />
              </div>
            </div>
          </template>
          <template v-slot:footer>
            <div class="btn btn-cancel" @click="$refs.assetDetail.closeModal()">
              Huỷ
            </div>
            <div class="btn btn-primary" @click="controlAddEditAsset()">
              Lưu
            </div>
          </template>
        </asset-list-detail>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th style="width: 3%">STT</th>
            <th class="cell-date" style="width: 10%">NGÀY GHI TĂNG</th>
            <th style="width: 10%">MÃ TÀI SẢN</th>
            <th style="width: 25%">TÊN TÀI SẢN</th>
            <th style="width: 12%">LOẠI TÀI SẢN</th>
            <th style="width: 20%">PHÒNG BAN</th>
            <th class="cell-number" style="width: 10%">NGUYÊN GIÁ</th>
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
            @dblclick="handleBeforeEditAsset(asset)"
            :class="{ selected: isSelected(asset.assetId) }"
          >
            <td>{{ index + 1 }}</td>
            <td class="cell-date">{{ formatDate(asset.increaseDate) }}</td>
            <td>{{ asset.assetCode }}</td>
            <td>{{ asset.assetName }}</td>
            <td>{{ getAssetType(asset.assetTypeId) }}</td>
            <td>{{ getDepartment(asset.departmentId) }}</td>
            <td class="cell-number">
              {{ formatCurrency(asset.originalPrice) }}
            </td>
            <td class="asset-operation">
              <div class="icon-group" :class="{ isHide: isShow != index }">
                <div
                  class="icon icon-edit"
                  @click="handleBeforeEditAsset(asset)"
                ></div>
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

<script src="../../../assets/scripts/asset-list.js">
</script>

