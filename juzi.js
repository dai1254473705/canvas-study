const path = require("path");
const fse = require("fs-extra");
const axios = require("axios");
const _ = require("lodash");
const randomIp = () => {
  return `${_.random(1, 254)}.${_.random(1, 254)}.${_.random(
    1,
    254
  )}.${_.random(1, 254)}`;
};
const Eo = function (t) {
  var e = Object.keys(t)
    .filter(function (e) {
      return void 0 !== t[e];
    })
    .sort()
    .map(function (e) {
      var n = t[e];
      return null === n && (n = ""), "".concat(e, "=").concat(n);
    });
  return e.push("secret=".concat("nM26]^9{nb")), So.hex(e.join("&"));
};
/**
 * 获取内容
 */
const getContent = async (start) => {
  try {
    const { data: result } = await axios({
      method: "get",
      url: `https://api.juzikong.com/n0/discovery/posts/tags/%E7%94%B5%E5%BD%B1?start=${start}&timestamp=${new Date().getTime()}&sign=8badd4f3e383cc0f9cbeaac2cc15ee931abb541f`,
      headers: {
        "X-Forwarded-For": randomIp(),
        Referer: "https://api.juzikong.com/",
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
    return [];
  }
};
getContent(60);
