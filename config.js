const path = require('path');
/**
 * 爬取配置文件
 */
module.exports = {
    filePath: {
        rootDir: path.resolve(__dirname,'../file/'),
        subDir: 'bizhi/',
    },
    bizhiUrl: 'https://mp.weixin.qq.com/s/ZJH22wq9aovXrGlyA7MmiA', // 要爬的地址
};
