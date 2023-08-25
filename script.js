//your JS code here. If required.
let output = document.getElementById("output");



function resolvePromise()
	{
		let pro = new Promise((resolve) => {
   setTimeout(() => {
	   resolve("Hello, world!");
   }, 1000)
   })
		pro.then((data) => {
			output.innerText = data;
		}) 
	}

resolvePromise();