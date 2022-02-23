//progress-bar
function start(i) {

    var progressing = document.querySelector(`#progress_${i} .progressing`);
    var circle = document.querySelector(`#progress_${i} .circle`);

    requestAnimationFrame(startProgress);

    var progress = 0;
    var ramdom = parseInt(Math.random() * 100);

    function startProgress() {
        progress += 1;
        if (progress <= ramdom) {
            progressing.style.width = progress + '%';
            circle.style.left = progress + '%';
        }
        requestAnimationFrame(startProgress);
    }
}

for (var i = 1; i < 4; i++) {
    start(i);
}

//accordion
const aside = document.querySelector('aside');
const viewMore = document.querySelector('.total .view-more');
const icon = document.querySelector('.total .fa-solid');

viewMore.addEventListener('click', ()=>{

    if (aside.className == 'active'){
        aside.classList.remove('active');
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    } else {
        aside.classList.add('active');
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
    }
})