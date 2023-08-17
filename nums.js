const testNums=[2,3,6,34,8,2,1,4,7,9,2,5,3,2],testTarget=12;

function getTargetWays(nums,target){
    let storeComputerList=[];
    let wayNumbers=0;

    function sum(arrs){
        return arrs.reduce((result,current)=>result+current)
    }
   

    for(let i=0;i<nums.length;i++){
        let storeList=[];
        if(i===0){
            storeList.push([nums[i]]);
            storeList.push([-nums[i]]);
        }else{
            storeComputerList.map(tempNums=>{
                tempNums[i] = nums[i];
                storeList.push([...tempNums]);
                tempNums[i] = -nums[i];
                storeList.push([...tempNums]);
            })   
        }
        storeComputerList = storeList
    }

    storeComputerList.map(com=>{
        if(sum(com) === target){
            console.log(com)
            wayNumbers++
        }
    })
    return wayNumbers;
}

const result = getTargetWays(testNums,testTarget);
console.log(testNums,testTarget,result);