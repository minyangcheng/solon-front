import request from '@/utils/request'

export function login(userName, pwd) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      userName,
      pwd
    }
  })
}

export function getUserInfo(userId) {
  return request({
    url: '/user/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function register(userName, pwd, rePwd) {
  return request({
    method: 'post',
    url: '/user/register',
    data: {
      userName,
      pwd,
      rePwd
    }
  })
}
