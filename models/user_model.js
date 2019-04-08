let mongoose = require('mongoose')

// mongoDB 
const server = 'ds233806.mlab.com:33806'
const database = 'demo_app'
const user = 'tingchaoxu'
const password = 'demo123'

// Connect mongoDB
const url = `mongodb://${user}:${password}@${server}/${database}`
mongoose.connect(url, { useNewUrlParser: true})
  .then(res => console.log('Success connect to mongoDB'))
  .catch(err => console.warn('Error: Not connection to mongoDB =>', err.errmsg))

// Define Schema
let UserSchema = new mongoose.Schema({
  name: String,
  email: String
})

// Export as mongoose model
module.exports = mongoose.model('User', UserSchema)
