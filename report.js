document.querySelector("form").addEventListener("submit", report);
function report() {
  event.preventDefault();
  var image = document.querySelector("#image").value;
  var stuName = document.querySelector("#name").value;
  var batch = document.querySelector("#batch").value;
  var dsa = document.querySelector("#dsa").value;
  var skill = document.querySelector("#cs").value;
  var coding = document.querySelector("#coding").value;
  console.log(image, stuName, batch, dsa, skill, coding);

  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var img = document.createElement("img");
  img.src = image;
  td1.append(img);
  var td2 = document.createElement("td");
  td2.innerText = stuName;
  var td3 = document.createElement("td");
  td3.innerText = batch;
  var td4 = document.createElement("td");
  td4.innerText = dsa;
  var td5 = document.createElement("td");
  td5.innerText = skill;
  var td6 = document.createElement("td");
  td6.innerText = coding;
  var td7 = document.createElement("td");
  td7.innerText = Math.floor(((+coding + +dsa + +skill) / 30) * 100);
  var td8 = document.createElement("td");
  if (((+coding + +dsa + +skill) / 30) * 100 < 50) {
    td8.innerText = "Async";
    td8.style.backgroundColor = "red";
  } else {
    td8.innerText = "Regular";
    td8.style.backgroundColor = "green";
  }
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
  document.querySelector("tbody").append(tr);
}
   