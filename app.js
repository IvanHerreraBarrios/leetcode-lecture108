function powerset(arr){
    if(arr.length === 0) return [[]]

    const first = arr[0]
    const pw = powerset(arr.slice(1))
    const len = pw.length
    for (let i=0; i < len; i++){
        pw.push([first, ...pw[i]])
    }
    return pw
}

console.log(powerset([1,2,3]))

/*
arr = [1,2]
result = [[],[1],[2]]
i = 1
len = 2 //result.len
last = 2
j = 0
*/
function powerset(arr){
    const result = [[]]

    for(let i=0; i < arr.length; i++){
        const len = result.length
        const last = arr[i]
        for(let j=0; j < len; j++){
            result.push([...result[j], last])
        }
    }

    return result
}