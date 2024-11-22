import{ defineStore } from 'pinia'

export const useUserStore = defineStore('user',() => {
  const userInfo = ref<IUser>({
    email:'',
    name:'',
  })

  return{
    userInfo,
  }
},{
  unistorage: true,
})
