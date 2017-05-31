// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))


var data2=  Mock.mock({
  name: {
    first: '@FIRST',
    middle: '@FIRST',
    last: '@LAST',
    full: '@first @middle @last'
  }
})

console.log(JSON.stringify(data2, null, 4))


var template = {
  name: 'value2'
}
var data = {
  name: 'value2'
}
var data3 = Mock.valid(template, data)

console.log(JSON.stringify(data3, null, 4))


var template = {
  name: 'value1'
}
var data = {
  name: 'value2'
}
var data4 = Mock.valid(template, data)

console.log(JSON.stringify(data4, null, 4))

