var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function() {
    var data = JSON.parse(this.response);
    //console.log(data);
    var region = data.filter((el) => el.region == "Asia")
    for (i = 0; i < region.length; i++) {
        console.log(region[i].name);
    }

};
xhr.send();