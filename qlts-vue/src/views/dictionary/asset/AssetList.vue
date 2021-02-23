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

<script src="../../../assets/scripts/asset-list.js">
</script>

