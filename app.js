# Javascript part of todo list app
  
<script>
		let count = 1;
		let count2 = 0;

		var btnn = document.querySelector("ol");
		btnn.addEventListener("click", function (e) {
			let box = document.getElementById("items");
			let li = e.target.parentNode;
			box.removeChild(li);
			count2--;
			if (count2 == 0) {
				document.getElementById("delete").style.display = "none";
			}
		});

		function change() {
			if (count == 1) {
        //url contains photo path
				document.body.style.backgroundImage = "url('pencil.jpeg')";
				document.body.style.backgroundRepeat = "no-repeat";
				count++;
			} else if (count == 2) {
				//url contains photo path
				document.body.style.backgroundImage = "url('b3.jpeg')";
				document.body.style.backgroundRepeat = "no-repeat";
				document.body.style.backgroundPosition = "right";
				count = 0;
			} else {
				document.body.style.backgroundImage = "url('b2.jpeg')";
				document.body.style.backgroundRepeat = "no-repeat";
				document.body.style.backgroundPosition = "right";
				count = 1;
			}
		}
		// <i class="fa fa-trash-o" style="font-size: 35px; color: red"></i>
		function additems() {
			count = 1;
			it = document.getElementById("items");
			it.style.display = "block";

			var clearr = document.getElementById("delete");
			clearr.style.display = "block";

			var newItem = document.createElement("li");
			var print = document.getElementById("inputtext").value;
			var text = document.createTextNode(print);
			newItem.appendChild(text);
			document.getElementById("items").appendChild(newItem);
			count2++;

			const myspan = document.createElement("a");
			myspan.className = "remove";
			myspan.href = "javascript:void(0)";
			myspan.innerHTML = "x";
			newItem.appendChild(myspan);
		}
		function clearAll() {
			var items = document.getElementById("items");
			items.innerHTML = "";
			var clearr = document.getElementById("delete");
			clearr.style.display = "none";
		}
	</script>
