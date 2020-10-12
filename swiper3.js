const btnMore = document.querySelector('.btn-more');
let minimizer = document.querySelector('.brands-list_minimizer');
let mySwiper;
const mediaQueryList = window.matchMedia('(min-width: 768px)');

btnMore.addEventListener('click', function () {
    btnMore.classList.toggle('btn-more_opened');
    minimizer.classList.toggle('brands-list_minimized');

    if (minimizer.classList.contains('brands-list_minimized')) {
        btnMore.textContent = 'Показать все';
    } else {
        btnMore.textContent = 'Скрыть';
    }
})

const enableSwiper = function() {
    mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
}

let swiperRequest = function (a) {
    if (( a.matches ) && (mySwiper!==undefined)) {
        mySwiper.destroy(true, true)
    } else if (a.matches) {
        console.log(mySwiper)
        return ;
    } else {
        enableSwiper();
    }
}

swiperRequest(mediaQueryList);

mediaQueryList.onchange = function (a) {
    swiperRequest(a);
}




