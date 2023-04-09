
//     function sum  (a,b) {
//         if (typeof a === 'string')
//         {
//             throw new Error('error');
//         }
//         else{return a+b}
        
        
//     }



//     try{
//         console.log(sum(8,3));

//     }
// catch (error){
//      console.log(error);
//     }










 

    let events=require('events');
    let eventEmitter=new events.EventEmitter;
    let  p = () =>{
         console.log("welcome");
    }
    eventEmitter.on('hi',p);
    eventEmitter.emit('hi');
