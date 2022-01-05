import axios from 'axios';

const config = {
  baseUrl: 'https://acnhapi.com/v1a'
}

async function fetchFish() {
  try {
    return axios.get(`${config.baseUrl}/fish`)    
  } catch (error) {
      console.log(error)
  }
}

async function fetchBugs() {
  try {
    return axios.get(`${config.baseUrl}/bugs`)    
  } catch (error) {
      console.log(error)
  }
}

async function fetchSea() {
  try {
    return axios.get(`${config.baseUrl}/sea`)    
  } catch (error) {
      console.log(error)
  }
}

async function fetchFossils() {
  try {
    return axios.get(`${config.baseUrl}/fossils`)    
  } catch (error) {
      console.log(error)
  }
}

async function fetchFishDetail(contentId) {
  try {
    return axios.get(`${config.baseUrl}/fish/${contentId}`)    
  } catch (error) {
      console.log(error)
  }
}
async function fetchBugDetail(contentId) {
  try {
    return axios.get(`${config.baseUrl}/bugs/${contentId}`)    
  } catch (error) {
      console.log(error)
  }
}
async function fetchSeaDetail(contentId) {
  try {
    return axios.get(`${config.baseUrl}/sea/${contentId}`)    
  } catch (error) {
      console.log(error)
  }
}



export { fetchFish, fetchBugs, fetchSea, fetchFossils, fetchFishDetail, fetchBugDetail, fetchSeaDetail }