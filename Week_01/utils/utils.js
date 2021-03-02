// 异步延时
function sleep(time) {
    return new Promise((resolve) =>{
        setTimeout(resolve, time)
    }) 
}