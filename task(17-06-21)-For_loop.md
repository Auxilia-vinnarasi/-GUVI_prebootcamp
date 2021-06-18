**For in**
var obj = [
  { person: "Name 1", age: "2", company: "GUVI" },
  { person: "Name 2", age: "5", company: "GUVI geek" },
  { person: "Name 3", age: "8", company: "GUVI geek network" },
];

for (var i in obj) 
{
  for (var j in obj[i]) 
  {
    console.log(j + ':'+obj[i][j]);
  }
}
##########################
**Output:**
person:Name 1
age:2
company:GUVI
person:Name 2
age:5
company:GUVI geek
person:Name 3
age:8
company:GUVI geek network

******************************************************************************************************
**for of:**
for (let i of obj) 
{

   console.log("person: "+i.person);
   console.log("age: "+i.age);
   console.log("company: "+i.company);
    
}
###########################
**Output:**
person: Name 1
age: 2
company: GUVI
person: Name 2
age: 5
company: GUVI geek
person: Name 3
age: 8
company: GUVI geek network
******************************************************************************************************
**for loop:**
for(i=0;i<obj.length;i++)
{
   console.log("person: "+obj[i].person);
   console.log("age: "+obj[i].age);
   console.log("company: "+obj[i].company);
    
}
#####################
**Output:**
person: Name 1
age: 2
company: GUVI
person: Name 2
age: 5
company: GUVI geek
person: Name 3
age: 8
company: GUVI geek network
***********************************************************************************************
**forEach:**
obj.forEach(function(data,index)
{
    console.log("person: "+data.person)
    console.log("age: "+data.age)
    console.log("company: "+data.company)
});
##################################3
**Output:**
person: Name 1
age: 2
company: GUVI
person: Name 2
age: 5
company: GUVI geek
person: Name 3
age: 8
company: GUVI geek network
*************************************************************************************************
**DISPLAY FLAG:**
var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          for(var i of data)
          {
              console.log(i.flag)
          }
        };
        xhr.send();
**************************************************************************************************
**print all countries name, region, sub region and population.**
var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          for(var i in data)
          {
              console.log(data[i].name)
              console.log(data[i].region)
              console.log(data[i].subregion)
              console.log(data[i].population)
          }
        };
        xhr.send();
************************************************************************************************        
        
