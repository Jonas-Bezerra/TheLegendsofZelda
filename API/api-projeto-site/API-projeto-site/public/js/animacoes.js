var scrollPosicao = 0;

// Função perfeita, minha primeira animação na logo!
document.addEventListener('scroll', function () {
    scrollPosicao = window.scrollY;
    console.log(scrollPosicao);

    if (scrollPosicao > 65) {
        miniLogo.style.display = `block`;
    } else {
        miniLogo.style.display = `none`;
    }

    if (scrollPosicao > 606) {
        showIcon1.style.display = `none`;
        showIcon2.style.display = `none`;
    } else {
        showIcon1.style.display = `block`;
        showIcon2.style.display = `block`;
    }

    if (scrollPosicao > 979) {
        textDisplay1.style.display = `none`;
        textDisplay2.style.display = `none`;
        textDisplay3.style.display = `none`;
        textDisplay4.style.display = `none`;
        textDisplay5.style.display = `none`;
        textDisplay6.style.display = `none`;
        textDisplay7.style.display = `none`;
    } else {
        textDisplay1.style.display = `block`;
        textDisplay2.style.display = `block`;
        textDisplay3.style.display = `block`;
        textDisplay4.style.display = `block`;
        textDisplay5.style.display = `block`;
        textDisplay6.style.display = `block`;
        textDisplay7.style.display = `block`;
    }
});
