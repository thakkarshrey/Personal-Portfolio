let bar = document.querySelector('.bar')
let cross = document.querySelector('.cross')
let buttons = document.querySelector('.buttons')
bar.style.display = 'none'
const sidebar = document.querySelector('.sidebar')


cross.addEventListener('click',function(){
    sidebar.classList.add('sidebarGo')
    cross.style.display = 'none'
    setTimeout(() => {
        bar.style.display = 'inline'
    }, 300);
})
bar.addEventListener('click',function(){
    sidebar.classList.remove('sidebarGo')
    setTimeout(() => {
        cross.style.display = 'inline'    
    }, 300);
    bar.style.display = 'none'
})