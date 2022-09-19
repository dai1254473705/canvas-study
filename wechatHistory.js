/**
 * 获取微信记录
 */
const axios = require("axios");

const getData = async (offset=10,count=10) => {
  try {
    const config = {
        pass_ticket: 'F6XfC3RnkML1mN+TNrfKmlJIeSWbThqPuYqxsOWZm8pHBb//0VlO656PEVeGN75a',
        wap_sid2: 'CNu3t4gLEooBeV9IQnd6TUYxUzdBRXlTRUlxWlgxU0IxNVdCTmpCUXpqRUhjbzNHZmV6Y29SZG0xN3dqTFpVckdnOEhVWlhsaVFWNTVPVzlWT0FqSnZSdG1uN1RsS2tXUnE0ZGdCemgyT1h3cFBkdXNSRHE3TElQdFkyR094RlNfQnBPalFTQ282bFJuMFNBQUF+MP33n5kGOA1AlU4=',
        appmsg_token: '1183_a4DdHRiWAhAIf9rOpNquPuG6gWhkJbyNbnxbNfTaMyaVQoeh2SDjF8N7gMM1qMJBtnIKX4-ZjPlzDy-i',
        __biz: 'MzI4MjE5Mjg2Mw==',
    };
    const { data } = await axios({
      method: "get",
      url: `https://mp.weixin.qq.com/mp/profile_ext?action=getmsg&__biz=${config.__biz}&f=json&offset=${offset}&count=${count}&is_ok=1&scene=&uin=777&key=777&pass_ticket=${config.pass_ticket}&wxtoken=&appmsg_token=${config.appmsg_token}&x5=0&f=json`,
      headers: {
        Cookie:
          `devicetype=iOS16.0; lang=zh_CN; pass_ticket=${config.pass_ticket}; version=18001c29; wap_sid2=${config.wap_sid2}; wxuin=2970475483; appmsg_token=${config.appmsg_token}; rewardsn=; wxtokenkey=777`,
      },
    });
    console.log(data, "result-=----");
  } catch (error) {
    console.log("失败了", error);
  }
};
getData();
