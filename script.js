//your JS code here. If required.
let output = document.getElementById("output");



function resolvePromise()
	{
		let pro = new Promise((resolve) => {
   setTimeout(() => {
	   output.innerText = "Hello, world";
   }, 1000)
   })
	}

resolvePromise();