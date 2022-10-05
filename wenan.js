/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-12 12:56:05
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-09-22 12:59:25
 * @FilePath: /wechat-spider/wenan.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const singleText = require('./reping');
const preUnit = ["一组", "快来看，", "速看，", "", "一批", "一套"];
const pre = [
  "超赞的",
  "超可爱的",
  "超哇塞",
  "超nice的",
  "超级好看的",
  "超爱的",
  "超喜欢的",
  "好看到爆的",
  "点赞超高",
  "爱不释手的",
  "优质的",
  "YYDS",
  "宝藏",
  "非常好看的",
  "拍案叫绝的",
  "精彩绝伦的",
  "震撼人心的",
  "高质量",
  "优质的",
  "唯美",
  "精选",
  "热门",
];
const end = ["全面屏壁纸", "小姐姐壁纸","壁纸","手机壁纸","动漫壁纸","高清壁纸"];
const generateTitle = () => {
  const text = [];
  const radomPreUnit = preUnit[Math.ceil(Math.random() * preUnit.length) - 1];
  const radomPre = pre[Math.ceil(Math.random() * pre.length) - 1];
  const radomEnd = end[Math.ceil(Math.random() * end.length) - 1];
  text.push(radomPreUnit, radomPre, radomEnd);
  return text.join("");
};
const generateText = () => {
  return singleText[Math.ceil(Math.random() * singleText.length) - 1];
};

const title = generateTitle();
const text = generateText();
console.log(`
    标题：${title}
    文案：${text}
`);
