(() => {
	const n = 50;

	for(let i=0; i<n; i++){
		let x = document.createElement("div");
			x.name = "box";
			x.className = "row";

		let y = document.createElement("div");
			y.name = "box";
			y.className = "square";	
		
		let map = document.querySelector("#map");	
			map.appendChild(x);

			for( let j = 0; j < n; j++){	
				x.appendChild(y.cloneNode(true));
			}
	}
})();
