$(document).ready(function(){

	// array of characters unsorted
	var popnUnsorted = [
		{
			name: "2st",
			img: "assets/images/2st.png",
			pts: 0

		},
		{
			name:"Albireo",
			img:"assets/images/albireo.png",
			pts: 0
		},
		{
			name:"Black",
			img:"assets/images/black.png",
			pts: 0
		},
		{
			name:"Chinatsu",
			img:"assets/images/chinatsu.png",
			pts: 0
		},
		{
			name:"DTO",
			img:"assets/images/dto.png",
			pts: 0
		},
		{
			name:"Eito",
			img:"assets/images/eito.png",
			pts: 0
		},
		{
			name:"Elenoa",
			img:"assets/images/elenoa.png",
			pts: 0
		},
		{
			name:"Fili",
			img: "assets/images/fili.png",
			pts: 0
		},
		{
			name:"Fuga",
			img:"assets/images/fuga.png",
			pts: 0
		},
		{
			name:"Goku-Sotsu-Kun",
			img:"assets/images/goku-sotsu-kun.png",
			pts: 0
		},
		{
			name:"Hiumi",
			img:"assets/images/hiumi.png",
			pts: 0
		},
		{
			name:"Izumi Ibuki",
			img:"assets/images/izumi.png",
			pts: 0
		},
		{
			name:"Jade",
			img:"assets/images/jade.png",
			pts: 0
		},
		{
			name:"Kasuga Sakiko",
			img:"assets/images/kasuga.png",
			pts: 0
		},
		{
			name:"Maud",
			img:"assets/images/maud.png",
			pts: 0
		},
		{
			name:"Meu Meu",
			img:"assets/images/meumeu.png",
			pts: 0
		},
		{
			name:"Miho",
			img: "assets/images/miho.png",
			pts: 0
		},
		{
			name:"Milk",
			img:"assets/images/milk.png",
			pts: 0
		},
		{
			name:"Mimi",
			img:"assets/images/mimi.png",
			pts: 0
		},
		{
			name:"Minit's",
			img:"assets/images/minits.png",
			pts: 0
		},
		{
			name:"MZD",
			img:"assets/images/mzd.png",
			pts: 0
		},
		{
			name:"Nia",
			img:"assets/images/nia.png",
			pts: 0
		},
		{
			name:"Nyami",
			img:"assets/images/nyami.png",
			pts: 0
		},
		{
			name:"Retsu",
			img:"assets/images/retsu.png",
			pts: 0
		},
		{
			name:"Rinka",
			img:"assets/images/rinka.png",
			pts: 0
		},
		{
			name:"Risette",
			img:"assets/images/risette.png",
			pts: 0
		},
		{
			name:"Roki",
			img:"assets/images/roki.png",
			pts: 0
		},
		{
			name:"Roku",
			img:"assets/images/roku.png",
			pts: 0
		},
		{
			name:"Ryuta",
			img:"assets/images/ryuta.png",
			pts: 0
		},
		{
			name:"Shimotsuki Rin",
			img:"assets/images/shimotsukirin.png",
			pts: 0
		},
		{
			name:"Smoke",
			img:"assets/images/smoke.png",
			pts: 0
		},
		{
			name:"Sora Hoshino",
			img:"assets/images/sorahoshino.png",
			pts: 0
		},
		{
			name:"Sumire",
			img:"assets/images/sumire.png",
			pts: 0
		},
		{
			name:"Usanuko",
			img:"assets/images/usanuko.png",
			pts: 0
		},
		{
			name:"VENUS",
			img:"assets/images/venus.png",
			pts: 0
		},
		{
			name:"Yamagata Marika",
			img:"assets/images/yamagata.png",
			pts: 0
		},
		{
			name:"Yuli",
			img:"assets/images/yuli.png",
			pts: 0
		},
		{
			name:"Zizz",
			img:"assets/images/zizz.png",
			pts: 0
		},
		{
			name:"Akane",
			img:"assets/images/akane.png",
			pts: 0
		},
		{
			name:"Date Kyouya",
			img:"assets/images/date.png",
			pts: 0
		},
		{
			name:"Eclipse",
			img:"assets/images/eclipse.png",
			pts: 0
		},
		{
			name:"Harpya",
			img:"assets/images/harpya.png",
			pts: 0
		},
		{
			name:"Gerhard",
			img:"assets/images/gerhard.png",
			pts: 0
		},
		{
			name:"Glutamine",
			img:"assets/images/glutamine.png",
			pts: 0
		},
		{
			name:"iO-Lower",
			img:"assets/images/io-lower.png",
			pts: 0
		},
		{
			name:"Jadeite",
			img:"assets/images/jadeite.png",
			pts: 0
		},
		{
			name:"Kirishima Tsukasa",
			img:"assets/images/tsukasa.png",
			pts: 0
		},
		{
			name:"Kiryu",
			img:"assets/images/kiryu.png",
			pts: 0
		},
		{
			name:"Lazuli",
			img:"assets/images/lazuli.png",
			pts: 0
		},
		{
			name:"Madoka",
			img:"assets/images/madoka.png",
			pts: 0
		},
		{
			name:"Matsushita",
			img:"assets/images/matsushita.png",
			pts: 0
		},
		{
			name:"Michiru",
			img:"assets/images/michiru.png",
			pts: 0
		},
		{
			name:"Miyu",
			img:"assets/images/miyu.png",
			pts: 0
		},
		{
			name:"Nicolas",
			img:"assets/images/nicolas.png",
			pts: 0
		},
		{
			name:"Phantom",
			img:"assets/images/phantom.png",
			pts: 0
		},
		{
			name:"Ranma",
			img:"assets/images/ranma.png",
			pts: 0
		},
		{
			name:"Rars",
			img:"assets/images/rars.png",
			pts: 0
		},
		{
			name:"Shinonome Kokona",
			img:"assets/images/kokona.png",
			pts: 0
		},
		{
			name:"Shinonome Natsuhi",
			img:"assets/images/natsuhi.png",
			pts: 0
		},
		{
			name:"Suiri",
			img:"assets/images/suiri.png",
			pts: 0
		},
		{
			name:"Taiga",
			img:"assets/images/taiga.png",
			pts: 0
		},
		{
			name:"Takuto",
			img:"assets/images/takuto.png",
			pts: 0
		},
		{
			name:"Toa",
			img:"assets/images/toa.png",
			pts: 0
		},
		{
			name:"Weiss",
			img:"assets/images/weiss.png",
			pts: 0
		},
		{
			name:"Wolfgang",
			img:"assets/images/wolfgang.png",
			pts: 0
		},
		{
			name:"Yuzuru",
			img:"assets/images/yuzuru.png",
			pts: 0
		},


	];

	// popnUnsorted array length = 66

	$('#result').hide();
	$('#battle').hide();

	$('#herewego').on('click', function(){

		$('#battle').show();

		$('#result').show();
		$('#battleNum').show();

		$('#ranks').hide();
		$('#text').hide();
		$('#tsugidoka').hide();
	});

	// SET UP VARS ///////////////////////////////////////

	// keep track of battle numbers
	var battle = 0;
	
	// SORT FUNCTIONS ////////////////////////////////////////

	var generateMatch = function(array){
		// function to generate random matches

		// add battle number here
		$('#battleNum').html("<h2>Battle #" + battle + "</h2>");
		battle++;

		var r1 = Math.floor(Math.random() * popnUnsorted.length);
		var r2 = Math.floor(Math.random() * popnUnsorted.length);

		if (r1 != r2) {
			var firstOP = array[r1].name;
			var firstOPpts = array[r1].pts;
			var firstOPimg = array[r1].img;

			var secondOP = array[r2].name;
			var secondOPpts = array[r2].pts;
			var secondOPimg = array[r2].img;			
		}

		else {
			while(r1 == r2) {
				r1 = Math.floor(Math.random() * array.length);
				r2 = Math.floor(Math.random() * array.length);
			}

			var firstOP = array[r1].name;
			var firstOPpts = array[r1].pts;
			var firstOPimg = array[r1].img;

			var secondOP = array[r2].name;
			var secondOPpts = array[r2].pts;
			var secondOPimg = array[r2].img
		}

		$('#fighter1').html("<img id='f1' src='" + firstOPimg + "'/><h3 id='f1name'>" + firstOP + "</h3>");

		$('#fighter2').html("<img id='f2' src='" + secondOPimg + "'/><h3 id='f2name'>" + secondOP + "</h3>");

	};

	var finishedSorting = function(array) {
		// function to check if the array has been sorted

		var unsorted = true;

		// map the characters' points
		var popnArray = array.map(function(char){
			return char.pts;
		});

		// rather than checking if there are duplicate points
		// check if any of the character points are >=40
		for (var i = 0; i < popnArray.length; i++) {

			if (popnArray[i].pts >= 5) { // test number
				unsorted = false;
			}

			else if (battle >= 420) {
				// alternatively, if the battle reaches 420,
				unsorted = false;
			}

		}

		// if so, it's finished sorting

		return unsorted;
	}

	var notSorted = finishedSorting(popnUnsorted);	

	// MAIN FUNCTION ///////////////////////////////////////////

	// generate initial match
	generateMatch(popnUnsorted);

	// CLICK FUNCTIONS ///////////////////////////////////////////////

	$('#blue').on('click', function(){

		console.log("fighter1: +1pt");

		// add point to character
		for(var i = 0; i < popnUnsorted.length; i++) {

			if (popnUnsorted[i].name === $('#f1name').text()) {
				popnUnsorted[i].pts += 1;

				console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
			}
		}

		// generate new match
		generateMatch(popnUnsorted);

		generateResults();
	}); 
	
	$('#red').on('click', function(){
		// red - neutral = no points
		console.log("red: no pts to both");

		// generate new match
		generateMatch(popnUnsorted);

		generateResults();
	});

	$('#green').on('click', function(){

		console.log("fighter2: +1pt");

		// add points to characters
		for(var i = 0; i < popnUnsorted.length; i++) {

			if (popnUnsorted[i].name === $('#f2name').text()) {
				popnUnsorted[i].pts += 1;

				console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
			}

		}

		// generate new match
		generateMatch(popnUnsorted);

		generateResults();
	});

	// GENERATE RESULTS ///////////////////////////////////////////////

	var generateResults = function(){
		
		console.log("");

		if (!notSorted) {

			// until the popns are sorted, this table won't appear
			$('#battle').hide();
			$('#text').hide();

			// bubble sort and map the characters into a popnSorted array

			// table of results using popnSorted array
			// rank - character img/name - number of points		
		}
	};

});