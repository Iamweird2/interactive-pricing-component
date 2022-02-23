const paymentSlide = document.querySelector("#payment-slide");
const rangeCircle = document.querySelector("#range-circle");
const progress = document.querySelector(".progress");
const priceRange1 = document.querySelector(".price-range-1");
console.log(paymentSlide);  

function mathSlider(){
    const maxval = paymentSlide.getAttribute("max");
    const val = (paymentSlide.value/maxval) * 100 + "%";

    rangeCircle.style.left = val;
    progress.style.width = val;

    priceRange1.innerHTML = "$" + paymentSlide.value + ".00";
}

mathSlider();

paymentSlide.addEventListener("input", () => {
    mathSlider();
});