/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-21 22:03:15
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-22 18:38:16
 * @FilePath: /wechat-spider/wechatDoc/getContentUrl.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require("fs");
const fse = require("fs-extra");

let allData = [];
const files = fs.readdirSync("./wechatDoc/手机壁纸美图/");
files.forEach((item, index) => {
  if (item === "content_url.json") {
    return;
  }
  const data = require(`./手机壁纸美图/${item}`);
  if (!Array.isArray(data?.list)) {
    return;
  }

  const titles = getData(data, "content_url");
  allData = allData.concat(titles);
});
console.log(allData, "allData");
fse.writeJsonSync("./wechatDoc/手机壁纸美图/content_url.json", allData);

function getData(data, atrr) {
  var ss = [];
  data.list.map((item) => {
    ss.push(item.app_msg_ext_info[atrr]);
    if (item.app_msg_ext_info.multi_app_msg_item_list) {
      item.app_msg_ext_info.multi_app_msg_item_list.map((item1) => {
        ss.push(item1[atrr]);
      });
    }
  });
  return ss;
}
