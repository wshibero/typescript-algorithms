// linear search 

export function linearSearch(arr: any[], target: any): number{
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === target){
      return i
    }
  }
  return -1
}

// binary search 

export function binarySearch(arr: number[], target: number, upper: number = arr.length - 1, lower: number = 0): number{
  let mid = Math.floor((upper + lower) / 2)
  if(arr[mid] == target){
    return mid
  }else if(arr[mid] > target){
    return binarySearch(arr, target, mid - 1, lower)
  }else if(arr[mid] < target){
    return binarySearch(arr, target, upper, mid + 1)
  }else{
    return -1
  }
}

export function interpolationSearch(arr: number[], target: number, upper: number = arr.length - 1, lower: number = 0): number{
  let pos: number = lower + Math.floor((target - arr[lower])*(upper - lower)/(arr[upper] - arr[lower]) )
  if(arr[pos] == target){
    return pos
  }else if(arr[pos] > target){
    return interpolationSearch(arr, target, pos - 1, lower)
  }else if(arr[pos] < target){
    return interpolationSearch(arr, target, upper, pos + 1)
  }
  return -1
}

export function jumpSearch(arr: number[], target: number, )