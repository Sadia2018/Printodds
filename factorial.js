function factorial(n) {
    let product = 1;
    if( n== 0 || n==1){
        return product;
    }else{
        for(var i=n; i >=1; i--){
product = product * i;
        }
        return product;
    }
}
let n = 12;
product = factorial(n)
console.log("the factorial of " + n + " is " + product);