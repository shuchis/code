function myFunc() {
  var t,q;

  // Get the value of the input field with id="q"
  q = document.getElementById("q").value;
    // Get the value of the input field with id="t"
  t = document.getElementById("t").value;

 //check if value is in tens or not
  var numbers = /[1-9][^1-9]/;
  if(!q.match(numbers))
  {
  alert('Your value must be in tens like 10 share, 20 shares');
  }

  // If x is Not a Number or less than one or greater than 10
  if (t == "" || isNaN(q)) {
    alert("Make sure you have filled both fields");
  } else {
      if(q < 10 || q > 100){
   alert("Quantity can't be less then 10 and more than 100");
 }

checkTickerAndDoMath(t,q);
}
}

function checkTickerAndDoMath(t,q){
	switch (t.toLowerCase()){
		case "wipro":
			var wipro_price = document.getElementById("wipro_price").innerHTML;
			alert(wipro_price * q);
			break;
		case "infy":
			var infy_price = document.getElementById("infy_price").innerHTML;
			alert(infy_price * q);
			break;
		case "techm":
			var techm_price = document.getElementById("techm_price").innerHTML;
			alert(techm_price * q);
			break;
		case "tcs":
			var tcs = document.getElementById("tcs_price").innerHTML;
			alert(tcs * q);
			break;
	}
	}

