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
