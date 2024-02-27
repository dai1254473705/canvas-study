/*
 * @Author: daiyunzhou daiyunz@chanjet.com
 * @Date: 2022-10-16 10:10:08
 * @LastEditors: daiyunzhou daiyunz@chanjet.com
 * @LastEditTime: 2022-11-20 10:57:05
 * @FilePath: /wechat-spider/batchReplace.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function batchReplace(start, end) {
  var allImages = document.querySelectorAll('section[data-miao="miaobizhi"] .wxw-img');
  var sourceImages = window.top.document.querySelectorAll("#js_image_dialog_list_wrp .weui-desktop-img-picker__img-thumb");
  var images = Array.from(sourceImages).map((item) =>
    item.style.backgroundImage.replace('url("', "").replace('")', "")
  );
  // 开始设置url
  console.log({
    allImages,
    sourceImages,
    images
  });
  if (images.length === 0 || allImages.length === 0 || start === undefined || end===undefined) {
    console.log("不符合条件");
    return;
  }
  Array.from(allImages).forEach((element,index)=>{
    if (index >=start && index <=end) {
        element.src = images[index-start];
    }
  })
}
batchReplace(0, 11);
batchReplace(12, 23);
batchReplace(24, 29);
