var 摄氏度输入 = document.getElementById("摄氏度");
var 华氏度输入 = document.getElementById("华氏度");

var 延迟250 = 延迟(250)
var 摄氏转华氏 = function (摄氏度) {
  return 摄氏度 * 9 / 5 + 32;
};
var 华氏转摄氏 = function (华氏度) {
  return 四舍五入((华氏度 - 32) * 5 / 9, 1);
};

摄氏度输入.addEventListener("keyup", function () {
  延迟250(function () {
    华氏度输入.value = 摄氏转华氏(摄氏度输入.value)
  })
});

华氏度输入.addEventListener("keyup", function () {
  延迟250(function () {
    摄氏度输入.value = 华氏转摄氏(华氏度输入.value);
  })
});

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