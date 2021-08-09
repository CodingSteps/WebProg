	function myFunction()
		{
			let inputAge = document.getElementById("ageText").value;

			const secsInMin = 60;
			const secsInHr  = secsInMin * 60;
			const secsInADay = secsInHr * 24;
            const secsInAYear = secsInADay * 365;

            let secsInAge = inputAge * secsInAYear;

            document.getElementById("ageResult").innerHTML = `Your Age in Seconds: ${secsInAge} seconds`;
          //  document.getElementById("ageResult").style.backgroundColor ="aliceblue";
		}


		function incrementCnt(){
			 let cnt = document.getElementsByClassName('counter');
			 let incVal = cnt[0].innerHTML;
			 incVal++;
			 cnt[0].innerHTML = incVal; 

			 /* let cnt = document.getElementById('counter');
			 let incVal = cnt.innerHTML;
			 incVal++;
			 cnt.innerHTML = incVal;*/
		}

		function resetCnt(){
			 let cnt = document.querySelectorAll('h2.counter');
			 let incVal = cnt[0].innerHTML;
			 incVal=0;
			 cnt[0].innerHTML = incVal; 

		}


		function decrementCnt(){
			 let cnt = document.getElementsByClassName('counter');
			 let incVal = cnt[0].innerHTML;
			 incVal--;
			 cnt[0].innerHTML = incVal; 
		}
