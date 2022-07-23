var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    console.log(t);

    for (let i=0;i<t.length;i++){
        console.log(`
        countryname: ${t[i].name},
        countryregion: ${t[i].region},
        countrysub-region: ${t[i].subregion},
        countrypopulation: ${t[i].population},
        `);
    }
  } else {

    console.log("Data is not available");

  }
};

xhr.send();