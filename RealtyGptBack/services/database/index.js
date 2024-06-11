const fs = require("fs");

const path = require('path');
const {STRING_TYPE_FIELDS} = require("../../src/constants/database");

const filePath = path.join(__dirname, '../../static/database.json');


const findByParams = async (params) => {
  const jsonData = fs.readFileSync(filePath, {encoding: 'utf8'})

  const data = JSON.parse(jsonData);

  for (const kay in params) {
    if (!params[kay]) {
      delete params[kay];
    }
  }

  data.filter(item => {
    let isEqual = true;

    for (const key in params) {
      if (STRING_TYPE_FIELDS.includes(key)) {
        if (!item[key].includes(params[key]) && !params[key].includes(item[key])) {

          isEqual = false;
          break;
        }

      } else if (params[key] !== item[key]) {
        isEqual = false;
        break;
      }
    }

    return isEqual
  })
  return data;

}


module.exports = {
  findByParams
}