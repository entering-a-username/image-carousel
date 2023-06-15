(function() {
    // i feel like theres an easier way to write this (whole code)
    const image = document.getElementById("imgID") as HTMLImageElement;
    const previous = document.getElementById("prevID") as HTMLAnchorElement;
    const next = document.getElementById("nextID") as HTMLAnchorElement;
    let dot = document.getElementsByClassName("dot") as HTMLCollection;
    dot = Array.from(dot);
    const obj = {
        1: "/img/1.jpg", // default
        2: "/img/2.jpg",
        3: "/img/3.jpg",
        4: "/img/4.jpg",
        5: "/img/5.jpg",
        6: "/img/6.jpg",
        7: "/img/7.jpg",
        8: "/img/8.jpg",
    }

    let index: number = 0;
    show_image(0);


    function show_image(i: number): void {
        
        index += i;
        let keys: string[] = Object.keys(obj)

        if (index >= 8) {
            index = 0;
        }
        if (index < 0) {
            index = 7;
        }

        image.src = obj[keys[index]];

        dot.forEach(el => {
            el.classList.remove("bg-[#978787f7]");
        });

        dot[index].classList.add("bg-[#978787f7]");

        if (index - 1 >= 0) {
            dot[index - 1].classList.remove("bg-[#978787f7]");
        } else {
            dot[dot.length - 1].classList.remove("bg-[#978787f7]");
        }

        if (index + 1 < dot.length) {
            dot[index + 1].classList.remove("bg-[#978787f7]");
        } else {
            dot[0].classList.remove("bg-[#978787f7]");
        }
    }

    previous.addEventListener("click", function(): void {
        show_image(-1);
    })

    next.addEventListener("click", function(): void {
        show_image(1);
    })


    dot.forEach((dot1, i) => {
        dot1.addEventListener("click", function() {
            image.src = `/img/${i + 1}.jpg`;
            dot.forEach(dot => {
                dot.classList.remove("bg-[#978787f7]");
            });
            dot1.classList.add("bg-[#978787f7]");
        })
    });


// when i click on dot and then try to use previous/next, it resets
})();