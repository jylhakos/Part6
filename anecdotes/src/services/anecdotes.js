// $ npm install json-server --save

// $ npm install axios

// $ npm run server

// $ json-server --watch db.json --port 3001

// http:/localhost:3001/anecdotes

import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {

  const response = await axios.get(baseUrl)

  console.log(response.data)

  return response.data
}

// 6.14
const create = async (object) => {

  const response = await axios.post(baseUrl, object)

  return response.data
}

// 6.17
const update = async (id, votes) => {

  const response = await axios.put(`${baseUrl}/${id}`, votes)

  return response.data
}

export default { getAll, create, update }