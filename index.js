function load(file,callback){
loadJSON("data.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
  card1(data.card1);
  card2(data.card2);
});

var cards=document.querySelector(".cards");
console.log(cards);

function card1(details1) {
  let card=document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);
  let image=document.createElement("img");
  image.src=details1.image;
  image.alt="image";
  card.appendChild(image);
  var name=document.createElement("h1");
  name.textContent=details1.name;
  card.appendChild(name);
  var occ=document.createElement("h3");
  occ.textContent=details1.occ;
  card.appendChild(occ);
  var a=document.createElement("a");
  a.href="s.html";
  card.appendChild(a);
  var profile=document.createElement("h3");
  profile.textContent=details1.profile;
  a.appendChild(profile);
}
function card2(details2) {
  let card=document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);
  let image=document.createElement("img");
  image.src=details2.image;
  image.alt="image";
  card.appendChild(image);
  var name=document.createElement("h2");
  name.textContent=details2.name;
  card.appendChild(name);
  var occ=document.createElement("h3");
  occ.textContent=details2.occ;
  card.appendChild(occ);
  var a=document.createElement("a");
  a.href="";
  card.appendChild(a);
  var profile=document.createElement("h3");
  profile.textContent=details2.profile;
  a.appendChild(profile);
  var name=document.createElement("h1");
  name.textContent=details2.name;
  a.appendChild(name);
}
