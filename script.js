// Create array of product objects
var products = [
	{
		name       : "BeastMode Bull",
		description: "Lorem ipsum dolor sit amet",
		price      : 19.99,
		imageurl   : "./img/happyMom.jpg",
		quantity   : 8
	},
	
	{
		name       : "Beast Max",
		description: "Lorem ipsum dolor sit amet",
		price      : 24.99,
		imageurl   : "./img/happyMom.jpg",
		quantity   : 13
	},

	{
		name       : "Whole Beast",
		description: "Lorem ipsum dolor sit amet",
		price      : 40.99,
		imageurl   : "./img/happyMom.jpg",
		quantity   : 32
	},

	{
		name       : "BeastMode Bull",
		description: "Lorem ipsum dolor sit amet",
		price      : 19.99,
		imageurl   : "./img/happyMom.jpg",
		quantity   : 8
	},

	{
		name       : "Strong Beast",
		description: "Lorem ipsum dolor sit amet",
		price      : 65.99,
		imageurl   : "./img/happyMom.jpg",
		quantity   : 5
	},

	{
		name       : "Mode Body",
		description: "Lorem ipsum dolor sit amet",
		price      : 59.99,
		imageurl   : "./img/happyMom.jpg",
		quantity   : 70
	},

	{
		name       : "Mode Face",
		description: "Lorem ipsum dolor sit amet",
		price      : 28.99,
		imageurl   : "./img/happyMom.jpg",
		quantity   : 18
	},

	{
		name       : "Mode Mask",
		description: "Lorem ipsum dolor sit amet",
		price      : 52.99,
		imageurl   : "./img/happyMom.jpg",
		quantity   : 43
	},

	{
		name       : "Mode Moisture",
		description: "Lorem ipsum dolor sit amet",
		price      : 36.99,
		imageurl   : "./img/happyMom.jpg",
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