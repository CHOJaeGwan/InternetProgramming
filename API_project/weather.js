var serviceKey =
  "QsjeTM7UsScjUL7UI3zGEdIoOgv5m2XFEUJgkCAqLVCLQpFyIHwZGN050KV7sIiJFMHON6LIxA9HtelShKoRtA%3D%3D";

export async function getWeather(date, time, x, y) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var url =
      "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"; /*URL*/
    var queryParams =
      "?" + encodeURIComponent("serviceKey") + "=" + serviceKey; /*Service Key*/
    queryParams +=
      "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("numOfRows") +
      "=" +
      encodeURIComponent("1000"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("dataType") +
      "=" +
      encodeURIComponent("JSON"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("base_date") +
      "=" +
      encodeURIComponent(date); /**/
    queryParams +=
      "&" +
      encodeURIComponent("base_time") +
      "=" +
      encodeURIComponent(time); /**/
    queryParams +=
      "&" + encodeURIComponent("nx") + "=" + encodeURIComponent(y); /**/
    queryParams +=
      "&" + encodeURIComponent("ny") + "=" + encodeURIComponent(x); /**/
    xhr.open("GET", url + queryParams);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status === 200) {
          const response = {
            status: this.status,
            headers: this.getAllResponseHeaders(),
            body: this.responseText,
          };
          resolve(response);
        } else {
          reject(new Error(`HTTP error! Status: ${this.status}`));
        }
      }
    };
    xhr.send("");
  });
}

export async function getAtmosphere(city) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var url =
      "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty"; /*URL*/
    var queryParams =
      "?" + encodeURIComponent("serviceKey") + "=" + serviceKey; /*Service Key*/
    queryParams +=
      "&" +
      encodeURIComponent("returnType") +
      "=" +
      encodeURIComponent("JSON"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("numOfRows") +
      "=" +
      encodeURIComponent("100"); /**/
    queryParams +=
      "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("sidoName") +
      "=" +
      encodeURIComponent(city); /**/
    queryParams +=
      "&" + encodeURIComponent("ver") + "=" + encodeURIComponent("1.0"); /**/
    xhr.open("GET", url + queryParams);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status === 200) {
          const response = {
            status: this.status,
            headers: this.getAllResponseHeaders(),
            body: this.responseText,
          };
          resolve(response);
        } else {
          reject(new Error(`HTTP error! Status: ${this.status}`));
        }
      }
    };

    xhr.send("");
  });
}
