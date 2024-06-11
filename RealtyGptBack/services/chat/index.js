const fs = require("fs");
const CONVERSATIONS_PATH = '../../../../static'

const startConversation = (userId) => {
  const dirPath = `${CONVERSATIONS_PATH}/${userId}`;

  if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
  }

  fs.readFileSync(dirPath, (err, file) => {
    if (err) {

    }
  })
}