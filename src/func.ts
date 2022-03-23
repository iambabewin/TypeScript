// 当函数没有返回数据的时候返回类型就是void
function test():void{
    console.log(123)
}
test()

// 返回never的函数必须存在无法到达的终点
function error(message: string): never {
    throw new Error(message)
}

error('错误')