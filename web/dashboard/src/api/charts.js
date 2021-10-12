import {del, get, post, put} from "@/plugins/request"

const baseUrl = "/api/v1/charts"
const repoUrl = "/api/v1/charts/repos"
const appUrl = "/api/v1/apps"

export function createChart (data) {
  return post(baseUrl, data)
}

export function deleteChart (name) {
  return del(`${baseUrl}/${name}`)
}

export function getChart (cluster, repo, name) {
  return get(`${baseUrl}/${name}?cluster=${cluster}&repo=${repo}`)
}

export function updateChart (name, user) {
  return put(`${baseUrl}/${name}`, user)
}

export function listRepos (cluster) {
  return get(`${repoUrl}?cluster=${cluster}`)
}

export function createRepo (cluster, data) {
  return post(`${repoUrl}?cluster=${cluster}`, data)
}

export function deleteRepo (cluster, name) {
  return del(`${repoUrl}/${name}?cluster=${cluster}`)
}

export function searchCharts (cluster, repo, page, size, keywords) {
  let url = `${baseUrl}/search?pageNum=${page}&pageSize=${size}&cluster=${cluster}&repo=${repo}`
  if (keywords) {
    url = `${url}&pattern=${keywords}`
  }
  return post(url)
}

export function getChartByVersion (cluster, repo, name, version) {
  return get(`${baseUrl}/detail/${name}?cluster=${cluster}&repo=${repo}&version=${version}`)
}

export function installChart (data) {
  return post(`${baseUrl}/install`, data)
}


export function searchInstalled (cluster, page, size, keywords) {
  let url = `${appUrl}/search?pageNum=${page}&pageSize=${size}&cluster=${cluster}`
  if (keywords) {
    url = `${url}&pattern=${keywords}`
  }
  return post(url)
}

export function deleteApp (cluster, name) {
  return del(`${appUrl}/${name}?cluster=${cluster}`)
}

export function getApp (cluster, name) {
  return get(`${appUrl}/${name}?cluster=${cluster}`)
}

export function getChartUpdate (cluster, repo, name) {
  return get(`${appUrl}/update/${name}?cluster=${cluster}&repo=${repo}`)
}




