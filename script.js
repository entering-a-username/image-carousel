(function () {
    
    const image = document.getElementById("imgID");
    const previous = document.getElementById("prevID");
    const next = document.getElementById("nextID");
    const dots = Array.from(document.getElementsByClassName("dot"));
    
    let currentIndex = 0;

    previous.addEventListener("click", function (e) {
        const index = setIndex(currentIndex - 1);

        setDot(index);
        setImg(index);
    });

    next.addEventListener("click", function (e) {
        const index = setIndex(currentIndex + 1);
        setDot(index);
        setImg(index);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
            setDot(i);
            setImg(i);
        });
    });

    function setDot(index) {
        setIndex(index);

        // remove the color from all dots and add it to current one
        dots.forEach(dot => dot.classList.remove("bg-[#978787f7]"));
        dots[index].classList.add("bg-[#978787f7]");

    }

    function setIndex(index) {
        // updating index
        currentIndex = index;

        if (currentIndex < 0) {
            currentIndex = 7;
        } else if (currentIndex > 7) {
            currentIndex = 0;
        }

        return currentIndex;
    }


    function setImg(index) {
        image.src = `/img/${index + 1}.jpg`;
        // image.src = "/img/".concat(index + 1, ".jpg");
    }

})();
