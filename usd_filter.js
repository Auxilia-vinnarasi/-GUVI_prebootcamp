var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function() {
    var data = JSON.parse(this.response);
    //console.log(data);
    var us_currency = data.filter((el) => el.currencies[0].code == "USD")
    for (i = 0; i < us_currency.length; i++) {
        console.log(us_currency[i].name);
    }

};
xhr.send();