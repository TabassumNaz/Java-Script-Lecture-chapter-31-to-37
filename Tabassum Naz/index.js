// // var Now = new Date(); // Date is constructer. constructer must be written in capital. 
// console.log(typeof Now); // Now type is Object 
// var currentMonth = Now.getMonth(); // get method 
// console.log(currentMonth);
// var currentDay =Now.getDay();
// console.log(currentDay);
// var currentTime = Now.getTime(); // use for time difference as its values are shown in miliseconds 
// console.log(currentTime);

// Task : Make Digital CLock or Show time  // 

// function showTime(){ // Function name should be started as Verb else.g showTime, get, do, etc. 
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time; 
//     setTimeout(showTime, 1000);   
// }

// showTime(); // It is use to call function or display at the screen  



// // Task: 2 Make countdown timer 
// // Set the date we're counting down to
// var countDownDate = new Date("Dec 31, 2024 07:01:30").getTime();
// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);





// Requirement : make function and get prompt to the user and ask his fix monthly salary. If his salary is less than 50,000 than salary after tax is 50,000 and if his salary is greater than 50,000 than calculat  0.25% from the salary. And total salary is minused by 0.25%. . log the ressult// 

var salary = prompt( "Please enter your monthly salary"); 
var tax = salary*0.25/100
function showSalary()
{
    let sal;
    if(salary== 50000){
        sal = salary

    }
    if(salary >50000) {
    sal = salary - tax 
    }
    console.log(sal)
}





