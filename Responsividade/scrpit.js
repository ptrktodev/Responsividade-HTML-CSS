const btnmobile = document.getElementById('btn-mobile');

function toggle(){
    const nav = document.getElementById('navegacao');
    nav.classList.toggle('active');
}

function Close1() {
    const btn1 = document.getElementById('collapseAbout');
    btn1.addEventListener('click', toggle);
}
function Close2() {
    const btn2 = document.getElementById('collapseContact');
    btn2.addEventListener('click', toggle);
}
function Close3() {
    const btn3 = document.getElementById('collapseExp');
    btn3.addEventListener('click', toggle);
}
function Close4() {
    const btn4 = document.getElementById('collapseProject');
    btn4.addEventListener('click', toggle);
}

btnmobile.addEventListener('click', toggle);
btnmobile.addEventListener('click', Close1);
btnmobile.addEventListener('click', Close2);
btnmobile.addEventListener('click', Close3);
btnmobile.addEventListener('click', Close4);



const menu = document.querySelectorAll('#navbar a[href^="#"]');

menu.forEach((item)=>{
    item.addEventListener('click', scorllSuave);
})

function scorllSuave(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id);
    const distance = section.offsetTop;
    console.log(distance);

    window.scroll({
        top: distance,
        behavior: "smooth",
        
    });
}
