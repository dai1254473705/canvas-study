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
  fillStyle(opt) {
    console.log(opt);
    this.context.fillStyle = `rgba(0, 0, 200, ${opt})`;
    this.context.clearRect(0, 0, 150, 100);
    this.context.strokeRect(10, 10, 150, 100);
    this.context.fillRect(0, 0, 150, 100);
  }
  /**
   * 初始化
   */
  init() {
    let opt = 1;
    let isAdd = false;
    setInterval(() => {
      if (isAdd) {
        opt = opt + 0.1;
        if (opt >= 1) {
          isAdd = false;
        }
      } else {
        opt = opt - 0.1;
        if (opt <= 0) {
          isAdd = true;
        }
      }
      opt = Number(Number(opt).toFixed(2));
      this.fillStyle(opt);
    }, 500);
  }
  /**
   * 三角
   */
  move() {
    const ctx = this.context;
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 0.2, true); // 绘制
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // 口 (顺时针)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(225, 125);
    ctx.lineTo(225, 45);
    ctx.lineTo(145, 125);
    ctx.closePath();
    ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(25, 25);
    // ctx.lineTo(105, 25);
    // ctx.lineTo(25, 105);
    // ctx.fill();
  }
  /**
   * 获取鼠标坐标
   * @param {*} ev
   * @returns
   */
  getEventPosition(ev) {
    return { x: ev.offsetX, y: ev.offsetY };
  }
  /**
   * 鼠标事件
   */
  onClick(){
    this.canvas.onclick = (e) =>{
      const point = this.getEventPosition(e);
      const result = this.context.isPointInPath(point.x,point.y);
      console.log(e,point,result);

    }
  }
}
window.onload = () => {
  const myCanvas = new Canvas(document.getElementById("canvas"), {});
  // myCanvas.init();
  myCanvas.move();
  myCanvas.onClick();
};
