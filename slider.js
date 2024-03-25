const peanals= document.querySelectorAll('.panel');
// console.log(peanals)
peanals.forEach(panel=>{
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    peanals.forEach(panel =>{
        panel.classList.remove('active');
    })

}