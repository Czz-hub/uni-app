/*
 * @Author: weisheng
 * @Date: 2024-11-01 11:44:38
 * @LastEditTime: 2024-11-01 13:06:45
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \wot-demo\pages.config.ts
 * 记得注释
 */
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    navigationBarTitleText: 'Wot-Demo',
    navigationBarTextStyle: 'black',
    navigationStyle: 'default',
  },
  tabBar: {
    custom: false,
    height: '70px',
    color: '#3b86cb',
    backgroundColor:'#A1FF33',
    selectedColor: '#d17277',
    fontSize:'10px',
    list: [{
      pagePath: 'pages/index',
      text:'微信',
      iconPath:'static/logo.png',
      selectedIconPath:'static/vite.png'
    }, {
      pagePath: 'pages/hi',
      text:'通讯录',
      iconPath:'static/logo.png',
      selectedIconPath:'static/vite.png'
    },
    {
      pagePath: 'pages/about',
      text:'发现',
      iconPath:'static/logo.png',
      selectedIconPath:'static/vite.png'
    },
    {
      pagePath: 'pages/add',
      text:'我',
      iconPath:'static/logo.png',
      selectedIconPath:'static/vite.png'
    }
  ],
  },
})
