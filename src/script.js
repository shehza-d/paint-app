let colorPickingFunction = () => {
	let colorPicked = document.querySelector('#colorPicker').value;
	console.log('color', colorPicked)
	document.querySelector('.align').style.backgroundColor = colorPicked;
	return colorPicked
}

let colorPicked = '#0000';

let selectColor = (event) => {
	event.preventDefault()
	colorPicked = colorPickingFunction();
	console.log('color', colorPicked)

	// `${!colorPicked} ? ${colorPicked}: #00000`


	//sir ka code 
	let ctx = document.querySelector("#myCanvas").getContext("2d");
	ctx.fillStyle = `${colorPicked}`
	// ctx.fillRect(0, 0, 100, 100);

	let isMouseDown = false;

	document.querySelector("#myCanvas").addEventListener("mousedown", (event) => {
		isMouseDown = true;
	});
	document.querySelector("#myCanvas").addEventListener("mouseup", (event) => {
		ctx.beginPath();
		isMouseDown = false;
	});

	document.querySelector("#myCanvas").addEventListener("mousemove", (event) => {

		if (isMouseDown) {
			// console.log("move: ", event);
			console.log("h: ", event.offsetX);
			console.log("w: ", event.offsetY);

			ctx.lineWidth = 10
			ctx.lineCap = "round"
			ctx.lineTo(event.offsetX, event.offsetY);
			ctx.stroke();
			ctx.beginPath(); //to mouse up ky baad jab dubara mouse up down hota hy tw bech ki line bhi draw ho jata hy
			ctx.moveTo(event.offsetX, event.offsetY)
			ctx.strokeStyle=colorPicked;

		}

	});
}

let downloadCanvas = () => {
	let canvas = document.querySelector('#myCanvas');
	let anchor = document.createElement('a');
	anchor.href = canvas.toDataURL('image/jpg');
	anchor.download = 'shehzad_paint_app.jpg';
	anchor.click();
}

/*
05-aug-2022
let textFormDB = ""
clrt+D = edit all variable ()

difference b/t display none and visibility hidden


*/