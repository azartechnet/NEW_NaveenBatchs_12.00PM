//Synchrous read

var f1=require('fs')
try
{
    var data=f1.readFileSync('f1.txt')
    console.log(data.toString())
}
catch(err)
{
    console.log(err)
}
//Asynchrous read

setTimeout(function(){
    var f1=require('fs')
    f1.readFile('f1.txt',function(err,data){
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log(data.toString())
        }
    })
},2000)