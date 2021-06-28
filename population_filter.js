var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function() {
    var data = JSON.parse(this.response);
    //console.log(data);
    var population = data.filter((el) => el.population < 200000)
    for (i = 0; i < population.length; i++) {
        console.log(population[i].name);
    }

};
xhr.send();