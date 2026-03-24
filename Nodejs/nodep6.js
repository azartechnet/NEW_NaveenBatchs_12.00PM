//setTimeout using files
var f1=require('fs')
f1.writeFile('f1.txt',"welcome to nodejs",function(err){
    if(err)
    {
       console.log(err)
    }
    else
    {
        setTimeout(function(){
            console.log("welcome to the Application")
        })
    }
    //read the file after 3 seconds

    f1.readFile('f1.txt',function(err,data){
        if(err)
        {
            console.log(err)
        }
        else
        {
            setTimeout(function(){
                console.log(data.toString())
            },3000)
        }
    })
})