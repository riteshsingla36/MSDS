const util = require('util')
const gc = require('../config/googleStorage')
const bucket = gc.bucket('msds_projects')
const {Storage} = require('@google-cloud/storage');

  // Creates a client
const storage = new Storage();

const uploadImage = async (file) => {
  // const { originalname, buffer } = file

  // const blob = bucket.file(originalname.replace(/ /g, "_"))
  // const blobStream = blob.createWriteStream({
  //   resumable: false
  // })
  // console.log('blob', blob);
  // blobStream.on('finish', () => {
  //   const publicUrl = format(
  //     `https://storage.googleapis.com/${bucket.name}/${blob.name}`
  //   )
  //   resolve(publicUrl)
  // })
  // .on('error', () => {
  //   reject(`Unable to upload image, something went wrong`)
  // })
  // .end(buffer)
  console.log('bucket name', bucket.name);
  const result = await storage.bucket(bucket.name).upload(file);
  console.log('result', result);

}

module.exports = uploadImage;