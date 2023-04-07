// function callName(x,y,print){
    
//    print(x+y)
// }
// function printResult(result){
//     console.log(result)
// }
// add(10,20,printResult)


function add(x,y,abc){
    abc(x+y)
    
}

add(10,20,(result) =>{
    a=result**4
    console.log(a)
})
