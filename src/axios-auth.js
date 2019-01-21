import axios from 'axios'

const instance = axios.create({
  baseURL:"https://wd7355665222mkmqjm.wilddogio.com"
})

instance.defaults.headers.common['SOMETHING'] = 'SOMETHING'

export default instance
