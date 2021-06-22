**Print odd numbers in an array **-Anonymous function:
var get_odd=function(arr)
{
let len=arr.length;
let res="";
for(i=0;i<len;i++)
{
    if(arr[i]%2===1)
    {
     res=res+arr[i]+" "
    }
}
console.log(res.trim()); 
}
get_odd([1,2,3,4,5,6,7])
Output:
1 3 5 7
#######################################################
**Print odd numbers in an array ** -IIFE function:
(function(arr)
{
let len=arr.length;
let res="";
for(i=0;i<len;i++)
{
    if(arr[i]%2===1)
    {
     res=res+arr[i]+" "
    }
}
console.log(res.trim()); 
})([1,2,3,4,5,6,7]);
Output:
1 3 5 7
##########################################################
Sum of all numbers in an array-Anonymous function:
var sum_arr=function(arr)
{
let len=arr.length;
let res=0;
for(i=0;i<len;i++)
{
    res=res+arr[i]
}
console.log(res); 
}
sum_arr([1,2,3,4]);
**********************************
Output:
10
############################################################
Sum of all numbers in an array-IIFE function:
(function(arr)
{
let len=arr.length;
let res=0;
for(i=0;i<len;i++)
{
    res=res+arr[i]
}
console.log(res); 
})([1,2,3,4])
**********************************
Output:
10
#########################################################
Return all the prime numbers in an array:Anonymous function
var get_prime=function(arr)
{
let len=arr.length;
let res="";
let count;
for(i=0;i<len;i++)
{
    count=0;
    for(j=1;j<=arr[i];j++)
    {
        if(arr[i]%j===0)
        {
          count=count+1;
        }
    }
    if(count===2)
    {
    res=res+arr[i]+" "
    }
}
console.log(res.trim()); 
}
get_prime([5,11,12,13]);
*************************************
Output:
5 11 13
###############################################################
Return all the prime numbers in an array:IIFE function
(function(arr)
{
let len=arr.length;
let res="";
let count;
for(i=0;i<len;i++)
{
    count=0;
    for(j=1;j<=arr[i];j++)
    {
        if(arr[i]%j===0)
        {
          count=count+1;
        }
    }
    if(count===2)
    {
    res=res+arr[i]+" "
    }
}
console.log(res.trim()); 
})([5,11,12,13]);
*************************************
Output:
5 11 13
####################################################################
Convert all the strings to title caps in a string array:Anonymous function
var title_caps=function(arr)
{
let len=arr.length;
let res="";
for(i=0;i<len;i++)
{
    for(j=0;j<arr[i].length;j++)
    {
        if(j===0)
        {
            res=res+arr[i][j].toUpperCase()
        }
        else
        {
            res=res+arr[i][j]
        }
        }
res=res+" ";
}
console.log(res.trim()); 
}
title_caps(["chennai","madurai","trichy"]);
********************************************
Output:
Chennai Madurai Trichy
##########################################################################
Convert all the strings to title caps in a string array:IIFE function:
(function(arr)
{
let len=arr.length;
let res="";
for(i=0;i<len;i++)
{
    for(j=0;j<arr[i].length;j++)
    {
        if(j===0)
        {
            res=res+arr[i][j].toUpperCase()
        }
        else
        {
            res=res+arr[i][j]
        }
        }
res=res+" ";
}
console.log(res.trim()); 
})(["chennai","madurai","trichy"]);
********************************************
Output:
Chennai Madurai Trichy
###########################################################################
Remove duplicates from an array:Anonymous function:
var remove_dup=function(arr)
{
let len=arr.length;
let res=[];
for(i=0;i<len;i++)
{
    if(res.includes(arr[i]))
    {
        continue;
    }
    else
    {
        res.push(arr[i])
    }
}
console.log(res.join(" "));
}
remove_dup(["a","b","a","c","b","v"]);
***************************************
Output:
a b c v
########################################################
Remove duplicates from an array:IIFE function
(function(arr)
{
let len=arr.length;
let res=[];
for(i=0;i<len;i++)
{
    if(res.includes(arr[i]))
    {
        continue;
    }
    else
    {
        res.push(arr[i])
    }
}
console.log(res.join(" "));
})(["a","b","a","c","b","v"]);
***************************************
Output:
a b c v
############################################################
Print odd numbers in an array:Arrow function:
var get_odd=(arr)=>{
let len=arr.length;
let res="";
for(i=0;i<len;i++)
{
    if(arr[i]%2===1)  
    {
     res=res+arr[i]+" "
    }
}
console.log(res.trim()); 
}
get_odd([1,2,3,4,5,6,7])
****************************************************
Output:
1 3 5 7
###################################################################
Sum of all numbers in an array:Arrow function:
var sum_arr=(arr)=>{
let len=arr.length;
let res=0;
for(i=0;i<len;i++)
{
    res=res+arr[i]
}
console.log(res); 
}
sum_arr([1,2,3,4]);
********************************************
Output:
10
#####################################################################
 Convert all the strings to title caps in a string array:Arrow function
