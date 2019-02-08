function loadJSON(file,callback) {
  var data=new XMLHttpRequest();
  data.overrideMimeType("application/json");
  data.open("GET",file,true);
  data.onreadystatechange=function() {
    if (data.readyState===4 && data.status=="200") {
      callback(data.responseText);
    }
  }
  data.send(null);
}
loadJSON("data.json",function(text) {
  var res=JSON.parse(text);
  console.log(res);
  personal(res.personalDetails);
  career(res.CAREEROBJECTIVE);
  education(res.edu1);
    achieve(res.ACHEIVEMENTS);
    hobby(res.HOBBIES);

});
var main=document.querySelector(".main");
let left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);

function personal(details) {

  let left=document.createElement("div");
  left.classList.add("left");
  main.appendChild(left);

  let left1=document.createElement("div");
  left1.classList.add("left1");
  left.appendChild(left1);

  let image=document.createElement("img");
  image.src=details.image;
  left1.appendChild(image);

 let myname=document.createElement("h3");
 myname.textContent=details.myname;
 left1.appendChild(myname);

 let designation=document.createElement("h3");
 designation.textContent=details.designation;
 left1.appendChild(designation);

 let left2=document.createElement("div");
 left2.classList.add("left2");
 left.appendChild(left2);

 let fname=document.createElement("h4");
 fname.textContent=details.fname;
 left2.appendChild(fname);

 let email=document.createElement("h5");
 email.textContent=details.email;
 left2.appendChild(email);

 let phoneno=document.createElement("p");
 phoneno.textContent=details.phoneno;
 left2.appendChild(phoneno);

 let address=document.createElement("h2");
 address.textContent=details.address;
 left2.appendChild(address);
}
var right=document.createElement("div");
right.classList.add("right");

main.appendChild(right);

 function career(details){

   let careerObj=document.createElement("h2");
careerObj.textContent=details.obj;
  right.appendChild(careerObj);
careerObj.appendChild(document.createElement("hr"));

  let content=document.createElement("h2");
  content.textContent=details.co;
  careerObj.appendChild(content);
}

function education(detaills2){
  let educat=document.createElement("h2");
  educat.textContent="EDUCATIONDETAILAS";
  right.appendChild(educat);

educat.appendChild(document.createElement("hr"));

  for (i in detaills2){
 let educate=document.createElement("h2");
 educate.textContent=detaills2[i].qualification;
 right.appendChild(educate);
 let edu2=document.createElement("h2");
 edu2.textContent=detaills2[i].inst;
 educate.appendChild(edu2);
}
}


function achieve(detaills){
 let ach=document.createElement("h2");
 ach.textContent=detaills.awdname;
 right.appendChild(ach);

 ach.appendChild(document.createElement("hr"));

right.appendChild(ach);
 let award=document.createElement("h2");
 award.textContent=detaills.achive;
 ach.appendChild(award);
}

function hobby(detaills){
 let hob=document.createElement("h2");
 hob.textContent=detaills.hobbiesName;
 right.appendChild(hob);

 hob.appendChild(document.createElement("hr"));

right.appendChild(hob);
 let hobb=document.createElement("h2");
 hobb.textContent=detaills.hobbie;
 hob.appendChild(hobb);
}
