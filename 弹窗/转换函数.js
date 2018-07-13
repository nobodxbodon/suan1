var 摄氏转华氏 = function (摄氏度) {
  return 摄氏度 * 9 / 5 + 32;
};
var 华氏转摄氏 = function (华氏度) {
  return 四舍五入((华氏度 - 32) * 5 / 9, 1);
};