var title_caps=(arr)=>{
let len=arr.length;
let res="";
for(i=0;i<len;i++)
{
    for(j=0;j<arr[i].length;j++)
    {
        if(j===0)
        {
            res=res+arr[i][j].toUpperCase()
        }
        else
        {
            res=res+arr[i][j]
        }
        }
res=res+" ";
}
console.log(res.trim()); 
}
title_caps(["chennai","madurai","trichy"]);
***************************************************
Output:
Chennai Madurai Trichy
##############################################################
Return all the prime numbers in an array:Arrow function
var get_prime=(arr)=>{
let len=arr.length;
let res="";
let count;
for(i=0;i<len;i++)
{
    count=0;
    for(j=1;j<=arr[i];j++)
    {
        if(arr[i]%j===0)
        {
          count=count+1;
        }
    }
    if(count===2)
    {
    res=res+arr[i]+" "
    }
}
console.log(res.trim()); 
}
get_prime([5,11,12,13]);
*******************************************
Output:
5 11 13
#######################################################
Rotate an array by k times:Anonymous function:
var rotate_arr=function(arr,k)
{
  for (let i=0;i<k;i++)
  {
      arr.unshift(arr.pop());
  }
console.log(arr);
}
rotate_arr([5,11,12,13,4,8,9],3);
******************************************
Output:
[ 4, 8, 9, 5, 11, 12, 13 ]
######################################################
Rotate an array by k times:IIFE function:
(function(arr,k)
{
  for (let i=0;i<k;i++)
  {
      arr.unshift(arr.pop());
  }
console.log(arr);
})([5,11,12,13,4,8,9],3);
******************************************
Output:
[ 4, 8, 9, 5, 11, 12, 13 ]
########################################################
Return median of two sorted arrays of same size:Anonymous function:
var getMedian=function(ar1, ar2, n)
{
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
       else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
}
console.log(getMedian([1, 12, 15, 26, 38],[2, 13, 17, 30, 45],5));
**********************************************
Output:
16
##################################################################
Return median of two sorted arrays of same size:IIFE function
(function(ar1, ar2, n)
{
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
       else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
})(console.log([1, 12, 15, 26, 38],[2, 13, 17, 30, 45],5));
**********************************************
Output:
16
##################################################################
Return median of two sorted arrays of same size:IIFE function
(function(ar1, ar2, n)
{
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
       else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    console.log((m1 + m2)/2);
})
([1, 12, 15, 26, 38],[2, 13, 17, 30, 45],5);
*********************************************
Output:
16
###################################################################
Return all the palindromes in an array:Anonymous function
var isPalindrome=function (arr) 
{
    var res=""
    for(i=0;i<arr.length;i++)
    {
    if(arr[i] == arr[i].split("").reverse().join(""))
    {
      res=res+arr[i]+" ";
    }
    }
console.log(res.trim())
}
isPalindrome(["noon","abc","malayalam"]);
*************************************************
Output:
noon malayalam
####################################################################
Return all the palindromes in an array:IIFE function
(function (arr) 
{
    var res=""
    for(i=0;i<arr.length;i++)
    {
    if(arr[i] == arr[i].split("").reverse().join(""))
    {
      res=res+arr[i]+" ";
    }
    }
console.log(res.trim())
})(["noon","abc","malayalam"]);
*************************************************
Output:
noon malayalam
##################################################################
Return all the palindromes in an array:Arrow function
var ispalindrome=(arr)=>{
    var res=""
    for(i=0;i<arr.length;i++)
    {
    if(arr[i] == arr[i].split("").reverse().join(""))
    {
      res=res+arr[i]+" ";
    }
    }
console.log(res.trim())
}
ispalindrome(["noon","abc","malayalam"]);
***********************************************
Output:
noon malayalam
##################################################################



