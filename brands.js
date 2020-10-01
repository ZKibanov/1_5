const btnMore = document.querySelector('.btn-more');
const brandsList = document.querySelector('.brands-list');
let windowWidth = document.documentElement.clientWidth;
let items = brandsList.children;

if ((windowWidth > 767) && (1119 >= windowWidth)) {
    for (let i=6;i<items.length;i++) {
        items[i].classList.add('hidden');
    }
} if (1119 < windowWidth) {
    for (let i = 8; i < items.length; i++) {
        items[i].classList.add('hidden');
    }
} else {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add('swiper-slide');
    }
}

btnMore.addEventListener('click', function () {
    if ((windowWidth > 767) && (1119 >= windowWidth)) {
        for (let i=6;i<items.length;i++) {
            items[i].classList.toggle('hidden');
        }
    } if (1119 < windowWidth) {
            for (let i=8;i<items.length;i++) {
                items[i].classList.toggle('hidden');
            }
}
    btnMore.classList.toggle('btn-more_opened');

    if(items[10].classList.contains('hidden')){
        btnMore.textContent='Показать все';
    }else {
        btnMore.textContent='Скрыть';
    }

});