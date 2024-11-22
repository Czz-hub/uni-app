<!--
 * @Author: weisheng
 * @Date: 2024-11-01 11:44:38
 * @LastEditTime: 2024-11-01 14:10:20
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \wot-demo\src\pages\index.vue
 * 记得注释
-->
<script setup lang="ts">

const userStore = useUserStore()
const { token } = storeToRefs(userStore)

function tologin() {
  uni.navigateTo({
    url:'/pages/login',
  })
}

function logout() {
  token.value = ''
  userStore.$reset()

  uni.navigateTo({
    url:'/pages/login',
  })
}
</script>

<template>
  <view class="px-3 py-20 text-center">
    <view class="mb-4 text-xl text-gray-9">
      hi！你好。
    </view>
    <wd-button type="primary" size="large" custom-class="mb-3" @tap="tologin">
      登录
    </wd-button>
    <wd-button type="error" size="large" @tap="logout">
      退出登录
    </wd-button>
  </view>
</template>

<style></style>

<route  lang="json">
{
  "layout": "default",
  "name": "index",
  "style": {
    "navigationBarTitleText": "微信"
  }
}
</route>
