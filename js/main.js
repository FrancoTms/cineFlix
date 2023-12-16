const row = document.querySelector('.carrouselCont');
const films = document.querySelectorAll('.film');

const arrowLeft = document.getElementById('flecha-left');
const arrowRight = document.getElementById('flecha-right');

arrowRight.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth + 1;
    const indiceActive = document.querySelector('.indicadores .active');
    if (indiceActive.nextSibling) {
        indiceActive.nextSibling.classList.add('active');
        indiceActive.classList.remove('active');
    }
})

arrowLeft.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth + 1;
    const indiceActive = document.querySelector('.indicadores .active');
    if (indiceActive.previousSibling) {
        indiceActive.previousSibling.classList.add('active');
        indiceActive.classList.remove('active');
    }
})

const numberPages = Math.ceil(films.length / 5);

for (let i = 0; i < numberPages; i++) {
    const indice = document.createElement('button');
    if (i === 0) {
        indice.classList.add('active');
    }
    document.querySelector('.indicadores').appendChild(indice);
    indice.addEventListener('click', (e) => {
        row.scrollLeft = i * row.offsetWidth;
        document.querySelector('.indicadores .active').classList.remove('active');
        e.target.classList.add('active')

    })
}

films.forEach((film) => {
    film.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
            films.forEach(film => film.classList.remove('hover'));
            element.classList.add('hover');
        }, 100);
    })
})

row.addEventListener('mouseleave', () => {
    films.forEach(film => film.classList.remove('hover'));

})