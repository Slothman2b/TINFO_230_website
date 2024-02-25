const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=> {
    text.classList.toggle('show-more');

    if (readMoreBtn.innerText === 'Dermatological Conditions +') {
        readMoreBtn.innerText = 'Dermatological Conditions -';
    }

    else if (readMoreBtn.innerText === 'Dermatological Conditions -') {
        readMoreBtn.innerText = 'Dermatological Conditions +';
    }

    else if (readMoreBtn.innerText === 'Mental Health +') {
        readMoreBtn.innerText = 'Mental Health -';
    }

    else if (readMoreBtn.innerText === 'Mental Health -') {
        readMoreBtn.innerText = 'Mental Health +';
    }

})

