import { getWeather } from "./weather.js";
import { getAtmosphere } from "./weather.js";
import { get_score } from "./algorithm.js";

export function getAddress(place1, place2, place3) {
  // address.json 파일 로드

  fetch("address.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // 데이터를 처리하는 함수 호출
      createAddressList(data, [place1, place2, place3]);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
  startAtmosphereAPI();
}
var PMList = [];
var nameList = [];

async function startAtmosphereAPI() {
  var firstSelect_1 = document.getElementById("mySelect1");
  var firstSelect_2 = document.getElementById("mySelect2");
  var firstSelect_3 = document.getElementById("mySelect3");
  var atmPlace1;
  var atmPlace2;
  var atmPlace3;

  if (firstSelect_1.value == "서울특별시") {
    atmPlace1 = "서울";
  } else if (firstSelect_1.value == "부산광역시") {
    atmPlace1 = "부산";
  } else if (firstSelect_1.value == "대구광역시") {
    atmPlace1 = "대구";
  } else if (firstSelect_1.value == "인천광역시") {
    atmPlace1 = "인천";
  } else if (firstSelect_1.value == "대전광역시") {
    atmPlace1 = "대전";
  } else if (firstSelect_1.value == "울산광역시") {
    atmPlace1 = "울산";
  } else if (firstSelect_1.value == "광주광역시") {
    atmPlace1 = "광주";
  } else if (firstSelect_1.value == "세종특별자치시") {
    atmPlace1 = "세종";
  } else if (firstSelect_1.value == "경기도") {
    atmPlace1 = "경기";
  } else if (firstSelect_1.value == "강원도") {
    atmPlace1 = "강원";
  } else if (firstSelect_1.value == "충청북도") {
    atmPlace1 = "충북";
  } else if (firstSelect_1.value == "충청남도") {
    atmPlace1 = "충남";
  } else if (firstSelect_1.value == "전라북도") {
    atmPlace1 = "전북";
  } else if (firstSelect_1.value == "전라남도") {
    atmPlace1 = "전남";
  } else if (firstSelect_1.value == "경상북도") {
    atmPlace1 = "경북";
  } else if (firstSelect_1.value == "경상남도") {
    atmPlace1 = "경남";
  } else if (firstSelect_1.value == "제주특별자치도") {
    atmPlace1 = "제주";
  }
  if (firstSelect_2.value == "서울특별시") {
    atmPlace2 = "서울";
  } else if (firstSelect_2.value == "부산광역시") {
    atmPlace2 = "부산";
  } else if (firstSelect_2.value == "대구광역시") {
    atmPlace2 = "대구";
  } else if (firstSelect_2.value == "인천광역시") {
    atmPlace2 = "인천";
  } else if (firstSelect_2.value == "대전광역시") {
    atmPlace2 = "대전";
  } else if (firstSelect_2.value == "울산광역시") {
    atmPlace2 = "울산";
  } else if (firstSelect_2.value == "광주광역시") {
    atmPlace2 = "광주";
  } else if (firstSelect_2.value == "세종특별자치시") {
    atmPlace2 = "세종";
  } else if (firstSelect_2.value == "경기도") {
    atmPlace2 = "경기";
  } else if (firstSelect_2.value == "강원도") {
    atmPlace2 = "강원";
  } else if (firstSelect_2.value == "충청북도") {
    atmPlace2 = "충북";
  } else if (firstSelect_2.value == "충청남도") {
    atmPlace2 = "충남";
  } else if (firstSelect_2.value == "전라북도") {
    atmPlace2 = "전북";
  } else if (firstSelect_2.value == "전라남도") {
    atmPlace2 = "전남";
  } else if (firstSelect_2.value == "경상북도") {
    atmPlace2 = "경북";
  } else if (firstSelect_2.value == "경상남도") {
    atmPlace2 = "경남";
  } else if (firstSelect_2.value == "제주특별자치도") {
    atmPlace2 = "제주";
  }
  if (firstSelect_3.value == "서울특별시") {
    atmPlace3 = "서울";
  } else if (firstSelect_3.value == "부산광역시") {
    atmPlace3 = "부산";
  } else if (firstSelect_3.value == "대구광역시") {
    atmPlace3 = "대구";
  } else if (firstSelect_3.value == "인천광역시") {
    atmPlace3 = "인천";
  } else if (firstSelect_3.value == "대전광역시") {
    atmPlace3 = "대전";
  } else if (firstSelect_3.value == "울산광역시") {
    atmPlace3 = "울산";
  } else if (firstSelect_3.value == "광주광역시") {
    atmPlace3 = "광주";
  } else if (firstSelect_3.value == "세종특별자치시") {
    atmPlace3 = "세종";
  } else if (firstSelect_3.value == "경기도") {
    atmPlace3 = "경기";
  } else if (firstSelect_3.value == "강원도") {
    atmPlace3 = "강원";
  } else if (firstSelect_3.value == "충청북도") {
    atmPlace3 = "충북";
  } else if (firstSelect_3.value == "충청남도") {
    atmPlace3 = "충남";
  } else if (firstSelect_3.value == "전라북도") {
    atmPlace3 = "전북";
  } else if (firstSelect_3.value == "전라남도") {
    atmPlace3 = "전남";
  } else if (firstSelect_3.value == "경상북도") {
    atmPlace3 = "경북";
  } else if (firstSelect_3.value == "경상남도") {
    atmPlace3 = "경남";
  } else if (firstSelect_3.value == "제주특별자치도") {
    atmPlace3 = "제주";
  }

  try {
    var totalList = [];
    var atmResult1 = await getAtmosphere(atmPlace1);
    var atmResult2 = await getAtmosphere(atmPlace2);
    var atmResult3 = await getAtmosphere(atmPlace3);

    var b = JSON.parse(atmResult1.body);
    var c = JSON.parse(atmResult2.body);
    var d = JSON.parse(atmResult3.body);

    var cal1 = 0;
    var cal2 = 0;
    var cal3 = 0;
    for (var i = 0; i < b.response.body.items.length; i++) {
      if (!isNaN(b.response.body.items[i].pm25Value)) {
        cal1 += parseFloat(b.response.body.items[i].pm25Value);
      }
    }
    for (var i = 0; i < c.response.body.items.length; i++) {
      if (!isNaN(c.response.body.items[i].pm25Value)) {
        cal2 += parseFloat(c.response.body.items[i].pm25Value);
      }
    }
    for (var i = 0; i < d.response.body.items.length; i++) {
      if (!isNaN(d.response.body.items[i].pm25Value)) {
        cal3 += parseFloat(d.response.body.items[i].pm25Value);
      }
    }

    totalList.push(cal1 / b.response.body.items.length);
    totalList.push(cal2 / c.response.body.items.length);
    totalList.push(cal3 / d.response.body.items.length);

    for (var k = 0; k < list.length; k++) {
      if (categoryList[k] == firstSelect_1.value) {
        PMList.push(totalList[0]);
      } else if (categoryList[k] == firstSelect_2.value) {
        PMList.push(totalList[1]);
      } else if (categoryList[k] == firstSelect_3.value) {
        PMList.push(totalList[2]);
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

var preferScore = [];
var list = [];
var categoryList = [];
async function createAddressList(data, List) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].category == List[0]) {
      preferScore.push(1);
      categoryList.push(List[0]);
      nameList.push(data[i].name);
      var obj = data[i].address;
      list.push(obj);
    } else if (data[i].category == List[1]) {
      preferScore.push(2);
      categoryList.push(List[1]);
      nameList.push(data[i].name);
      var obj = data[i].address;
      list.push(obj);
    } else if (data[i].category == List[2]) {
      preferScore.push(3);
      categoryList.push(List[2]);
      nameList.push(data[i].name);
      var obj = data[i].address;
      list.push(obj);
    }
  }

  var xList = [];
  var yList = [];
  try {
    for (var i = 0; i < list.length; i++) {
      var result = await getXY(list[i]);
      if (result.documents[0].road_address == null) {
        xList.push(result.documents[0].x);
        yList.push(result.documents[0].y);
      } else {
        xList.push(result.documents[0].road_address.x);
        yList.push(result.documents[0].road_address.y);
      }
    }
    changeXY(xList, yList);
    // xyList를 원하는 대로 처리합니다.
  } catch (error) {
    console.log("Error:", error);
  }
}

var xList_2 = [];
var yList_2 = [];
async function changeXY(xl, yl) {
  var changedXYlist = [];

  for (var i = 0; i < xl.length; i++) {
    var res = dfs_xy_conv(yl[i], xl[i]);

    changedXYlist.push(res);
  }

  for (var i = 0; i < changedXYlist.length; i++) {
    xList_2.push(changedXYlist[i].x);
    yList_2.push(changedXYlist[i].y);
  }
  startWeatherAPi(xList_2, yList_2);
}

function dfs_xy_conv(v1, v2) {
  var RE = 6371.00877; // 지구 반경(km)
  var GRID = 5.0; // 격자 간격(km)
  var SLAT1 = 30.0; // 투영 위도1(degree)
  var SLAT2 = 60.0; // 투영 위도2(degree)
  var OLON = 126.0; // 기준점 경도(degree)
  var OLAT = 38.0; // 기준점 위도(degree)
  var XO = 43; // 기준점 X좌표(GRID)
  var YO = 136; // 기1준점 Y좌표(GRID)

  var DEGRAD = Math.PI / 180.0;
  var RADDEG = 180.0 / Math.PI;

  var re = RE / GRID;
  var slat1 = SLAT1 * DEGRAD;
  var slat2 = SLAT2 * DEGRAD;
  var olon = OLON * DEGRAD;
  var olat = OLAT * DEGRAD;

  var sn =
    Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
    Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
  var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);
  var rs = {};

  rs["lat"] = v1;
  rs["lng"] = v2;
  var ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
  ra = (re * sf) / Math.pow(ra, sn);
  var theta = v2 * DEGRAD - olon;
  if (theta > Math.PI) theta -= 2.0 * Math.PI;
  if (theta < -Math.PI) theta += 2.0 * Math.PI;
  theta *= sn;
  rs["x"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
  rs["y"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
  return rs;
}

var popList = [];
var rehList = [];
var wsdList = [];

async function startWeatherAPi(xlist, ylist) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  var currentDay = ("0" + currentDate.getDate()).slice(-2);
  var today = currentYear + currentMonth + currentDay;
  var selectedDate; // 선택한 날짜를 저장할 변수
  var selectedTime;
  var dateInput = document.getElementById("date");
  selectedDate = dateInput.value;
  var formattedDate = selectedDate.replace(/-/g, "");
  var timeInput = document.getElementById("select");
  selectedTime = timeInput.value;
  var formatSelectedTime = selectedTime.replace(":", "");
  var formattedTime;
  if (
    selectedTime == "09:00" ||
    selectedTime == "10:00" ||
    selectedTime == "11:00"
  ) {
    formattedTime = "0800";
  } else if (
    selectedTime == "12:00" ||
    selectedTime == "13:00" ||
    selectedTime == "14:00"
  ) {
    formattedTime = "1100";
  } else if (
    selectedTime == "15:00" ||
    selectedTime == "16:00" ||
    selectedTime == "17:00"
  ) {
    formattedTime = "1400";
  } else {
    formattedTime = "1700";
  }

  try {
    var weatherResultList = [];

    for (var i = 0; i < xlist.length; i++) {
      var weatherResult = await getWeather(
        today,
        formattedTime,
        xlist[i],
        ylist[i]
      );

      var a = JSON.parse(weatherResult.body);

      for (var j = 0; j < a.response.body.items.item.length; j++) {
        if (
          a.response.body.items.item[j].fcstDate == formattedDate &&
          a.response.body.items.item[j].fcstTime == formatSelectedTime
        ) {
          weatherResultList.push(a.response.body.items.item[j]);
          if (a.response.body.items.item[j].category == "POP") {
            popList.push(parseFloat(a.response.body.items.item[j].fcstValue));
          }
          if (a.response.body.items.item[j].category == "REH") {
            rehList.push(parseFloat(a.response.body.items.item[j].fcstValue));
          }
          if (a.response.body.items.item[j].category == "WSD") {
            wsdList.push(parseFloat(a.response.body.items.item[j].fcstValue));
          }
        }
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }

  toAlgorithm(popList, rehList, wsdList, PMList, preferScore);
}

export default async function getXY(addr) {
  try {
    var response = await $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v2/local/search/address.json",
      data: {
        query: addr,
      },
      headers: {
        Authorization: "KakaoAK 2b9c7489bb08f6b15ce14988795fc1be",
      },
    });
    return response; // 결과값 반환
  } catch (error) {
    throw error; // 에러 발생시 예외 처리
  }
}

var top5List = [];
var scoreList = [];
export function toAlgorithm(pl, rl, wl, pml, pr) {
  for (var i = 0; i < list.length; i++) {
    var re = get_score(pl[i], rl[i], wl[i], pml[i], pr[i]);
    scoreList.push(re);
  }
  var ind = getTop5Indices(scoreList);
  for (var j = 0; j < ind.length; j++) {
    top5List.push(nameList[ind[j]]);
  }
  showResult(top5List);
}

export function getTop5Indices(list) {
  // 리스트의 길이가 5 미만인 경우 리스트의 전체 길이를 사용합니다.
  const length = Math.min(5, list.length);

  // 상위 5개 값의 인덱스를 저장할 배열
  const top5Indices = [];

  // 리스트를 순회하며 상위 값의 인덱스를 찾습니다.
  for (let i = 0; i < length; i++) {
    let maxIndex = 0;
    let maxValue = list[0];

    for (let j = 1; j < list.length; j++) {
      if (list[j] > maxValue) {
        maxValue = list[j];
        maxIndex = j;
      }
    }

    // 최댓값을 찾은 인덱스를 결과 배열에 추가하고 해당 값을 -Infinity로 변경하여 다음 최댓값을 찾을 때 영향을 주지 않도록 합니다.
    top5Indices.push(maxIndex);
    list[maxIndex] = -Infinity;
  }

  return top5Indices;
}

export function showResult(li) {
  const resultPart = document.getElementById("resultPart");

  // 기존 내용을 초기화
  resultPart.innerHTML = "";

  // 상위 5개 값을 출력
  for (let i = 0; i < Math.min(5, li.length); i++) {
    const value = li[i];
    const paragraph = document.createElement("p");
    paragraph.textContent = `${i + 1}순위: ${value}`;
    resultPart.appendChild(paragraph);
  }
}
