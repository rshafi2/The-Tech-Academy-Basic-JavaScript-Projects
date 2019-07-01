$(document).ready(function(){
		$(".tablehead").click(function(){
			$(this).next("div").slideToggle("slow");
		});
	});

function invoice() {
	


// SIZE SELECTION 

	var size = document.querySelector('input[name=size]:checked').value; 

	var basePrice = 0;

	if (size === "Personal") {
		basePrice = 6;
	}
	else if (size === "Medium") {
		basePrice = 10;
	}
	else if (size === "Large") {
		basePrice = 14;
	}
	else if (size === "Extra-Large")  {
		basePrice = 16;
	}

// END OF SIZE SELECTION





// CHEESE SELECTION 


	var cheese = document.querySelector('input[name="cheese"]:checked').value; 

	var cheesePrice = 0;

	if (cheese === "Extra") 
	{	
		cheesePrice = 3;
	} 

	else if (cheese === "Regular") 
	{ 
		cheesePrice = 2; 
	}

	else if (cheese === "No")
	{
		cheesePrice = 0; 
	}; 

// END OF CHEESE SELECTION 





// CRUST SELECTION 
	var crust = document.querySelector('input[name="crust"]:checked').value; 

	var crustPrice = 0; 
	if (crust==="Cheese-Stuffed") 
	{
		crustPrice = 3;
	}; 

// END OF CRUST SELECTION




	
// SAUCE SELECTION 

	var sauce = document.querySelector('input[name="sauce"]:checked').value; 

// END OF SAUCE SELECTION 



	
// MEAT SELECTION 
	
//var meat = document.querySelector('input[name="meat"]:checked').value; 
var meatPrice = 0; 
var meatSelected = []; 
var meatDisplay = "";
var meatArray = document.getElementsByName("meat"); 

for (var i = 0; i < meatArray.length; i++) { 
	if (meatArray[i].checked) { 
		meatSelected.push(meatArray[i].value); 
	}
}

var meatCount = meatSelected.length; 
if (meatCount > 1) { 
	meatPrice = (meatCount - 1); 
} else { 
	meatPrice = 0; 
}  


if (meatSelected.length === 1) {
	meatDisplay = meatSelected[0];
} else if (meatSelected.length > 1) {
	for (i=0; i < meatSelected.length; i++) {
		meatDisplay += meatSelected[i];
		if (i < (meatSelected.length - 1)) {
			meatDisplay += ", ";
		};
	};
};
if (meatSelected.length === 0) {
	meatDisplay = "No Meat Selected";
};


// END OF MEAT SELECTION 


// VEGGIE SELECTION 
	var vegPrice = 0;
	var veg = document.getElementsByName("veg");
	var vegSelect = [];
	var vegDisplay = "";
	for (var i = 0; i<veg.length; i++) {
		if (veg[i].checked) {
			vegSelect.push(veg[i].value);
		};
	}; 
	var vegCount = vegSelect.length; 
	if (vegCount > 1) { 
		vegPrice = (vegCount - 1); 
	} else { 
		vegPrice = 0; 
	}  
	/*if (vegSelect.length > 1) {
		vegPrice = 1;
	};*/ 

	
	if (vegSelect.length === 1) {
		vegDisplay = vegSelect[0];
	} else if (vegSelect.length > 1) {
		for (i=0; i < vegSelect.length; i++) {
			vegDisplay += vegSelect[i];
			if (i < (vegSelect.length - 1)) {
				vegDisplay += ", ";
			};
		};
	};
	if (vegSelect.length === 0) {
		vegDisplay = "No Vegetables";
	}


// END OF VEGGIE SELECTION 
	



// CALCULATION 
	var totalPrice = (vegPrice + meatPrice + crustPrice + cheesePrice + basePrice);



// INVOICE TABLE
	$("#size").html(size+" Pizza");
	$("#sizeprice").html(" $"+basePrice+".00");
	$("#crust").html(crust+" Crust");
	$("#crustprice").html("+"+crustPrice+".00");
	$("#cheese").html(cheese+" Cheese");
	$("#cheeseprice").html("+"+cheesePrice+".00");
	$("#sauce").html(sauce+" Sauce");
	$("#sauceprice").html("+0.00");
	$("#meat").html(meatDisplay);
	$("#meatprice").html("+"+meatPrice+".00");
	$("#veg").html(vegDisplay);
	$("#vegprice").html("+"+vegPrice+".00");
	$("#totalprice").html(" $"+totalPrice+".00");
	
	
	
};
