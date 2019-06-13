const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connect = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log('Connected to MongoDB')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
}

module.exports = connect
