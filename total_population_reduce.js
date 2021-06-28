var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function() {
    var data = JSON.parse(this.response);
    //console.log(data);
    var pop = data.reduce((a, b) => ({ population: a.population + b.population }))
    console.log(pop.population)

};
xhr.send();