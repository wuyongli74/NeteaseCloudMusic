import {request} from './request'

// banners图
export function getFindBanner() {
  return request({
    url: '/banner'
  })
}

// 圆形图标--无数据
export function getDragon() {
  return request({
    url: '/homepage/dragon/ball'
  })
}

// 推荐歌单
export function getPersonalized(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 热门歌单分类
export function getHotCatlist() {
  return request({
    url: '/playlist/hot'
  })
}

// 热门榜单
export function getHotRanking(limit) {
  return request({
    url: '/top/playlist/highquality',
    params: {
      limit
    }
  })
}
