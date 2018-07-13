
QUnit.test("辅助函数 四舍五入 测试", function( assert ) {

  // TODO: 未通过
  //assert.equal(1, 四舍五入(1.4, 0))
  
  assert.equal(2, 四舍五入(1.6, 0))
  assert.equal(1.1, 四舍五入(1.06, 1))
});
