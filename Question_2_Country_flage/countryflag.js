var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    for (let i=0;i<t.length;i++){
        console.log(`
        countryflag: ${t[i].flag}
        `);
    }
  } else {

    console.log("Data is not available");

  }
};

xhr.send();