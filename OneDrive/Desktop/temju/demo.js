function* fib(n){
    let a=0,b=1;
    while(a<=n){
      yield a;
      [a,b]=[b,a+b];
    }
}
let ans=fib(20);
for(const e of ans){
    console.log(e);
}