const fs = require('fs')
const path = require('path')

const filePath = fileName => path.join(__dirname, '..', 'data', fileName)

const save = (data, fileName) => {
  fs.writeFileSync(filePath(fileName), JSON.stringify(data, null, 2))
}

module.exports = { save }
