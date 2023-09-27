let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let centerBox = document.getElementById("center");
let addList = document.getElementById("btn add");

for (list of lists) {
	list.addEventListener("dragstart", function (e) {
		let selected = e.target;

		rightBox.addEventListener("dragover", function (e) {
			e.preventDefault();
		});
		rightBox.addEventListener("drop", function (e) {
			rightBox.appendChild(selected);
			selected = null;
		});
		leftBox.addEventListener("dragover", function (e) {
			e.preventDefault();
		});
		leftBox.addEventListener("drop", function (e) {
			leftBox.appendChild(selected);
			selected = null;
		});

		centerBox.addEventListener("dragover", function (e) {
			e.preventDefault();
		});
		centerBox.addEventListener("drop", function (e) {
			centerBox.appendChild(selected);
			selected = null;
		});
	});
}
