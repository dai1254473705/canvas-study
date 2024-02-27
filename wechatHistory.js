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
        "L83N9aSqaRTwZIk2XN0 iUwi5DyDFWP86y54zZCRd3xm5QcBLzEmCQ4LXmZ2dKf37Mtw4iLhmXdEyljWLFmGPg==",
      wap_sid2:
        "CNu3t4gLEooBeV9ISkMyZjVTWFU2RHFkdTR1WFRwUnlTa3ZydzlrQzQyRVRna3hPbWlFSXhpUmM3UjIzeG9CemN2aHd3STlNN3BPWXBwbkRUZVBOZ2FUSDVVT3ZULTZ3cVUwZU9NNGNwbWtjTEpEb2JPXzhDUDV1eG96eHprVkhMSVNNbVlCa3RUMUJNZ1NBQUF+MMLb9a4GOA1AlU4=",
      appmsg_token: "1258_JCiegp6PM4OGx137SCpkcCMtPTeksKfVOn5iMQ~~&x5=0",
      __biz: "Mzg4NDg4NzQ3Nw==",
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
timer = setInterval(() => {
  console.log('当前获取第',start,'页数据');
  getData('美女墙纸',start,10);
  start += 10;
}, 3000);

