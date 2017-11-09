
//Break Chain Animation
function breakChain() {
	let chain = document.getElementById('chain'); 
	chain.innerHTML = "&#xf0c1;"; 

	//setTimeOut
	setTimeout(function() {
		chain.innerHTML = "&#xf127;";
	}, 1000);
}

//call Animation 
// breakChain(); 

//Animate: chain will break every 2 seconds
setInterval(breakChain, 2000);

//battery Charge animation 

function chargeBattery() {
	let battery = document.getElementById('battery');
	battery.innerHTML = "&#xf244;"; 
	setTimeout(function() {
		battery.innerHTML = "&#xf243;"; 
	}, 1000);
	setTimeout(function() {
		battery.innerHTML = "&#xf242;"; 
	}, 2000); //2000 because otherwise will be at same time as f243
	setTimeout(function() {
		battery.innerHTML = "&#xf241;"; 
	}, 3000); 
	setTimeout(function() {
		battery.innerHTML = "&#xf240;"; 
	}, 4000); 
}

//run animation 
chargeBattery(); 

//run Animation every 5 seconds b/c whole thing takes 4 seconds
	setInterval(chargeBattery, 5000);

//hourglass Tip Animation 
function hourglassTip() {
	let hourglass = document.getElementById('hourglass'); 
	hourglass.innerHTML = "&#xf251;"; 
	setTimeout(function() {
		hourglass.innerHTML = "&#xf252;";
	},1000);
	setTimeout(function() {
		hourglass.innerHTML = "&#xf253;";
	}, 2000);
}

hourglassTip(); 
//Run animation every three seconds
setInterval(hourglassTip, 3000);


// $(function() {

// 	$('#h1', '#hourglass').delay(1000).fadeOut(200);

// });

// $(document).ready(function() {
// 	$('#h1').delay(1000).fadeOut(2000); 
// })

// $("h1").click(function() {
// 	$("h1").fadeOut("slow");
// });
