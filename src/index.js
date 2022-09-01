/**
 * 入口
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API
 */
class Canvas {
  /**
   * canvas dom元素
   */
  canvas = null;
  /**
   * canvas 上下文
   */
  context = null;
  /**
   * 默认数据，会和constructor中的props合并
   */
  data = {};

  constructor(canvas, props) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.data = { ...this.data, ...props };
  }

  /**
   * 填充数据
   */
  fillStyle() {
    this.context.fillStyle = "#454034";
    this.context.fillRect(10, 10, 150, 100);
  }
  /**
   * 初始化
   */
  init() {
    this.fillStyle();
  }
}
window.onload = () => {
  const myCanvas = new Canvas(document.getElementById("canvas"), {});
  myCanvas.init();
};
