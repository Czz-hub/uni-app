<!--
 * @Author: weisheng
 * @Date: 2024-11-01 11:44:38
 * @LastEditTime: 2024-11-01 14:10:20
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \wot-demo\src\pages\index.vue
 * 记得注释
-->
<script setup lang="ts"></script>
//#ifdef MP-WEIXIN
//#endif

<template>
  <view class="px-3 py-20 text-center">
    <view class="mb-4 text-xl text-gray-9">
      <!-- #ifdef MP-WEIXIN -->
      <div>我在荒</div>
      <!-- #endif -->

      <!-- #ifdef H5 -->
      <div>我在荒岛迎接黎明</div>
      <!-- #endif -->
    </view>
  </view>
</template>

<style></style>

<route lang="json">
{
  "layout": "default",
  "name": "hi",
  "style": {
    "navigationBarTitleText": "通讯录"
  }
}
</route>
