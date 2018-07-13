/**
 * @param 数 原数
 * @param 精度 小数点后位数
 */
function 四舍五入(数, 精度) {
  精度 = Math.pow(10, 精度)
  return Math.ceil(数 * 精度) / 精度
}

function 延迟(毫秒) {
  var 定时器 = 0;
  return function (回调) {
    clearTimeout(定时器);
    定时器 = setTimeout(回调, 毫秒);
  };
};