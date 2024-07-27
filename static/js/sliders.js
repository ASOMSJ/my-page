//menualy navigation slides
function slider(name) {
    let slidePostion = 1;

    viewSlide(slidePostion);

    let nextButton = document.querySelector("#" + name + " .prev");
    let prevButton = document.querySelector("#" + name + " .next");

    function sliderMover(n) {
        viewSlide(slidePostion += n);
    }

    nextButton.addEventListener("click", function () {
        sliderMover(1);
    });

    prevButton.addEventListener("click", function () {
        sliderMover(-1);
    });

    function viewSlide(n) {
        let i;
        let slides = document.querySelectorAll("#" + name + " .slides ");
        if (n > slides.length) { slidePostion = 1 }
        if (n < 1) { slidePostion = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slidePostion - 1].style.display = "block";

    }

}
//--------//

//auto navigation slides
function autoSlide(slideContainerSelector, interval = 5000) {
    let slideIndex = 0;
    const slides = document.querySelectorAll(slideContainerSelector);

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    const nextSlide = () => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }


    showSlide(slideIndex);


    setInterval(nextSlide, interval);
}

//--------//


slider("work");

autoSlide('#reviews .slides', 5000);



