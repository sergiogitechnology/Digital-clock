const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milesimos = document.getElementById('milesimos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let mil = dateToday.getMilliseconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;
    
    if (mil < 10) mil = '0' + mil;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    milesimos.textContent = mil;
}, 1)