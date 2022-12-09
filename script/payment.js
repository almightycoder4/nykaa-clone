var paymentArrs=JSON.parse(localStorage.getItem('payments')) || [];
document.getElementById('form').addEventListener('submit',paymentss);

function paymentss(e){
e.preventDefault();
var cardNumber=document.getElementById('cardNumber').value;
var expiry=document.getElementById('expiry').value;
var cvv=document.getElementById('cvv').value;

var objs={};
objs.cardNumber=cardNumber;
objs.expiry=expiry;
objs.cvv=cvv;


paymentArrs.push(objs);

console.log(paymentArrs);

localStorage.setItem('payments',JSON.stringify(paymentArrs));

window.open("otp.html","_self");
}




var infoArr=JSON.parse(localStorage.getItem("infoList"))||[];
displayData(infoArr);

  function displayData(infoArr){
    infoArr.map(function(el){
        // el.preventDefault();
    //   var div=document.createElement("div");
    //   div.style.border="solid red";
     

      var i1=document.createElement("p");
      i1.innerText="Name:- "+el.name;
      i1.style.fontFamily="Arial, Helvetica, sans-serif";
      i1.style.letterSpacing="1px";

      var i=document.createElement("p");
      i.innerText=el.name;
      i.style.fontFamily="Arial, Helvetica, sans-serif";
      i.style.marginTop="1%";
      i.style.letterSpacing="1px";

      var i2=document.createElement("p");
      i2.innerText="Address:- "+el.Adrs;
      i2.style.fontFamily="Arial, Helvetica, sans-serif";
      i2.style.marginTop="-2%";

      var i3=document.createElement("p");
      i3.innerText="City:- "+el.city;
      i3.style.fontFamily="Arial, Helvetica, sans-serif";
      i3.style.letterSpacing="1px";
      i3.style.marginTop="-3%";

      var i4=document.createElement("p");
      i4.innerText="State:- "+el.state;
      i4.style.fontFamily="Arial, Helvetica, sans-serif";
      i4.style.letterSpacing="1px";
      i4.style.marginTop="-3%";

      var i5=document.createElement("p");
      i5.innerText="Pincode:- "+el.pincode;
      i5.style.fontFamily="Arial, Helvetica, sans-serif";
      i5.style.letterSpacing="1px";
      i5.style.marginTop="-3%";


    //   var ii=document.createElement("p");
    //   ii.innerText=","+el.pincode;
    //   ii.style.fontFamily="Arial, Helvetica, sans-serif";
    //   ii.style.letterSpacing="1px";
    //   ii.style.marginTop="-3%";

      var i6=document.createElement("p");
      i6.innerText="Phone:- "+el.phones;
      i6.style.fontFamily="Arial, Helvetica, sans-serif";
      i6.style.letterSpacing="1px";
      i6.style.marginTop="-3%";

    //   console.log(hello);
      document.getElementById("fetchAddress").append(i1,i2,i3,i5,i4,i6);
      document.getElementById('p8').append(i,);
    //   document.getElementById("fetchAddress").append(div);
      localStorage.removeItem("infoList");
    });
    
    
}




let finalPrice=localStorage.getItem("finalPrice");
console.log(finalPrice);
// display(finalPrice);

let cart=JSON.parse(localStorage.getItem("cart"));
document.querySelector("#p9").innerText="₹ "+finalPrice;
document.querySelector("#p2p").innerText="₹ "+finalPrice;
document.querySelector("#hhh").innerText="₹ "+finalPrice;
document.querySelector("#p7").innerText=cart.length+" Items";

let subMenu=document.getElementById('subMenu');

function toggleMenu(){
  subMenu.classList.toggle("open-menu");
}



let subMenus=document.getElementById('subMenus');

function toggleMenus(){
  subMenus.classList.toggle("open-menu");
  subMenus.style.borderBottomColor="white";
}

