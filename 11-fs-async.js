const { Console } = require('console');
const {readFile, writeFile, read} = require('fs');

console.log('start')
readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const firts = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
         if(err){
        console.log(err)
        return
    }
    const second = result;
    writeFile('./content/result-async.txt', `Here is the result: ${firts}, ${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log('done wiht this task')
    })
    })
} )
console.log('starting the next task')
