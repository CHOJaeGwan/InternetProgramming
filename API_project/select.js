import { getAddress } from "./address.js";

// option 값 배열
var values = [
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "대전광역시",
  "울산광역시",
  "광주광역시",
  "세종특별자치시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];
var values1 = [
  "고양시",
  "광주시",
  "군포시",
  "김포시",
  "수원시",
  "용인시",
  "파주시",
  "성남시",
  "안산시",
  "남양주시",
  "양주시",
  "안성시",
  "시흥시",
  "이천시",
  "여주시",
  "동두천시",
  "퍙택시",
  "포천시",
  "하남시",
  "화성시",
  "가평군",
  "양평균",
  "연천군",
];
var values2 = [
  "강릉시",
  "동해시",
  "삼척시",
  "속초시",
  "원주시",
  "춘천시",
  "태백시",
  "영월군",
  "고성군",
  "양양군",
  "정선군",
  "철원군",
  "평창군",
  "홍천군",
  "횡성군",
];
var values3 = [
  "제천시",
  "청주시",
  "충주시",
  "단양군",
  "보은군",
  "영동군",
  "음성군",
  "증평군",
  "진천군",
];
var values4 = [
  "계룡시",
  "공주시",
  "논산시",
  "당진시",
  "보령시",
  "서산시",
  "아산시",
  "천안시",
  "금선군",
  "부여군",
  "태안군",
];
var values5 = [
  "익산시",
  "군산시",
  "정읍시",
  "김제시",
  "남원시",
  "고창군",
  "순창군",
  "임실군",
  "완주군",
  "무주군",
  "진안군",
  "장수군",
];
var values6 = [
  "여수시",
  "순천시",
  "광양시",
  "나주시",
  "장흥군",
  "함평군",
  "화순군",
  "해남군",
  "영광군",
  "장성군",
  "담양군",
  "곡성군",
  "영암군",
  "강진군",
  "무안군",
  "보성군",
];
var values7 = [
  "경산시",
  "경주시",
  "구미시",
  "김천시",
  "문경시",
  "상주시",
  "안동시",
  "영천시",
  "포항시",
  "고령군",
  "군위군",
  "영덕군",
  "예천군",
  "의성군",
  "청도군",
  "칠곡군",
];
var values8 = [
  "거제시",
  "김해시",
  "밀양시",
  "사천시",
  "양산시",
  "진주시",
  "창원시",
  "통영시",
  "거창군",
  "고성군",
  "남해군",
  "의령군",
  "창녕군",
  "함안군",
  "함양군",
  "합천군",
];
var values9 = ["서귀포시", "제주시"];

var times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

// select 요소 생성
var selectTime = document.getElementById("select");

// 옵션 추가
for (var i = 0; i < times.length; i++) {
  var option = document.createElement("option");
  option.value = times[i];
  option.text = times[i];
  selectTime.appendChild(option);
}

var select = document.getElementById("mySelect1");
// option 요소 추가
for (var i = 0; i < values.length; i++) {
  var option = document.createElement("option");
  option.value = values[i];
  option.text = values[i];
  select.appendChild(option);
}

var select = document.getElementById("mySelect2");
// option 요소 추가
for (var i = 0; i < values.length; i++) {
  var option = document.createElement("option");
  option.value = values[i];
  option.text = values[i];
  select.appendChild(option);
}

var select = document.getElementById("mySelect3");
// option 요소 추가
for (var i = 0; i < values.length; i++) {
  var option = document.createElement("option");
  option.value = values[i];
  option.text = values[i];
  select.appendChild(option);
}

var firstSelect_1 = document.getElementById("mySelect1");
var firstSelect_2 = document.getElementById("mySelect2");
var firstSelect_3 = document.getElementById("mySelect3");

// 두 번째 select 요소
var secondSelect_1 = document.getElementById("secondSelect1");
var secondSelect_2 = document.getElementById("secondSelect2");
var secondSelect_3 = document.getElementById("secondSelect3");

// 첫 번째 select 요소의 값이 변경되었을 때 호출되는 함수
firstSelect_1.addEventListener("change", function () {
  var selectedValue = firstSelect_1.value;

  // 두 번째 select 요소 보이기/감추기
  if (
    selectedValue == "경기도" ||
    selectedValue == "강원도" ||
    selectedValue == "충청북도" ||
    selectedValue == "충청남도" ||
    selectedValue == "전라북도" ||
    selectedValue == "전라남도" ||
    selectedValue == "경상북도" ||
    selectedValue == "경상남도" ||
    selectedValue == "제주특별자치도" ||
    selectedValue == ""
  ) {
    secondSelect_1.style.display = "block";
  } else {
    secondSelect_1.style.display = "none";
  }

  // 두 번째 select 요소의 옵션 설정
  setSecondSelectOptions_1(selectedValue);
});

firstSelect_2.addEventListener("change", function () {
  var selectedValue = firstSelect_2.value;

  // 두 번째 select 요소 보이기/감추기
  if (
    selectedValue == "경기도" ||
    selectedValue == "강원도" ||
    selectedValue == "충청북도" ||
    selectedValue == "충청남도" ||
    selectedValue == "전라북도" ||
    selectedValue == "전라남도" ||
    selectedValue == "경상북도" ||
    selectedValue == "경상남도" ||
    selectedValue == "제주특별자치도" ||
    selectedValue == ""
  ) {
    secondSelect_2.style.display = "block";
  } else {
    secondSelect_2.style.display = "none";
  }

  // 두 번째 select 요소의 옵션 설정
  setSecondSelectOptions_2(selectedValue);
});

firstSelect_3.addEventListener("change", function () {
  var selectedValue = firstSelect_3.value;

  // 두 번째 select 요소 보이기/감추기
  if (
    selectedValue == "경기도" ||
    selectedValue == "강원도" ||
    selectedValue == "충청북도" ||
    selectedValue == "충청남도" ||
    selectedValue == "전라북도" ||
    selectedValue == "전라남도" ||
    selectedValue == "경상북도" ||
    selectedValue == "경상남도" ||
    selectedValue == "제주특별자치도" ||
    selectedValue == ""
  ) {
    secondSelect_3.style.display = "block";
  } else {
    secondSelect_3.style.display = "none";
  }

  // 두 번째 select 요소의 옵션 설정
  setSecondSelectOptions_3(selectedValue);
});

function setSecondSelectOptions_1(selectedValue) {
  // 기존의 옵션 제거
  while (secondSelect_1.options.length > 0) {
    secondSelect_1.remove(0);
  }
  // option 요소 추가
  if (selectedValue == "경기도") {
    for (var i = 0; i < values1.length; i++) {
      var option = document.createElement("option");
      option.value = values1[i];
      option.text = values1[i];
      secondSelect_1.appendChild(option);
    }
  } else if (selectedValue == "강원도") {
    for (var i = 0; i < values2.length; i++) {
      var option = document.createElement("option");
      option.value = values2[i];
      option.text = values2[i];
      secondSelect_1.appendChild(option);
    }
  } else if (selectedValue == "충청북도") {
    for (var i = 0; i < values3.length; i++) {
      var option = document.createElement("option");
      option.value = values3[i];
      option.text = values3[i];
      secondSelect_1.appendChild(option);
    }
  } else if (selectedValue == "충청남도") {
    for (var i = 0; i < values4.length; i++) {
      var option = document.createElement("option");
      option.value = values4[i];
      option.text = values4[i];
      secondSelect_1.appendChild(option);
    }
  } else if (selectedValue == "전라북도") {
    for (var i = 0; i < values5.length; i++) {
      var option = document.createElement("option");
      option.value = values5[i];
      option.text = values5[i];
      secondSelect_1.appendChild(option);
    }
  } else if (selectedValue == "전라남도") {
    for (var i = 0; i < values6.length; i++) {
      var option = document.createElement("option");
      option.value = values6[i];
      option.text = values6[i];
      secondSelect_1.appendChild(option);
    }
  } else if (selectedValue == "경상북도") {
    for (var i = 0; i < values7.length; i++) {
      var option = document.createElement("option");
      option.value = values7[i];
      option.text = values7[i];
      secondSelect_1.appendChild(option);
    }
  } else if (selectedValue == "경상남도") {
    for (var i = 0; i < values8.length; i++) {
      var option = document.createElement("option");
      option.value = values8[i];
      option.text = values8[i];
      secondSelect_1.appendChild(option);
    }
  } else if (selectedValue == "제주특별자치도") {
    for (var i = 0; i < values9.length; i++) {
      var option = document.createElement("option");
      option.value = values9[i];
      option.text = values9[i];
      secondSelect_1.appendChild(option);
    }
  }
}

function setSecondSelectOptions_2(selectedValue) {
  // 기존의 옵션 제거
  while (secondSelect_2.options.length > 0) {
    secondSelect_2.remove(0);
  }
  // option 요소 추가
  if (selectedValue == "경기도") {
    for (var i = 0; i < values1.length; i++) {
      var option = document.createElement("option");
      option.value = values1[i];
      option.text = values1[i];
      secondSelect_2.appendChild(option);
    }
  } else if (selectedValue == "강원도") {
    for (var i = 0; i < values2.length; i++) {
      var option = document.createElement("option");
      option.value = values2[i];
      option.text = values2[i];
      secondSelect_2.appendChild(option);
    }
  } else if (selectedValue == "충청북도") {
    for (var i = 0; i < values3.length; i++) {
      var option = document.createElement("option");
      option.value = values3[i];
      option.text = values3[i];
      secondSelect_2.appendChild(option);
    }
  } else if (selectedValue == "충청남도") {
    for (var i = 0; i < values4.length; i++) {
      var option = document.createElement("option");
      option.value = values4[i];
      option.text = values4[i];
      secondSelect_2.appendChild(option);
    }
  } else if (selectedValue == "전라북도") {
    for (var i = 0; i < values5.length; i++) {
      var option = document.createElement("option");
      option.value = values5[i];
      option.text = values5[i];
      secondSelect_2.appendChild(option);
    }
  } else if (selectedValue == "전라남도") {
    for (var i = 0; i < values6.length; i++) {
      var option = document.createElement("option");
      option.value = values6[i];
      option.text = values6[i];
      secondSelect_2.appendChild(option);
    }
  } else if (selectedValue == "경상북도") {
    for (var i = 0; i < values7.length; i++) {
      var option = document.createElement("option");
      option.value = values7[i];
      option.text = values7[i];
      secondSelect_2.appendChild(option);
    }
  } else if (selectedValue == "경상남도") {
    for (var i = 0; i < values8.length; i++) {
      var option = document.createElement("option");
      option.value = values8[i];
      option.text = values8[i];
      secondSelect_2.appendChild(option);
    }
  } else if (selectedValue == "제주특별자치도") {
    for (var i = 0; i < values9.length; i++) {
      var option = document.createElement("option");
      option.value = values9[i];
      option.text = values9[i];
      secondSelect_2.appendChild(option);
    }
  }
}

function setSecondSelectOptions_3(selectedValue) {
  // 기존의 옵션 제거
  while (secondSelect_3.options.length > 0) {
    secondSelect_3.remove(0);
  }
  // option 요소 추가
  if (selectedValue == "경기도") {
    for (var i = 0; i < values1.length; i++) {
      var option = document.createElement("option");
      option.value = values1[i];
      option.text = values1[i];
      secondSelect_3.appendChild(option);
    }
  } else if (selectedValue == "강원도") {
    for (var i = 0; i < values2.length; i++) {
      var option = document.createElement("option");
      option.value = values2[i];
      option.text = values2[i];
      secondSelect_3.appendChild(option);
    }
  } else if (selectedValue == "충청북도") {
    for (var i = 0; i < values3.length; i++) {
      var option = document.createElement("option");
      option.value = values3[i];
      option.text = values3[i];
      secondSelect_3.appendChild(option);
    }
  } else if (selectedValue == "충청남도") {
    for (var i = 0; i < values4.length; i++) {
      var option = document.createElement("option");
      option.value = values4[i];
      option.text = values4[i];
      secondSelect_3.appendChild(option);
    }
  } else if (selectedValue == "전라북도") {
    for (var i = 0; i < values5.length; i++) {
      var option = document.createElement("option");
      option.value = values5[i];
      option.text = values5[i];
      secondSelect_3.appendChild(option);
    }
  } else if (selectedValue == "전라남도") {
    for (var i = 0; i < values6.length; i++) {
      var option = document.createElement("option");
      option.value = values6[i];
      option.text = values6[i];
      secondSelect_3.appendChild(option);
    }
  } else if (selectedValue == "경상북도") {
    for (var i = 0; i < values7.length; i++) {
      var option = document.createElement("option");
      option.value = values7[i];
      option.text = values7[i];
      secondSelect_3.appendChild(option);
    }
  } else if (selectedValue == "경상남도") {
    for (var i = 0; i < values8.length; i++) {
      var option = document.createElement("option");
      option.value = values8[i];
      option.text = values8[i];
      secondSelect_3.appendChild(option);
    }
  } else if (selectedValue == "제주특별자치도") {
    for (var i = 0; i < values9.length; i++) {
      var option = document.createElement("option");
      option.value = values9[i];
      option.text = values9[i];
      secondSelect_3.appendChild(option);
    }
  }
}

var dateInput = document.getElementById("date");

// 현재 날짜 설정
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
var currentDay = ("0" + currentDate.getDate()).slice(-2);
var today = currentYear + "-" + currentMonth + "-" + currentDay;

// 최소값과 최대값 설정
dateInput.min = today; // 최소값

var selectedPlace1;
var selectedPlace2;
var selectedPlace3;

window.saveDate = function () {
  console.log("start");
  if (secondSelect_1.value == "") {
    selectedPlace1 = firstSelect_1.value;
  } else {
    selectedPlace1 = secondSelect_1.value;
  }
  if (secondSelect_2.value == "") {
    selectedPlace2 = firstSelect_2.value;
  } else {
    selectedPlace2 = secondSelect_2.value;
  }
  if (secondSelect_3.value == "") {
    selectedPlace3 = firstSelect_3.value;
  } else {
    selectedPlace3 = secondSelect_3.value;
  }
  getAddress(selectedPlace1, selectedPlace2, selectedPlace3);
};
