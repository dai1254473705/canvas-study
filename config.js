/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-12 12:09:36
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-11-19 21:25:49
 * @FilePath: /wechat-spider/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
/**
 * 爬取配置文件
 */
module.exports = {
  filePath: {
    rootDir: path.resolve(__dirname, "../wechat-images-lib/"),
    subDir: "/file/bizhi/20240224",
  },
  // 要爬的地址
  bizhiUrl: [
   
  ],
};
