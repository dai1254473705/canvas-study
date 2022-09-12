const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const cheerio = require("cheerio");
const CONFIG = require("./config");
const { Image } = require("image-js");
const axios = require("axios");

/**
 * @router http://127.0.0.1:7001/hope/api/v2/spider/wechat
 * @param {String} pageUrl 页面的地址
 * @method POST
 */
const start = async () => {
  const url = process.argv[2] || CONFIG.bizhiUrl;
  try {
    const result = await axios({
      method: "get",
      url,
      responseType: "text/html",
      headers: {
        Referer: "https://mp.weixin.qq.com/",
      },
    });

    // 请求失败
    if (result.status !== 200) {
      console.error("获取页面url失败");
      return;
    }
    // 解析url返回的html
    const $ = cheerio.load(result.data);
    // 获取当前图片地址
    const img = $("img");
    console.log(img);
    const { filePath } = CONFIG;
    // 生成日期的目录
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const dirName = `${year}/${month > 9 ? month : "0" + month}/${
      date > 9 ? date : "0" + date
    }/`;
    for (let i = 0, len = img.length; i < len; i++) {
      const imgUrl = $(img[i]).attr("data-src");
      const imgType = $(img[i]).attr("data-type");
      const isInclude = ["jpeg", "jpg", "png", "webp"].includes(imgType);
      if (imgUrl && isInclude) {
        const fileName = new Date().getTime();
        const name = `${fileName}.jpg`;
        const saveFilePath = `${filePath.rootDir}${filePath.subDir}${dirName}`;
        const newPathFile = `${saveFilePath}${name}`;
        // const cachePath = path.join(__dirname, "../../cache/");
        fse.ensureDirSync(saveFilePath);
        // 下载图片
        await download(imgUrl, newPathFile);
        // 压缩尺寸统一宽度为600
        // const img = await Image.load(newPathFile);
        // await img.resize({ width: 800 }).save(cachePath + name);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
/**
 * 同步下载图片
 * @param { String } imgurl 图片地址
 * @param { String } dir 图片路径+名称.jpg
 */
const download = async (imgurl, dir) => {
  try {
    console.info("下载图片地址", imgurl);
    console.info("图片目录", dir);
    const headers = {
      Referer: "https://mp.weixin.qq.com/",
    };
    if (fs.existsSync(dir)) {
      console.info("------文件已经存在------：", dir);
      return;
    }
    const result = await axios({
      method: "get",
      url: imgurl,
      responseType: "arraybuffer",
      headers,
    });

    if (result.status === 200) {
      console.info("------保存详情图片------：", dir);
      // 生成图片2(把buffer写入到图片文件)
      fs.writeFileSync(dir, result.data);
    } else {
      console.info(
        "------保存详情图片失败------：result.status",
        result.status,
        dir
      );
    }
  } catch (error) {
    console.info("------保存详情图片失败------：");
    console.error(error);
  }
};
start();