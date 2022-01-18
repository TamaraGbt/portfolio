const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active');
    nav.classList.toggle('menu-visible');
})

if(window.matchMedia('(max-width: 1300px')) {
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible');
            ligne.classList.toggle('active');
        })
    })
}


// Animation écriture
const txtAnim = document.querySelector('.txt-animation');
let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Moi c\'est Tamara')
.pauseFor(300)
.typeString(', <strong>Développeuse Front-End</strong> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color : #428089; font-weight: bold;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color : #2B2B2B; font-weight: bold;"> HTML</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color : #72CECF; font-weight: bold;"> Javascript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color : #428089; font-weight: bold;"> React</span> !')
.start()


// Animation contact

const inputFields = document.querySelectorAll('input');

for(let i = 0; i< inputFields.length; i++) {
    let field = inputFields[i];
    field.addEventListener('input', (e) => {
        if(e.target.value !== '') {
            e.target.parentNode.classList.add('animation');
        } else {
            e.target.parentNode.classList.remove('animation');
        }
    })
}