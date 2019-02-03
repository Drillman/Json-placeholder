const { JsonPlaceholder } = require('../build/main')

const placeholder = new JsonPlaceholder()
placeholder.Users('as3')
  .then(result => console.log(result))
  .catch(error => console.error(error))
