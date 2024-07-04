export function CatalanNumber(x: number): number{
  if(x <= 1) return 1
  return factorial(2 * x) / (factorial(x + 1) * factorial(x))
}

export function factorial(x: number): number{
  if (x == 0){
    return 1
  }return x * factorial(x-1)
}