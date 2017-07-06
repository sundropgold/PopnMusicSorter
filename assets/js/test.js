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

		// if (randomUsed.indexOf(r1) != -1) {
		// 	// get the first random opponent
		// 	var firstOP = array[r1].name;
		// 	var firstOPpts = array[r1].pts;

		// 	randomUsed.push(r1);
		// }
		// else {
		// 	while (randomUsed.indexOf(r1) > -1) {
		// 		r1 = Math.floor(Math.random() * array.length);
		// 	}

		// 	var firstOP = array[r1].name;
		// 	var firstOPpts = array[r1].pts;

		// 	randomUsed.push(r1);
		// }

		// if (randomUsed.indexOf(r2) == -1){
		// 	// get the second random opponent
		// 	var secondOP = array[r2].name;
		// 	var secondOPpts = array[r2].pts;

		// 	randomUsed.push(r2);
		// }

		// else {
		// 	while (randomUsed.indexOf(r2) > -1) {
		// 		r2 = Math.floor(Math.random() * array.length);
		// 	}

		// 	var secondOP = array[r2].name;
		// 	var secondOPpts = array[r2].pts;

		// 	randomUsed.push(r2);
		// }






		// opponent1 = +1 point
	// $('#fighter1').on('click', function(){
	// 	console.log("fighter1: +1pt");

	// 	// add point to character
	// 	for(var i = 0; i < popnUnsorted.length; i++) {

	// 		if (popnUnsorted[i].name === $('#f1name').text()) {
	// 			popnUnsorted[i].pts += 1;

	// 			console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
	// 		}
	// 	}

	// 	// generate new match
	// 	generateMatch(popnUnsorted);

	// 	generateResults();
	// });

	// opponent2 = +1 point
	// $('#fighter2').on('click', function(){

	// 	// add points to characters
	// 	for(var i = 0; i < popnUnsorted.length; i++) {

	// 		if (popnUnsorted[i].name === $('#f2name').text()) {
	// 			popnUnsorted[i].pts += 1;

	// 			console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
	// 		}

	// 	}

	// 	// generate new match
	// 	generateMatch(popnUnsorted);

	// 	generateResults();
	// });










$('#blue').on('click', function(){
		// blue - love them both = +1 point to both
		// console.log("blue: +1pt to both");

		// // add points to characters
		// for(var i = 0; i < popnUnsorted.length; i++) {

		// 	if (popnUnsorted[i].name === $('#f1name').text()) {
		// 		popnUnsorted[i].pts += 1;

		// 		console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
		// 	}

		// 	if (popnUnsorted[i].name === $('#f2name').text()) {
		// 		popnUnsorted[i].pts += 1;

		// 		console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
		// 	}

		// }

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
		// green - hate them both = -1 point to both
		// console.log("green: -1pt to both");

		// // subtract points from characters
		// for(var i = 0; i < popnUnsorted.length; i++) {

		// 	if (popnUnsorted[i].name === $('#f1name').text()) {
		// 		popnUnsorted[i].pts -= 1;

		// 		console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
		// 	}

		// 	if (popnUnsorted[i].name === $('#f2name').text()) {
		// 		popnUnsorted[i].pts -= 1;

		// 		console.log(popnUnsorted[i].name + " now has " + popnUnsorted[i].pts + " points!");
		// 	}

		// }

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
