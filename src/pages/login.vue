<!-- <script lang="ts" setup>
interface LoginVO {
  access_token: string
  email: string
  name: string
}
interface LoginUserDto {
  email: string
  password: string
}
const model = reactive<LoginUserDto>({
  email: 'riddler@gmail.com',
  password: 'Mm1234',
})
const userStore = useUserStore()
const { token, userInfo } = storeToRefs(userStore)
async function tologin() {
  const { data } = await http<LoginVO>({
    method: 'POST',
    url: '/auth/login',
    data: model,
  })
  token.value = data.access_token
  userInfo.value.email = data.email

  uni.switchTab({
    url: '/pages/index',
  })
}
</script>

<template>
  <div>LOGIN</div>
  <wd-button type="primary" size="large" custom-class="mb-3" @tap="tologin">
    登录
  </wd-button>
</template>

<route lang="json">
  {
    "layout": "default",
    "name": "login",
    "style": {
      "navigationBarTitleText": "登录"
    }
  }
  </route> -->


  <script lang="ts" setup>
  import { reactive } from 'vue'
  import { useUserStore } from '@/stores/modules/user'
  import { storeToRefs } from 'pinia'
  import { http } from '@/utils/http'

  interface LoginVO {
    access_token: string
    email: string
    name: string
  }
  interface LoginUserDto {
    email: string
    password: string
  }

  const model = reactive<LoginUserDto>({
    email: '',
    password: '',
  })

  const userStore = useUserStore()
  const { token, userInfo } = storeToRefs(userStore)

  async function tologin() {
    try {
      const { data } = await http<LoginVO>({
        method: 'POST',
        url: '/auth/login',
        data: model,
      })
      token.value = data.access_token
      userInfo.value.email = data.email

      uni.switchTab({
        url: '/pages/index',
      })
    } catch (error) {
      uni.showToast({
        title: '登录失败，请检查账号密码',
        icon: 'none',
      })
    }
  }
  </script>

  <template>
    <wd-form :model="model" @submit.prevent="tologin">
      <div class="form-item">
        <label for="email">邮箱</label>
        <input
          v-model="model.email"
          id="email"
          type="text"
          placeholder="请输入邮箱"
          required
        />
      </div>
      <div class="form-item">
        <label for="password">密码</label>
        <input
          v-model="model.password"
          id="password"
          type="password"
          placeholder="请输入密码"
          required
        />
      </div>
      <wd-button type="primary" size="large" block custom-class="mt-4" form-type="submit">
        登录
      </wd-button>
    </wd-form>
  </template>

  <route lang="json">
  {
    "layout": "default",
    "name": "login",
    "style": {
      "navigationBarTitleText": "登录"
    }
  }
  </route>

  <style scoped>
  .form-item {
    margin-bottom: 20px;
  }

  .form-item label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .form-item input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>


