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
    let background = "";

    switch (sliderValue) {
        case -2:
            updatedPrice = "$8.00";
            updatedPageview = '10K';
            background = 'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 0%, rgb(234, 238, 251) 0%, rgb(234, 238, 251) 100%)';
            break;
        case -1:
            updatedPrice = "$12.00";
            updatedPageview = '50K';
            background = 'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 25%, rgb(234, 238, 251) 25%, rgb(234, 238, 251) 100%)';
            break;
        case 0:
            updatedPrice = "$16.00";
            updatedPageview = '100K';
            background = 'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 50%, rgb(234, 238, 251) 50%, rgb(234, 238, 251) 100%)';
            break;
        case 1:
            updatedPrice = "$24.00";
            updatedPageview = '500K';
            background = 'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 75%, rgb(234, 238, 251) 75%, rgb(234, 238, 251) 100%)';
            break;
        case 2:
            updatedPrice = "$36.00";
            updatedPageview = '1M';
            background = 'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 100%, rgb(234, 238, 251) 100%, rgb(234, 238, 251) 100%)';
            break;
        default:
            updatedPrice = "";
            updatedPageview = '';
            background = "";
            break;
    }

    priceElement.innerHTML = `${updatedPrice} <small>/ month</small>`;
    pageviewElement.textContent = updatedPageview;
    slider.style.background = background;
}

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('right');
});
