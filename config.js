/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-09-12 12:09:36
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-10-03 08:26:37
 * @FilePath: /wechat-spider/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
/**
 * 爬取配置文件
 */
module.exports = {
  filePath: {
    rootDir: path.resolve(__dirname, "../wechat-images-lib/"),
    subDir: "/bizhi/",
  },
  // 要爬的地址
  bizhiUrl: [
   "https://mp.weixin.qq.com/s/qPqAKyyPy1VQ5O0dnw3OTA",
   "https://mp.weixin.qq.com/s/GaJ7vUsUz0gcA_2k41UQ7w",
   "https://mp.weixin.qq.com/s/NS0kMLH2PtAal3gtGcWsOg",
   "https://mp.weixin.qq.com/s/8NjnraVQ-_ZSpp-H3bjwcg",
   "https://mp.weixin.qq.com/s/GFiM2vYgDazMWmapAZ8XTw",
   "https://mp.weixin.qq.com/s/UElR0g_TBXOW8ao_jOI8fw",
   "https://mp.weixin.qq.com/s/FzDYXwsqXoTv10R-fUgytQ",
   "https://mp.weixin.qq.com/s/eHIiuf2yNevwTmVbgvLWPQ",
   "https://mp.weixin.qq.com/s/SuN5iihWX-rSEU3Yy5NpTw",
   "https://mp.weixin.qq.com/s/NhONKVpt12kS7NNbzxbQ2Q",
   "https://mp.weixin.qq.com/s/CbT8b4LyzSmJ4dtZRC20bQ",
   "https://mp.weixin.qq.com/s/SILCwHgtA89_PX2Kiml-cQ",
   "https://mp.weixin.qq.com/s/U___bEUQTSVyuoRZ-srgGw",
   "https://mp.weixin.qq.com/s/i01E_pMMPwzopR_IFlyFWA",
   "https://mp.weixin.qq.com/s/Pb9i1qy--6XIwHi-XVUBMQ",
   "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491848&amp;idx=6&amp;sn=eff2ca76123f12c8cc07d3342b6b0813&amp;chksm=f25e8a7ec52903687970ad7c5a15a0b155c8a0606be24f048ff7666862d48ed63501718880b9&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491848&amp;idx=7&amp;sn=ad0ad62ea57c9e6cab48fa5d168e38bc&amp;chksm=f25e8a7ec5290368559ff0079763f61f732fb55489b074dacc22ca4a5b52110954e87fd51538&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491848&amp;idx=8&amp;sn=fe5588aa10acccf07b8e0cdb4a5bf870&amp;chksm=f25e8a7ec52903681b94eaed68ba1a571869aef9ee310a6537779fabc6eba24572b591ed2914&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491299&amp;idx=1&amp;sn=849a5c9075ae84685c29587126b02f9d&amp;chksm=f25e8815c52901031871bb815101c3a70dbc4a53fb242aedcf9a40cdf924280cb027dd3f0e47&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491299&amp;idx=2&amp;sn=c0fc2ede489a16c220ec65102b2b5f14&amp;chksm=f25e8815c5290103f81bbd80003d79d131574c9c57f7f34939297e8d8bbcd7547f609d2fa1a4&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491299&amp;idx=3&amp;sn=fdda66f842f7c6baaa1e19402d71e4c2&amp;chksm=f25e8815c5290103d2cf826adbe2f4757525e653cfbf720a27819939648fa46a1eb897f5be62&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491299&amp;idx=4&amp;sn=5d34d62c29772996a0d2802d2fe17854&amp;chksm=f25e8815c52901038ec4be82ac2f692f10b97495339dbba06d34a5d6625aefebda790b29a5a1&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491299&amp;idx=5&amp;sn=0d0fce044148bd84fd578e6f3af2c7f9&amp;chksm=f25e8815c5290103dc8595d05f837d99fecf4c3823a357a8d195a03dd9f960e3e851dbfee142&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491299&amp;idx=6&amp;sn=01517d33e71d9bd05b343d04aa4f8d11&amp;chksm=f25e8815c5290103a4f00fa34ce9175c7ed848f9170495ae24171b151be5733b0092de6cbafe&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491299&amp;idx=7&amp;sn=193928906a7001472e3ff315f290a097&amp;chksm=f25e8815c52901032c37063282c6dbf4c8407771619c8b19594c0d84c3787153af7b0942e5c2&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650491299&amp;idx=8&amp;sn=e8c64df27a7b0dcefeb7146b371051be&amp;chksm=f25e8815c5290103c4051cf4f1b9a0d72facc79106368acb01ecc334b8fad61d8e401550851f&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490675&amp;idx=1&amp;sn=8bfaff672d02430625cbed6adf37127c&amp;chksm=f25e8685c5290f937eafd32700fb54a66751b26f8140f1796b08646b425dbc145bce0453a225&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490675&amp;idx=2&amp;sn=bdf9a04b0c3bfe4808025250b76a8b9d&amp;chksm=f25e8685c5290f9338772bea02c812c3d33b61a6dadd99c477cb1c3a50625cd4d8b6a91e9bbb&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490675&amp;idx=3&amp;sn=28ff374f3c02be16d4f78169d17cf512&amp;chksm=f25e8685c5290f935b3d8427e7437306c343cd995ce0b7f1bcee838b23f147d255f554870ee5&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490675&amp;idx=4&amp;sn=8b2c286034b793fb9d6934ab865a60b8&amp;chksm=f25e8685c5290f938a0e163a25d785f0e8532dd04490ba2917fee3f96d705b56bdba2c63e530&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490675&amp;idx=5&amp;sn=4369d8319c4a7f8e2a1f32431a34ea63&amp;chksm=f25e8685c5290f9356f1f0aa8cdbb0c9ec5ca492b63c1a74d856f4fb6523c448fc4a2bb058e0&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490675&amp;idx=6&amp;sn=7bf74d3cb186e4cf1ac0885e4bc738aa&amp;chksm=f25e8685c5290f933deb4e04d42f9d0b41b26431598d61f96645e5abc93fcf46d50267fad968&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490675&amp;idx=7&amp;sn=1c372d464fe217184fcd65dc3e4ad4e8&amp;chksm=f25e8685c5290f932b514b8130967d4fe1ce25503ecf0fcc669cb9c09345eee4981dd78a0a8b&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490675&amp;idx=8&amp;sn=d5e2bb398e1d46eef7f35509cde3ccd0&amp;chksm=f25e8685c5290f93384fea9e9107e64bd8446083f314760f14b95ff47ae688c5b7cd92787fb7&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490087&amp;idx=1&amp;sn=320456a12ffe9e6c8db851e434e912fa&amp;chksm=f25e8551c5290c47b34450b4842d5562b3a010511c49a5a148b5d7f9fb4de0af9443953dd92c&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490087&amp;idx=2&amp;sn=5fc94a14b7d780b870dd742c46aea2e0&amp;chksm=f25e8551c5290c47953f9753a82ba807e3f9ad858f8dac53b908ffbafa2ec3c1b086999c5c4a&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490087&amp;idx=3&amp;sn=b41bdbe807c2328cdb5ff63d47bed76e&amp;chksm=f25e8551c5290c47d808647ba11ed9b9929e5cd2e37191684afb894db47c091662db7299893b&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490087&amp;idx=4&amp;sn=e278aefca3d7fbff845214b5bf30da33&amp;chksm=f25e8551c5290c4720e70ee1280607495befb0d01431fa9f7add9def346b79246c2473af2fe9&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490087&amp;idx=5&amp;sn=0f5ec1d81232eda3ffe10a630960622c&amp;chksm=f25e8551c5290c478d66dc478dddb45624076b865d2bc59a33b16a52a98d3c3b06b8b74c0f90&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490087&amp;idx=6&amp;sn=2f3d9e2e588ff3dbb29d821507b41bf9&amp;chksm=f25e8551c5290c47b44140d611a32302c1117a2363c6a01d2f4179136e42695df84762c345ec&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490087&amp;idx=7&amp;sn=f89882050274a508672804370845032e&amp;chksm=f25e8551c5290c474a29c7bc4171de68550665583744635650bf087c1c4e80cd618ed575beb5&amp;scene=27#wechat_redirect",
  "http://mp.weixin.qq.com/s?__biz=MzI2MjAyNzQ4MQ==&amp;mid=2650490087&amp;idx=8&amp;sn=d6162dbdc7cf515c0b458c9da3508c86&amp;chksm=f25e8551c5290c476ec6a2087df4d9f9e573455ddf4b737846221c978efddf2af08e333f4dcb&amp;scene=27#wechat_redirect",
  ],
};
