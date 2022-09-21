/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-21 22:03:15
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-21 22:07:05
 * @FilePath: /wechat-spider/wechatDoc/getContentUrl.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const data = require('./仓鼠高清壁纸/0-10.json');


var ss = [];
data.list.map(item=>{
  ss.push(item.app_msg_ext_info.content_url);
  if (item.app_msg_ext_info.multi_app_msg_item_list) {
    item.app_msg_ext_info.multi_app_msg_item_list.map(item1=>{
        ss.push(item1.content_url);
    });
  }
})
console.log(ss);

