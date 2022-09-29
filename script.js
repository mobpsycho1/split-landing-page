const awayS = document.querySelector('.away-container')
const homeS = document.querySelector('.home-container')
const home = document.querySelector('.home')
const away = document.querySelector('.away')
const btnH = document.querySelector('.btn')
const btnA = document.querySelector('.btn-away')

awayS.addEventListener('mouseover', mouseOver => {
    awayS.classList.add('hover')
    home.classList.add('active')
    btnH.classList.add('active')

})
awayS.addEventListener('mouseout', mouseOut => {
    awayS.classList.remove('hover')
    home.classList.remove('active')
    btnH.classList.remove('active')
    
})

homeS.addEventListener('mouseover', mouseOver => {
    homeS.classList.add('hover')
    away.classList.add('active')
    btnA.classList.add('actives')

})
homeS.addEventListener('mouseout', mouseOut => {
    homeS.classList.remove('hover')
    away.classList.remove('active')
    btnA.classList.remove('actives')
    
})