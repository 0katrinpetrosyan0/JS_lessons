"use strict";
let count = 0;
		table.onclick = function (e) {
			if (e.target.tagName === 'TD' && !e.target.classList.contains('clicked')) {
				count++;
				e.target.classList.add('clicked');
				e.target.innerHTML = count % 2 ? 'X' : 'O';
				// let winnerHor = horizontalCheck();
				let winnerVer = verticalCheck();
        //         let winner = check();
            
		// 		console.log(winner);
         if (winnerVer) {
					alert(winnerVer);
                }
                else if (winnerHor){
                    alert(winnerHor);
                }
        //  else if (winner) {
		// 			alert(winner);
				// }
			}
		};
		function verticalCheck() {
			let trs = document.querySelectorAll('tr');
			for (let i = 0; i < 3; i++) {
				let tds = [];
				trs.forEach((tr, index) => {
					tds.push(tr.children[i].innerHTML);
				});
				let countX = 0;
				let countO = 0;
				tds.forEach((td, index) => {
					if (td === "X") {
						countX++;
					} else if (td === "O") {
						countO++;
					}
				});
				if (countX === 3) {
                    return 'X is winner';
                    // console.log(countX);
				} else if (countO === 3) {
                    return 'O is winner';
                    // console.log(countO);
				}
				return false;
			}
		}



		function horizontalCheck() {
			let trs = document.querySelectorAll('tr');
			trs.forEach((tr, index) => {
				let tds = tr.querySelectorAll('td');
				let countX = 0;
				let countO = 0;
				tds.forEach((td, ind) => {
					if (td.innerHTML === "X") {
						countX++;
					} else if (td.innerHTML === "O") {
						countO++
					}
				});
				if (countX === 3) {
					return 'X is winner'
				} else if (countO === 3) {
					return 'O is winner'
				}
				return false;
			})
		}

		// function check() {
		// 	let trs = document.querySelectorAll('tr');
		// 	let tds = [[], []];
		// 	for (let i = 0, j = 3; i < 3; i++ , j--) {
		// 		tds[0].push(trs[i].children[i]);
		// 		tds[1].push(trs[i].children[j]);
		// 	}

		// 	tds.forEach((td) => {

		// 		let countX = 0;
		// 		let countO = 0;
		// 		td.forEach((t, ind) => {

		// 			if (t === "X") {
		// 				countX++;
		// } else if (t === "O") {
		// 				countO++;
        //             }
		// 		});
		// 		console.log(countX === 3, countO);
		// 		if (countX === 3) {
		// 			return 'X is winner'
		// 		} else if (countO === 3) {
		// 			return 'O is winner'
		// 		}
		// 	})
		// 	return false;
		// }