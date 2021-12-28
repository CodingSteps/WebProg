	function myFunction()
		{
			let inputAge = document.getElementById("ageText").value;
           
			const secsInMin = 60;
			const secsInHr  = secsInMin * 60;
			const secsInADay = secsInHr * 24;
            const secsInAYear = secsInADay * 365;
            alert(secsInAYear);
            let secsInAge = inputAge * secsInAYear;

            document.getElementById("ageResult").innerHTML = `Your age in seconds ${secsInAge} seconds`;
            document.getElementById("ageResult").style.backgroundColor ="aliceblue";
		}


		function incrementCnt(){
			 let cnt = document.getElementsByClassName('counter');
			 let incVal = cnt[1].innerHTML;
			 incVal++; //incVal=incVal+1;
			 cnt[1].innerHTML = incVal; 

			 /*let cnt;
			 cnt = document.getElementById('counter');
			 cnt.style.backgroundColor = "blue";
			 let incVal = cnt.innerHTML;  //incVal =100
			 incVal++; //incVal =incVal +5  incVal =105
			 cnt.innerHTML = incVal;*/
		}

		function resetCnt(){
			 let a;
			 a = document.getElementsByClassName('counter');
			 a[0].style.backgroundColor = "green";
			
			 a[0].innerHTML = 0; 
		}


		function decrementCnt(){
			 let a;
			 a = document.getElementsByClassName('counter');
			 a[0].style.backgroundColor = "pink";
			 let u = a[0].innerHTML;  //incVal =100
			 u--; //incVal =incVal +5  incVal =105
			 a[0].innerHTML = u; 
		}


// Functions to convert String Case
		function convertCapitalCase()
		{
			let inputTxt = document.getElementById("inputStr").value;

	        let capitalCase = inputTxt[0].toUpperCase() + inputTxt.slice(1).toLowerCase();

            document.getElementById("txtResult").innerHTML = `${capitalCase}`;
            
		}

		function convertUpperCase()
		{
			let inputTxt = document.getElementById("inputStr").value;

	        let upperCase = inputTxt.toUpperCase();

            document.getElementById("txtResult").innerHTML = `${upperCase}`;
            
		}

		function convertLowerCase()
		{
			let inputTxt = document.getElementById("inputStr").value;

	        let lowerCase = inputTxt.toLowerCase();

            document.getElementById("txtResult").innerHTML = `${lowerCase}`;
            
		}


// Check Ticket Entry

      function checkEntry()
      {                 
      	            
		      	let age = document.getElementById("inputAge").value;
		      	let accompanied;
		      	document.getElementById("entry").innerHTML=" ";


		      	if(document.getElementById("radio1").checked)
		      	{
		              accompanied = document.getElementById("radio1").value; 
		      	}
		      	else if(document.getElementById("radio2").checked) 
		      	{
		      		  accompanied = document.getElementById("radio2").value;
		      	}
		      	else
		          {
		        	  accompanied = "Are you accompained by an Adult. Please select an option";
		          }	

		      
		        if(isNaN(age) || age === '')
		        {
		        	alert("Please enter valid input for age");
		        }
		        else if(age >= 13 || (age < 13 && accompanied === 'yes'))
		        {
		        	document.getElementById("entry").style.color = "#db9c3e";
		        	document.getElementById("entry").innerHTML="You are allowed. Enjoy the Movie";
		        }	
		        else if(age < 13 && accompanied === 'no')
		        {
		        	document.getElementById("entry").style.color = "red";
		        	document.getElementById("entry").innerHTML="Sorry, you are not allowed";
		        }	
		       
		        else if(accompanied !== 'yes' && accompanied !== 'no')
		        {
		        	alert(accompanied);
		        }	

		        document.getElementById("inputAge").value =" ";

      } 


   function generateQuote(){
   
   	const quoteList = ["Don't wait for the perfect moment, take the moment and make it perfect.","Stop being afraid of what could go wrong and think of what could go right.","It's not the load that breaks you down, it's the way you carry it.","Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey","Believe in your infinite potential. Your only limitations are those you set upon yourself."]
   	let randomQuote = Math.floor(Math.random()*quoteList.length);
   	let quoteCnt = document.querySelectorAll('h1.quote');  //getElementByID , getElementsByClassName, querySelector
   	quoteCnt[0].innerHTML = `Quote of the Day - Quote ${randomQuote+1}`;
   	let displayQuote = document.getElementsByTagName("em");
   	displayQuote[0].innerHTML = `${quoteList[randomQuote]}`; 


   }  //getElementByID , getElementsByClassName, querySelectorAll, getElementsByTagName 





   const bookRepo = [];
   function AddBook(){
   	 debugger;
   	 let newBook = document.getElementById("inputBook").value;
   	 let status = document.getElementsByClassName("addStatus");

   	 if(bookRepo.includes(newBook))
   	 {
   	 	status[0].innerHTML = "Sorry, Entered book is already available in the repository";
   	 	
   	 }
   	 else
   	 {
   	 	bookRepo.push(newBook);
   	 	
   	 }
   	 document.getElementById("inputBook").value = "";

   }

     




     function SearchBook(){
   	 
   	 let searchVal = document.getElementById("inputBookSearch").value;
   	 let status = document.getElementsByClassName("addStatus");
   	 status[0].innerHTML = " ";

   	 const searchBookFn = (book) => {
   	 	searchVal = searchVal.toUpperCase();
   	 	book = book.toUpperCase();

   	 	if(searchVal === book)
   	 	{
   	 		return book;
   	 	}
   	 	else if(book.includes(searchVal))
   	 	{
                  return book; 
   	 	}
   	 }

   	 let searchBook = bookRepo.filter(searchBookFn);

   	 if(searchBook.length>0)
   	 {
   	 	status[1].innerHTML = `Results matching your Search Keyword: <br> ${searchBook}`;
   	 }
   	 else
   	 {
   	 	status[1].innerHTML = "Sorry, No matches found.";
   	 }
   }
 	
