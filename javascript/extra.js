BUNDLE_VER = "c302ed7ee42cd709e3cc0475d7cadf5b";
((v, f, t, x, w, n) => {
    clickhere.addEventListener("click", function() {
        const a = new Audio("/assets/audio/click.mp3");
        a.currentTime = 0.0; 
        a.play();
        if (clickhere.src.endsWith("clickhere_red.gif")) {
            clickhere.src = "/assets/img/clickhere_yellow.gif";
        } else if (clickhere.src.endsWith("clickhere_yellow.gif")) {
            clickhere.src = "/assets/img/clickhere_blue.gif";
        } else if (clickhere.src.endsWith("clickhere_blue")) {
            clickhere.src = "/assets/img/clickhere_red.gif";
        }
    });
    duck.onmouseover = () => {
        new Audio("/assets/audio/quack.mp3").load();
    },
    duck.onclick = () => {
        const a = new Audio("/assets/audio/quack.mp3");
        a.currentTime = 0.1;
        a.play();
    },
    eyes.onclick = () => {
        let e = document.createElement("div");
        e.classList.add("blink"),
        document.body.append(e),
        setTimeout(() => e.remove(), 400);
    }
    ygm.onmouseover = () => {
        new Audio("/assets/audio/youvegotmail.mp3").load();
    },
    ygm.onclick = () => {
        const a = new Audio("/assets/audio/youvegotmail.mp3");
        a.currentTime = 0.1; 
        a.play();
    },
})();
