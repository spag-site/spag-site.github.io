BUNDLE_VER = "c302ed7ee42cd709e3cc0475d7cadf5b";
( (v, f, t, x, w, n) => {
    clickhere.onmouseover = () => {
    new Audio("/assets/audio/youvegotmail.mp3").load();
	}
	,
	clickhere.onclick = () => {
	    const a = new Audio("/assets/audio/youvegotmail.mp3");
		a.currentTime = 0.1; 
		a.play();
	}
    	,
	duck.onmouseover = () => {
		new Audio("/assets/audio/quack.mp3").load();
	}
	,
	duck.onclick = () => {
		const a = new Audio("/assets/audio/quack.mp3");
		a.currentTime = 0.1;
		a.play();
	}
	,
	eyes.onclick = () => {
		let e = document.createElement("div");
		e.classList.add("blink"),
		document.body.append(e),
		setTimeout(() => e.remove(), 400);
	}
