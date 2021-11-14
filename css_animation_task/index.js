function random(min, max) {

    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);

    return rand;

}

// create rain drops
for (let i = 0; i < 100; i++) {

    document.getElementsByClassName('app')[0].innerHTML += '<i class="rain" style="left: ' + random(-1000, 1000) + 'px;transform: translate3d(0, 0, 0);animation-delay: ' + (0.01 * i) + 's"></i>';

}