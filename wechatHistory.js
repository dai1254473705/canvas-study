/**
 * 获取微信记录
 */
const fse = require("fs-extra");
const path = require("path");
const axios = require("axios");
var timer = null;
var start = 0;
// 保存json
const saveData = async(accountName,fileName,data)=>{
  const rootPath = path.join(__dirname,`./wechatDoc/${accountName}/${fileName}`)
  await fse.ensureFileSync(rootPath);
  fse.writeJsonSync(rootPath, data)
}
const getData = async (accountName,offset = 10, count = 10) => {
  try {
    const config = {
      pass_ticket:
        "wcFfIX924MrvM2atKkelhrgGk9VeG53c4jebPWQppDlHZwJB5VK0mdyxmcM78mw1",
      wap_sid2:
        "CNu3t4gLEooBeV9IUHd1Wk1jQ25hakN3SmpkN2VLanVqWXpDMXpISHJkbmNDbkljSWo0WnEzQUNaTVpDdlRQMzNzZ0pGa0s1T3RQWWctRzZBZmRVbUV2ZFF0WnJmcGtvM1BpMG9RVlkwRUZta3J6Z2x2YXIwQkUtaDNJNTU4RzVka2M3N0pCd0lXc2FuMFNBQUF+MMqyqpkGOA1AlU4=",
      appmsg_token: "1183_Ffg2Jwgx%2FWLvoyIw1s_NRUHIDXUso1F44KzcXg~~",
      __biz: "MzI2MjAyNzQ4MQ==",
    };
    const { data } = await axios({
      method: "get",
      url: `https://mp.weixin.qq.com/mp/profile_ext?action=getmsg&__biz=${config.__biz}&f=json&offset=${offset}&count=${count}&is_ok=1&scene=&uin=777&key=777&pass_ticket=${config.pass_ticket}&wxtoken=&appmsg_token=${config.appmsg_token}&x5=0&f=json`,
      headers: {
        Cookie: `devicetype=iOS16.0; lang=zh_CN; pass_ticket=${config.pass_ticket}; version=18001c29; wap_sid2=${config.wap_sid2}; wxuin=2970475483; appmsg_token=${config.appmsg_token}; rewardsn=; wxtokenkey=777`,
      },
    });
    console.log(data, "result-=----");
    if (data.general_msg_list.length < 100) {
      clearInterval(timer);
      timer=null;
      console.log('终止操作');
      return;
    }
    saveData(accountName,`${offset}-${count}.json`,JSON.parse(data.general_msg_list));
  } catch (error) {
    console.log("失败了", error);
  }
};

// 仓鼠高清壁纸
// 手机壁纸美图
// timer = setInterval(() => {
//   console.log('当前获取第',start,'页数据');
//   getData('手机壁纸美图',start,10);
//   start += 10;
// }, 5000);
getData('手机壁纸美图',2030,10);
