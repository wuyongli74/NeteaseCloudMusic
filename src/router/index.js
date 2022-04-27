import Vue from "vue";
import VueRouter from 'vue-router';

const Find = () => import('views/find/Find');
const Podcast = () => import('views/podcast/Podcast');
const Profile = () => import('views/profile/Profile');
const Follow = () => import('views/follow/Follow');
const Tribe = () => import('views/tribe/Tribe');

// 1.安装插件
Vue.use(VueRouter);

// 2.创建路由对象
const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect:'/find'
    },
    {
      path: '/find',
      component: Find
    },
    {
      path:'/podcast',
      component:Podcast
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path:'/follow',
      component:Follow
    },
    {
      path:'/tribe',
      component:Tribe
    }
  ],
  mode: 'history'
});

export default router
