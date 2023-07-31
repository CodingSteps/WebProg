
const allUsers = [];
let outOfStock = ["#ffffff","#ff0000","#000000","#f26037","#808080"];

function user(fname,lname,email,colors)
{
    this.FirstName = fname;
    this.LastName = lname;
    this.Email = email;
    this.Colors = colors;
    this.checkColors = function(OSColor){
         
         let myArr = [];
         for(let c of this.Colors)
         {
            if(OSColor.includes(c))
            {
              myArr.push(c);           
            }
         }
         return myArr;
    }
}



function submitDetails()
{

let userFname = document.getElementById('firstname').value;
let userLname = document.getElementById('lastname').value;
let userEmail = document.getElementById('email').value;
let userChoice1 = document.getElementById('color1').value;
let userChoice2 = document.getElementById('color2').value;
let userChoice3 = document.getElementById('color3').value;

const userDetails = new user(userFname,userLname,userEmail,[userChoice1,userChoice2,userChoice3]);

let response;


response = userDetails.checkColors(outOfStock);


if(response.length>0)
{
    for(let a of response)
    {
        alert("Sorry, your color choice " + a + " is currently out of stock. Choose another Color") ;
    }
    
}   
else 
{
 allUsers.push(userDetails);  
 alert(`User ${userDetails.FirstName}${userDetails.LastName} has been registered successfully`); 
 document.getElementById('firstname').value="";
 document.getElementById('lastname').value="";
 document.getElementById('email').value="";
 document.getElementById('color1').value="#ff0000";
 document.getElementById('color2').value="#ff0000";
 document.getElementById('color3').value="#ff0000";
}
 
}