import axios, { AxiosRequestConfig, Method } from 'axios'

export interface apiOptions extends AxiosRequestConfig {
  url: string
  method: Method
  params: {
    location: string
    apikey: string
  }
}

const options: apiOptions = {
  method: 'GET',
  url: 'https://api.tomorrow.io/v4/weather/realtime',
  params: {
    location: 'toronto', //'41.015137, 28.979530'
    apikey: 'KvwSSJ8UXkfGnj7b8curOXGnlEm27e0P'
  }
}

axios
  .request(options)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.error(error)
  })

export {}
