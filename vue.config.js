const fs = require("fs");

const checkHTTPSForDev = (path) => {
  if (fs.existsSync(path)) {
    return {
      key: fs.readFileSync(`${path}/localhost+3-key.pem`),
      cert: fs.readFileSync(`${path}/localhost+3.pem`),
    };
  } else {
    return false;
  }
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/helpy-sheets/" : "/",
  devServer: {
    // disableHostCheck: true, //for ngrok
    https: checkHTTPSForDev("./cert"),
  },
};
