const path = require('path');
/**
 * 爬取配置文件
 */
module.exports = {
    filePath: {
        rootDir: path.resolve(__dirname,'../wechat-images-lib/'),
        subDir: '/bizhi/',
    },
    bizhiUrl: '', // 要爬的地址
};
