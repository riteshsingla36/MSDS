const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, './msds-368315-f5ec1b91e27d.json')
const dotenv = require('dotenv');

dotenv.config({path: '../.env'})

const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: process.env.GCLOUDPROJECTID,
})

module.exports = storage