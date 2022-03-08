//스크롤
const articles = document.querySelectorAll("#container > article");
articles.forEach(article => article.addEventListener("mousewheel", scrollIt));
//ie,chrome용
articles.forEach(article => article.addEventListener("DOMMouseScroll", scrollIt));
//firefox용

function scrollIt(e){
    e.preventDefault();
    console.log(e);
    let delta = e.wheelDelta;
    if(!delta){
        delta = e.detail*-40;
    }

    const artArr = Array.prototype.slice.call(articles);
    let i = artArr.indexOf(this);
    console.log(i)
    if(delta<0){
        let el;
        (i<articles.length-1)?el = this.nextElementSibling : el = this;
        let elTop = window.pageYOffset + el.getBoundingClientRect().top;
        window.scrollTo({
            behavior:"smooth",
            left:0,
            top:elTop 
        });
    }else if(delta>0){
        let el;
        (i>0)? el = this.previousElementSibling : el = this;
        let elTop = window.pageYOffset + el.getBoundingClientRect().top;
        window.scrollTo({
            behavior:"smooth",
            left:0,
            top:elTop
        });
    }

}

//메인 타이핑
let x = "Active한 웹퍼블리셔 권아라입니다";
let i = 0;
const typing = document.querySelector("#typing");

function typeWriter(){
    if(i < x.length){
        typing.innerHTML += x[i];
        i++
        setTimeout(typeWriter,200);
    }else{
    i = 0; 
    setTimeout(recall,1000);
    }
}

function recall(){
    typing.textContent = "";
    typeWriter();
}

typeWriter();


//#intro text slide
const profile_text = document.querySelector('.profile_text');
const intro = document.querySelector('#intro');
window.addEventListener('scroll',() => {
    let winTop = window.pageYOffset;

    let elTop = winTop + intro.getBoundingClientRect().top;
    if(winTop >= elTop){
        profile_text.classList.add("on");
    }
})

//#web_fst text slide
const Sl_tit = document.querySelector('.Sl_tit');
const web_fst = document.querySelector('#web_fst');
window.addEventListener('scroll',() => {
    let winTop = window.pageYOffset;

    let elTop = winTop + web_fst.getBoundingClientRect().top
    if(winTop >= elTop){
        Sl_tit.classList.add("on");
    }
})

//#web_scd text slide
const Nf_tit = document.querySelector('.Nf_tit');
const web_scd = document.querySelector('#web_scd');
window.addEventListener('scroll',() => {
    let winTop = window.pageYOffset;

    let elTop = winTop + web_scd.getBoundingClientRect().top;
    if(winTop >= elTop){
        Nf_tit.classList.add("on");
    }
})