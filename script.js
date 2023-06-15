(function () {
    // i feel like theres an easier way to write this (whole code)
    var image = document.getElementById("imgID");
    var previous = document.getElementById("prevID");
    var next = document.getElementById("nextID");
    var dot = document.getElementsByClassName("dot");
    dot = Array.from(dot);
    var obj = {
        1: "/img/1.jpg",
        2: "/img/2.jpg",
        3: "/img/3.jpg",
        4: "/img/4.jpg",
        5: "/img/5.jpg",
        6: "/img/6.jpg",
        7: "/img/7.jpg",
        8: "/img/8.jpg",
    };
    var index = 0;
    show_image(0);
    function show_image(i) {
        index += i;
        var keys = Object.keys(obj);
        if (index >= 8) {
            index = 0;
        }
        if (index < 0) {
            index = 7;
        }
        image.src = obj[keys[index]];
        dot.forEach(function (el) {
            el.classList.remove("bg-[#978787f7]");
        });
        dot[index].classList.add("bg-[#978787f7]");
        if (index - 1 >= 0) {
            dot[index - 1].classList.remove("bg-[#978787f7]");
        }
        else {
            dot[dot.length - 1].classList.remove("bg-[#978787f7]");
        }
        if (index + 1 < dot.length) {
            dot[index + 1].classList.remove("bg-[#978787f7]");
        }
        else {
            dot[0].classList.remove("bg-[#978787f7]");
        }
    }
    previous.addEventListener("click", function () {
        show_image(-1);
    });
    next.addEventListener("click", function () {
        show_image(1);
    });
    dot.forEach(function (dot1, i) {
        dot1.addEventListener("click", function () {
            image.src = "/img/".concat(i + 1, ".jpg");
            dot.forEach(function (dot) {
                dot.classList.remove("bg-[#978787f7]");
            });
            dot1.classList.add("bg-[#978787f7]");
        });
    });
    // when i click on dot and then try to use previous/next, it resets
})();
