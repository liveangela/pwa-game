import Vue from 'vue'

const baseUrl = '/api'
const headers = {
  'Content-Type': 'application/json;charset=utf-8'
}

const getInitBody = data => ({
  headers,
  method: 'POST',
  body: JSON.stringify(data)
})

const handleResponse = response => {
  return response.ok
    ? response.json()
    : Promise.reject({
        status: response.status,
        statusText: response.statusText
      })
}

const handleError = error => console.error(error)

const accessPlugin = vue => {
  vue.prototype.$accesslayer = (className, funcName, data) => {
    return fetch(`${baseUrl}/${className}/${funcName}`, getInitBody(data))
      .then(handleResponse)
      .catch(handleError)
  }
}

Vue.use(accessPlugin)
