let cart = JSON.parse(localStorage.getItem('cart')) || [];
const display = (data) => {
	document.getElementById('main').innerHTML = "";
	data.map((e,i) => {
		let div = document.createElement('div');
		div.setAttribute('id', 'divv');
		div.style.padding="20px"

		let img1 = document.createElement('img');
		img1.src = e.img1;
        img1.setAttribute('id','img1');
    
		let p1 = document.createElement('p');
		p1.textContent = e.name;
        p1.id="p1";

       let p2 = document.createElement('p');
	   p2.textContent ="Rating "+ e.rating;
       p2.id="p2";

	  let p3 = document.createElement('input');
	  p3.setAttribute("type","text");
	  p3.setAttribute("value",e.qty)
	  p3.setAttribute("id","quant");

	  let p4=document.createElement('h4');
	  p4.innerText="Qty. ";
	  p4.setAttribute("id","quantity");

     let incr =document.createElement('button');
	 incr.innerText="+";
	 incr.setAttribute("id","addbtn");
	 console.log(e.qty);

	 incr.addEventListener("click", function () {
	 let incrqty=e.qty;
	 incrqty++;
	 e.qty=incrqty;
	 document.getElementById("quant").value=e.qty;
	 localStorage.setItem("cart", JSON.stringify(cart));
	 window.location.href="./cart.html"
	  });

	  let decr =document.createElement('button');
	  decr.innerText="-";
	  decr.setAttribute("id","lessbtn");
	  console.log(e.qty);
	  decr.addEventListener("click", function () {
		if(e.qty>1)
		{

			let decrqty=e.qty;
			decrqty--;
			e.qty=decrqty;
			document.getElementById("quant").value=e.qty;
			localStorage.setItem("cart", JSON.stringify(cart));
			window.location.href="./cart.html"
		}
		});




		let price = document.createElement('h4');
		price.textContent ="Price:-"+" "+"₹"+ e.price*e.qty;
        price.id="prprice";

		
		let button = document.createElement('button');
		button.textContent = 'Remove';
		button.setAttribute('class', 'remove');
		button.addEventListener('click', () => {
		     deletItem(i)
			window.location.href="./cart.html"

		});

		div.append(img1,p1,p2,price,p4,incr,p3,decr,button);

		document.getElementById('main').append(div);
	});
};

display(cart);


const deletItem = (i)=>{
    cart.splice(i,1);
	localStorage.setItem('cart', JSON.stringify(cart));
    //display(cartItem)
}
document.querySelector("#promoapply").addEventListener("click",function(){
	let code=document.getElementById("promobox").value;
	console.log(code);
	if(code=="nykaa50"){
    console.log("Applied");
	document.querySelector("#promotrue1").innerText="Discount"
	document.querySelector("#promotrue2").innerText="-₹"+totalPrice()/2;
	document.querySelector("#promostatus").innerText="Yay!!! You got 50% Discount..."
	promostatus.style.color="green";
	document.querySelector("#hhh").innerText="₹"+(totalPrice()-totalPrice()/2);
	localStorage.setItem("finalPrice",totalPrice()-totalPrice()/2);
	}else{
		console.log("Not Correct");
		document.querySelector("#promostatus").innerText="Invalid Promo Code!!!";
		promostatus.style.color="red";
		document.querySelector("#promotrue1").innerText=""
	document.querySelector("#promotrue2").innerText="";
		document.querySelector("#hhh").innerText="₹"+totalPrice();
		localStorage.setItem("finalPrice",totalPrice());
		}
})
function totalPrice(){
	let price=cart.reduce(function(acc,e){
        return acc+e.price*e.qty;
	},0)
	return price;
}
localStorage.setItem("finalPrice",totalPrice());
document.querySelector("#p2p").innerText="₹"+totalPrice();
document.querySelector("#hhh").innerText="₹"+totalPrice()

