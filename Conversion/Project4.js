let history = [];
    
function main(){

    document.getElementById("convert").addEventListener("click",displayValue); //convert button event handler
    document.getElementById("history").addEventListener("click",displayHistory);//history button event handler
    document.getElementById("reset").addEventListener("click",resetValues);// reset button event handler
}

function displayValue(){
    let input = Number(document.getElementById('inputTxt').value);
    let selectedVal = document.querySelector('input[name="radioBtn"]:checked').value;
    let Ans;
    let historyData = [];
    // Clear the history when convert button is clicked
    document.getElementById("historyTxt").innerHTML = ""; 

    
    if(isNaN(input) || input<0)  // Check for invalid input values
    {
         Ans = "Invalid";
    }
    else
    {
                switch(selectedVal)     // Do appropriate conversion based on selected radio button value
            {
                case "Binary": 
                        Ans = baseConversion(input,2);  //call base conversion function by passing base 2 
                        break;
                case "Octal":
                        Ans = baseConversion(input,8); //call base conversion function by passing base 8
                        break;
                case "Hexadecimal":
                        Ans = baseConversion(input,16); //call base conversion function by passing base 16
                        break;
            }
    }
    
    document.getElementById("answer").value=Ans;
     
    //Push input, selected conversion and answer in to history data array, if answer is not "Invalid"
    if(Ans!=="Invalid")
    {
        historyData.push(selectedVal);
        historyData.push(input);
        historyData.push(Ans);
    }
    

    //Push historyData array into history array
    history.push(historyData);
    console.log(history);

}


function baseConversion(number,newBase){

    let outputVal=[]; 
    let answer = '';
    
     if(number===0)
    {
            outputVal.push(number);  // if  input number is 0, push it into output array
    }

    for(let i=number;i>0;)
    {
        
                if(newBase===16 && (i%newBase)>=10)    // For base 16, if value is > 10, push appropiate hex code
                {
                    switch(i%newBase)
                    {
                        case 10:
                            outputVal.push('A');
                            break;
                        case 11:
                            outputVal.push('B');
                            break;  
                        case 12:
                            outputVal.push('C');
                            break;
                        case 13:
                            outputVal.push('D');
                            break;
                        case 14:
                            outputVal.push('E');
                            break;
                        case 15:
                            outputVal.push('F');
                            break;                  
                    }
                }
                else
                {
                     outputVal.push(i%newBase); // Do the conversion, by doing i%base and push the value into output array
                }

        
                i=Math.floor(i/newBase);  // Find the value of i for each iteration, by dividing with the base
    }
    
    let arrayLen = outputVal.length;
    for(let x=0;x<arrayLen;x++)
    {
        answer+=(outputVal.pop());
    }

    return answer;   // store output value in string variable and return the variable
    
}


function displayHistory(){

     let temp = '';
     let cnt = 1;

     for(let data of history)  // traverse through the elements of history array
     {
        for(let d of data)     // Fetch each array element and traverse 
        {
            if(cnt===1)       // display the data in the required format
            {
                temp += (d+" : ");   
            }
            else if(cnt===2)
            {
                temp+= (d+" ---------> ");
            }
            else
            {
                temp += (d+".");
                
            }           
            cnt++;
        }
        
        cnt=1;
     }
     
     displayOutput(temp);     
}


// display the history data
function displayOutput(outputData){

     document.getElementById("historyTxt").innerHTML = "";
     let outputArr = outputData.split(".");     // convert string to array

     for(let x of outputArr){
        document.getElementById("historyTxt").innerHTML += x;   // display history in the element 'historyTxt' & format
        let b = document.createElement('br');
        let c = document.createElement('br');
        document.getElementById("historyTxt").append(b);
        document.getElementById("historyTxt").append(c);
     }
     
}


function resetValues(){
     document.getElementById("historyTxt").innerHTML = "";
     document.getElementById("inputTxt").value = "";
     document.getElementById("answer").value = "";

}


