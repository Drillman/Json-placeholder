const { JsonPlaceholder } = require('../build/main')

const placeholder = new JsonPlaceholder()
placeholder.Comments()
  .then(result => console.log(result))
  .catch(error => console.error(error))
