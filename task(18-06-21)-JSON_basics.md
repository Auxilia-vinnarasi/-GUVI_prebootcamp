**create a resume using JSON format**
var details=
{
"basics":
{
"Name":"Auxilia vinnarasi.s",
"E-mail":"auxiliavinnarasi@gmail.com",
"Degree":"B.E,MBA",
"phone":"xxx",
"location":
{
"country":"india",
"address":"XXXX",
"city":"YYYY"
}
},
"Experiance1":
[{
"company":"Hexaware Technologies",
"position":"Process Executive",
"website":"https://hexaware.com/",
"start Date":"Feb 2015",
"End Date":"October 2015",
"Highlights":
["Invoice preparation based on the provided data from clients and data retrieved from oracle",
"Preparing invoice package and send it to clients",
"Preparing reconciliation package and send it to clients"]
}],
"Experiance2":
[{
"company":"Pride Technologies",
"position":"Process Executive-finance",
"website":"http://www.pridetech.in/",
"start Date":"Feb 2016",
"End Date":"May 2018",
"Highlights":
["Responsible for preparing bank reconciliation statements on a monthly basis",
"Reviews bank accounts, checks balances against ledger amounts and verifies that the amounts match with the financial statement like asset, liability, expenses and revenues",
"Bank Recon preparation based on the provided data from clients and data retrieved from clients Server"]
}],
"education":
[{
"Institution":"sathyabama University",
"study-Type":"master-Degree",
"Batch":"2012-2014",
"location":"chennai"
}],
"Interests":
[{
"sports":"Tennis",
"Music":"ARR songs"
}]
}
console.log(details);
**output:**
{ basics: 
   { Name: 'Auxilia vinnarasi.s',
     'E-mail': 'auxiliavinnarasi@gmail.com',
     Degree: 'B.E,MBA',
     phone: 'xxx',
     location: { country: 'india', address: 'XXXX', city: 'YYYY' } },
  Experiance1: 
   [ { company: 'Hexaware Technologies',
       position: 'Process Executive',
       website: 'https://hexaware.com/',
       'start Date': 'Feb 2015',
       'End Date': 'October 2015',
       Highlights: [Array] } ],
  Experiance2: 
   [ { company: 'Pride Technologies',
       position: 'Process Executive-finance',
       website: 'http://www.pridetech.in/',
       'start Date': 'Feb 2016',
       'End Date': 'May 2018',
       Highlights: [Array] } ],
  education: 
   [ { Institution: 'sathyabama University',
       'study-Type': 'master-Degree',
       Batch: '2012-2014',
       location: 'chennai' } ],
  Interests: [ { sports: 'Tennis', Music: 'ARR songs' } ] 
******************************************************************************************************************************
 **how to compare two JSON have the same properties without order?
        var obj1 = { name: "Person 1", age:5 };
        var obj2 = { age:5, name: "Person 1" };**
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(obj1.name===obj2.name);
console.log(obj1.age===obj2.age);
**Output:**
true
true
##########################################
var obj1 = { name: "Person 2", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(obj1.name===obj2.name);
console.log(obj1.age===obj2.age);
**Output:**
false
true
##########################################










