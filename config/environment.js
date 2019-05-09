const port = process.env.PORT || 4000
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/dating-app'
const secret = 'fjfrjnv5%^666'
// do we need a secret? probs but put later.

module.exports = { port, dbUri, secret }
