function Gen(time){
    return new Promise((resolve,reject)=>{
        // console.log(time,Date.now())
        setTimeout(function(){
            resolve(time)
        },time)
    })
}

// function test1() {
// 	let arr = [Gen(2000), Gen(1000), Gen(3000)] 
// 	for(let item of arr) { 
// 		console.log(Date.now(), item.then(console.log)) 
// 	}
// }

// test1() 


// async function test2() { 
// 	let arr = [Gen(1000), Gen(2000), Gen(10000)]
// 	 for(let item of arr) { 
// 		 console.log( await item.then(console.log)) 
//          console.log(Date.now())
// 	 } 
// }
// test2();

async function test3() { 
	let arr = [Gen(2000), Gen(10000), Gen(3000)] 
	for await(let item of arr) {
		 console.log(Date.now(), item) 
	}	  
    console.log('test3')
}
test3() 
