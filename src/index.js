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
    // ctx.beginPath();
    // ctx.bezierCurveTo(100, 100, 90, 120,90,120)
    // ctx.bezierCurveTo(90, 120, 90, 150,100,200)
    // ctx.bezierCurveTo(150, 200, 230, 90,10,200)
    // ctx.arc(75, 75, 50, (Math.PI / 180) * 0, (Math.PI / 180) * 180, true); // 绘制
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false); // 口 (顺时针)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(225, 125);
    // ctx.lineTo(225, 45);
    // ctx.lineTo(145, 125);
    // ctx.closePath();
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(25, 25);
    // ctx.lineTo(105, 25);
    // ctx.lineTo(25, 105);
    // ctx.fill();

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(80, 120);
    ctx.bezierCurveTo(70, 90, 60, 80, 90, 120);
    // ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    // ctx.lineTo(111, 116);
    // ctx.lineTo(106.333, 111.333);
    // ctx.lineTo(101.666, 116);
    // ctx.lineTo(97, 111.333);
    // ctx.lineTo(92.333, 116);
    // ctx.lineTo(87.666, 111.333);
    // ctx.lineTo(83, 116);
    ctx.fill();

    // ctx.fillStyle = "white";
    // ctx.beginPath();
    // ctx.moveTo(91, 96);
    // ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    // ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    // ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    // ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    // ctx.moveTo(103, 96);
    // ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    // ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    // ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    // ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    // ctx.fill();

    // ctx.fillStyle = "black";
    // ctx.beginPath();
    // ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
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
