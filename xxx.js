// 递归伪代码
const recurve=(children)=>{
   // 没有就退出
    if(!children){
        return
    }
    let xx=[]
    // 有就继续
    if(children){
       xx=recurve(children)
    }
    return xx
}