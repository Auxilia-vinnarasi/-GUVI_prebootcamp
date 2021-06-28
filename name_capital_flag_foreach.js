var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function() {
    var data = JSON.parse(this.response);
    //console.log(data);
    data.forEach(function(data, index) {
        console.log(data.name)
        console.log(data.capital)
        console.log(data.flag)
    });

};
xhr.send();