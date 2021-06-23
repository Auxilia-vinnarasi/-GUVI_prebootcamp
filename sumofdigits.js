let n = "123";
console.log(add(n));
function add(n)
{
let sum =0;
for(var i=0;i<n.length;i++){
 sum+=+n[i]
 }
 return sum;
}

/*if we give n as a number we are unable to find out the length so we are changing that into string.
typecasting each digit to num and getting the sum.and the variable sum should be initialized as 0 not 10./*
