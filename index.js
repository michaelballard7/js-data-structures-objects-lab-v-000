// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(obj, key, value){

    const newObj = {...obj}
    newObj[key] = value
    return newObj
}


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key]=value
    return obj
}
