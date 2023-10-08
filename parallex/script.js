document.addEventListener('scroll', function() {
    var crushLimitsDiv = document.querySelector('.crush-limits');
    var crushImage = document.getElementById('crush-image');
    var footer = document.getElementById('footer');
    var scatteredText = document.querySelector('.scattered-text');
    console.log('Scrolling');

    if (window.scrollY > crushLimitsDiv.offsetTop - window.innerHeight) {
        crushImage.src = 'bashers.png'; // Replace with your actual image path
    }

    if (window.scrollY > 300) {
        header.style.top = '0';
    } else {
        header.style.top = '-100px';
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.bottom = '0';
    } else {
        footer.style.bottom = '-70px';
    }

    
    if (window.scrollY > 50) {
        scatteredText.classList.add('scattered');
    } else {
        scatteredText.classList.remove('scattered');
    }
});
