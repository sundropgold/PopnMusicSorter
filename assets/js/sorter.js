$(document).ready(function(){

	// array of characters unsorted
	// var popnUnsorted = ["2st", "Albireo", "Black", "Chinatsu",
	// "DTO", "Eito", "Elenoa", "Fili", "Fuga", "Goku-Sotsu-Kun",
	// "Hiumi", "Izumi Ibuki", "Jade", "Kasuga Sakiko", "Maud",
	// "Meu Meu", "Miho", "Milk", "Mimi", "Minit's", "MZD", "Nia",
	// "Nyami", "Retsu", "Rinka", "Risette", "Roki", "Roku", "Ryuta",
	// "Shimotsuki Rin", "Smoke", "Sora Hoshino", "Sumire", "Usanuko",
	// "VENUS", "Yamagata Marika", "Yuli", "Zizz", "Akane", "Date Kyouya",
	// "Eclipse", "Harpya", "Gerhard", "Glutamine", "iO-Lower", "Jadeite",
	// "Kirishima Tsukasa", "Kiryu", "Lazuli", "Madoka", "Matsushita",
	// "Michiru", "Miyu", "Nicolas", "Phantom", "Ranma", "Rars", 
	// "Shinonome Kokona", "Shinonome Natsuhi", "Suiri", "Taiga",
	// "Takuto", "Toa", "Weiss", "Wolfgang", "Yuzuru"
	// ];

	// var popnUnsorted = [
	// 	{
	// 		name: "2st",
	// 		img:,
	// 		pts:

	// 	},
	// 	{
	// 		name:"Albireo",
	// 		img:,
	// 		pts:		
	// 	},
	// 	{
	// 		name:"Black",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Chinatsu",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"DTO",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Eito",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Elenoa",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Fili",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Fuga",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Goku-Sotsu-Kun",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Hiumi",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Izumi Ibuki",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Jade",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Kasuga Sakiko",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Maud",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Meu Meu",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Miho",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Milk",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Mimi",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Minit's",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"MZD",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Nia",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Nyami",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Retsu",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Rinka",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Risette",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Roki",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Roku",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Ryuta",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Shimotsuki Rin",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Smoke",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Sora Hoshino",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Sumire",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Usanuko",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"VENUS",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Yamagata Marika",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Yuli",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Zizz",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Akane",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Date Kyouya",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Eclipse",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Harpya",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Gerhard",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Glutamine",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"iO-Lower",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Jadeite",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Kirishima Tsukasa",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Kiryu",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Lazuli",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Madoka",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Matsushita",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Michiru",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Miyu",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Nicolas",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Phantom",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Ranma",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Rars",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Shinonome Kokona",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Shinonome Natsuhi",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Suiri",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Taiga",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Takuto",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Toa",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Weiss",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Wolfgang",
	// 		img:,
	// 		pts:
	// 	},
	// 	{
	// 		name:"Yuzuru",
	// 		img:,
	// 		pts:
	// 	},


	// ];

	$('#battle').hide();

	$('#herewego').on('click', function(){

		$('#battle').show();

		$('#text').hide();
	});

	var popnUnsorted = [
		{
			name: "retsu",
			pts:0
		},
		{
			name: "fuga",
			pts:0
		},
		{
			name:"hiumi",
			pts:0
		},
		{
			name:"rinka",
			pts:0
		}, 
		{
			name:"mzd",
			pts:0
		}
	];

	// SET UP VARS ///////////////////////////////////////

	var notSorted = true;

	// keep track of battle numbers
	var battle = 0;

	// how much percent sorted
	var percentSorted = 0;
	
	// SORT FUNCTIONS ////////////////////////////////////////

	var generateMatch = function(array){
		// function to generate random matches

		var r1 = Math.floor(Math.random() * popnUnsorted.length);
		var r2 = Math.floor(Math.random() * popnUnsorted.length);

		if (r1 != r2) {
			var firstOP = array[r1].name;
			var firstOPpts = array[r1].pts;

			var secondOP = array[r2].name;
			var secondOPpts = array[r2].pts;			
		}

		else {
			while(r1 == r2) {
				r1 = Math.floor(Math.random() * array.length);
				r2 = Math.floor(Math.random() * array.length);
			}

			var firstOP = array[r1].name;
			var firstOPpts = array[r1].pts;

			var secondOP = array[r2].name;
			var secondOPpts = array[r2].pts;
		}

		$('#fighter1').html(firstOP);

		$('#fighter2').html(secondOP);

	};

	var finishedSorting = function(array) {
		// function to check if the array has been sorted


	}


	// CLICK FUNCTIONS ///////////////////////////////////////////////

	// opponent1 = +1 point
	$('#fighter1').on('click', function(){
		console.log("fighter1: +1pt");

		// add point to character
		for(var i = 0; i < popnUnsorted.length; i++) {

			if (popnUnsorted[i].name === $('#fighter1').text()) {
				popnUnsorted[i].pts += 1;

				console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
			}
		}

		// generate new match
		generateMatch(popnUnsorted);
	});

	// opponent2 = +1 point
	$('#fighter2').on('click', function(){

		// add points to characters
		for(var i = 0; i < popnUnsorted.length; i++) {

			if (popnUnsorted[i].name === $('#fighter2').text()) {
				popnUnsorted[i].pts += 1;

				console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
			}

		}

		// generate new match
		generateMatch(popnUnsorted);
	});


	$('#blue').on('click', function(){
		// blue - love them both = +1 point to both
		console.log("blue: +1pt to both");

		// add points to characters
		for(var i = 0; i < popnUnsorted.length; i++) {

			if (popnUnsorted[i].name === $('#fighter1').text()) {
				popnUnsorted[i].pts += 1;

				console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
			}

			if (popnUnsorted[i].name === $('#fighter2').text()) {
				popnUnsorted[i].pts += 1;

				console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
			}

		}

		// generate new match
		generateMatch(popnUnsorted);
	}); 
	
	$('#red').on('click', function(){
		// red - neutral = no points
		console.log("red: no pts to both");

		// generate new match
		generateMatch(popnUnsorted);

	});

	$('#green').on('click', function(){
		// green - hate them both = -1 point to both
		console.log("green: -1pt to both");

		// subtract points from characters
		for(var i = 0; i < popnUnsorted.length; i++) {

			if (popnUnsorted[i].name === $('#fighter1').text()) {
				popnUnsorted[i].pts -= 1;

				console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
			}

			if (popnUnsorted[i].name === $('#fighter2').text()) {
				popnUnsorted[i].pts -= 1;

				console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
			}

		}

		// generate new match
		generateMatch(popnUnsorted);
	});

	// MAIN FUNCTION ///////////////////////////////////////////

	// generate initial match
	generateMatch(popnUnsorted);

	// var popnSorted = popnUnsorted.sort(function(a,b){
	// 	return a.value - b.value;
	// });

	// console.log(popnSorted);

	// GENERATE RESULTS ///////////////////////////////////////////////

	// table of results
	// rank - character img/name - number of points
});