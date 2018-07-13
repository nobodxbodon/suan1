var 摄氏度输入 = document.getElementById("摄氏度");
var 华氏度输入 = document.getElementById("华氏度");

var 延迟250 = 延迟(250)

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
