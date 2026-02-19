let arr = [1, 3, 5, 7, 9, 11, 13]
let search = 11
let f = 0
let l = arr.length - 1

while(f <= l){
    let mid = Math.floor((f + l) / 2)
    if(arr[mid] === search){
        console.log(mid)
        break;
    } else if (arr[mid] < search) {
        f = mid + 1;
    } else {
        l = mid - 1
    }
}