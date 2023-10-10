const toggleBtn = document.querySelector('.toggle');
const slider = document.querySelector('.slider');
const pageviewElement = document.querySelector('.pageview');
const priceElement = document.querySelector('.cost');

slider.addEventListener('input', updatePrice);
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('right');
    updatePrice();
});
updatePrice();

function updatePrice() {
    const sliderValue = parseFloat(slider.value);
    let updatedPrice = "";
    let updatedPageview = "";
    let background = "";
    const isRightToggle = toggleBtn.classList.contains('right');

    switch (sliderValue) {
        case -2:
            updatedPrice = isRightToggle ? "$72.00" : "$8.00";
            updatedPageview = '10K';
            background = isRightToggle ? 'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 0%, rgb(234, 238, 251) 0%, rgb(234, 238, 251) 100%)' :
                'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 0%, rgb(234, 238, 251) 0%, rgb(234, 238, 251) 100%)';
            break;
        case -1:
            updatedPrice = isRightToggle ? "$108.00" : "$12.00";
            updatedPageview = '50K';
            background = isRightToggle ? 'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 25%, rgb(234, 238, 251) 25%, rgb(234, 238, 251) 100%)' :
                'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 25%, rgb(234, 238, 251) 25%, rgb(234, 238, 251) 100%)';
            break;
        case 0:
            updatedPrice = isRightToggle ? "$144.00" : "$16.00";
            updatedPageview = '100K';
            background = isRightToggle ? 'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 50%, rgb(234, 238, 251) 50%, rgb(234, 238, 251) 100%)' :
                'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 50%, rgb(234, 238, 251) 50%, rgb(234, 238, 251) 100%)';
            break;
        case 1:
            updatedPrice = isRightToggle ? "$216.00" : "$24.00";
            updatedPageview = '500K';
            background = isRightToggle ? 'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 75%, rgb(234, 238, 251) 75%, rgb(234, 238, 251) 100%)' :
                'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 75%, rgb(234, 238, 251) 75%, rgb(234, 238, 251) 100%)';
            break;
        case 2:
            updatedPrice = isRightToggle ? "$324.00" : "$36.00";
            updatedPageview = '1M';
            background = isRightToggle ? 'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 100%, rgb(234, 238, 251) 100%, rgb(234, 238, 251) 100%)' :
                'linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) 100%, rgb(234, 238, 251) 100%, rgb(234, 238, 251) 100%)';
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
