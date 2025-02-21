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
eyes.onclick = () => {
        let e = v.createElement("div");
        e.classList.add("blink"),
	v.body.append(e),
	foundSecret("blink"),
       	x( () => e.remove(), 400)
}
