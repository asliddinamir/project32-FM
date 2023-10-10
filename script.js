const toggleBtn = document.querySelector('.toggle');
const slider = document.querySelector('.slider');
const pageviewElement = document.querySelector('.pageview');
const priceElement = document.querySelector('.cost');

slider.addEventListener('input', updatePrice);
updatePrice();

function updatePrice() {
    const sliderValue = parseFloat(slider.value);
    let updatedPrice = "";
    let updatedPageview = "";
    switch (sliderValue) {
        case -2:
            updatedPrice = "$8.00";
            updatedPageview = '10K';
            break;
        case -1:
            updatedPrice = "$12.00";
            updatedPageview = '50K';
            break;
        case 0:
            updatedPrice = "$16.00";
            updatedPageview = '100K';
            break;
        case 1:
            updatedPrice = "$24.00";
            updatedPageview = '500K';
            break;
        case 2:
            updatedPrice = "$36.00";
            updatedPageview = '1M';
            break;
        default:
            updatedPrice = "";
            updatedPageview = '';
            break;
    }
    priceElement.innerHTML = `${updatedPrice} <small>/ month</small>`
    pageviewElement.textContent = updatedPageview;
}

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('right');
});
