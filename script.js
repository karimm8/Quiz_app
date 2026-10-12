// load

const load = document.getElementById('load')
const start = document.getElementById('start')
const container = document.getElementById('container')

starte = () =>{
    setTimeout(() => {
        load.classList.remove('active')
        start.classList.add('active')
        container.classList.add('back')
    }, 5000);
}

starte()