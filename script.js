//your JS code here. If required.
let output = document.getElementById("output");

let pro = new Promise((resolve) => {
   setTimeOut(() => {
	   output.innerText = "Hello, world";
   }, 1000)
})
