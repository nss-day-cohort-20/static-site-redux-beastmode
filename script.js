// Create array of product objects
var products = [
	{
		name       : "BeastMode Bull Drink",
		description: "The most popular energy drink on the market today! After one drink, you will be ready to run with the bulls",
		price      : 19.99,
		imageurl   : "./img/energy-drink.jpg",
		quantity   : 8
	},
	
	{
		name       : "Beast Max Pre-Workout",
		description: "Our pre-workout mixer will have you feeling like a beast.",
		price      : 24.99,
		imageurl   : "./img/pre-workout.jpg",
		quantity   : 13
	},

	{
		name       : "Whole Beast Vitamin",
		description: "This vitamin makes you feel balanced and energized for the day!",
		price      : 40.99,
		imageurl   : "./img/vitamin.jpg",
		quantity   : 32
	},

	{
		name       : "Strong Beast Protein",
		description: "The most protein packed container on the market, you will be building muscle in no time!",
		price      : 65.99,
		imageurl   : "./img/protein.jpg",
		quantity   : 5
	},

	{
		name       : "Mode Body - bodywash",
		description: "Our body wash will have your skin feeling luxurious after any workout.",
		price      : 59.99,
		imageurl   : "./img/bodywash.jpg",
		quantity   : 70
	},

	{
		name       : "Mode Face - facewash",
		description: "The face-wash of champions. Will make your face the smoothest its ever been!",
		price      : 28.99,
		imageurl   : "./img/facewash.jpg",
		quantity   : 18
	},

	{
		name       : "Mode Mask",
		description: "Just what the Mode Face ordered! This mask calms and sooths the skin, or your money back!",
		price      : 52.99,
		imageurl   : "./img/facemask.jpg",
		quantity   : 43
	},

	{
		name       : "Mode Moisture",
		description: "Come see the softer side with Mode Moisture",
		price      : 36.99,
		imageurl   : "./img/moisture.jpg",
		quantity   : 23
	}
];

// console.log(products);

// Write procucts to products.html
// 
var productElement = document.getElementById("productGrid");

for (var i = 0; i < products.length; i++) {
	productElement.innerHTML += `<div class="productCard">
				 	<div class="productImage">
						<img src="${products[i].imageurl}">
					</div>
					<div class="productDetails">
						<p>${products[i].name}</p>
						<p>${products[i].description}</p>
						<p>${products[i].price}</p>
					</div>
				</div>`;
				console.log(productElement);
			};