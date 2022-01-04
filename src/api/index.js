import axios from 'axios';

const config = {
    baseUrl : 'https://acnhapi.com/v1a'
}
 
function fetchFish(){
    return axios.get(`${config.baseUrl}/fish`)
  }

function fetchBugs(){
    return axios.get(`${config.baseUrl}/bugs`)
  }

function fetchSea(){
    return axios.get(`${config.baseUrl}/sea`)
}

function fetchFossils(){
    return axios.get(`${config.baseUrl}/fossils`)
  }

function fetchFishDetail(contentId ){
  return axios.get(`${config.baseUrl}/fish/${contentId}`)
}
function fetchBugDetail(contentId ){
  return axios.get(`${config.baseUrl}/bugs/${contentId}`)
}
function fetchSeaDetail(contentId ){
  return axios.get(`${config.baseUrl}/sea/${contentId}`)
}

  export { fetchFish ,fetchBugs,fetchSea, fetchFossils ,fetchFishDetail,fetchBugDetail,fetchSeaDetail }