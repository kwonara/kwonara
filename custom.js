const articles = document.querySelectorAll("#container > article");
articles.forEach(article => article.addEventListener("mousewheel", scrollIt));
//ie,chrome용
articles.forEach(article => article.addEventListener("DOMMouseScroll", scrollIt));
//firefox용
//articles에 있는 article요소를 순차적으로 선택하여 mousewheel이벤트를 적용 scrollIt함수를 호출

function scrollIt(e){//scrollIt함수 생성, 이벤트객체를 인자값으로 전달받음.
    e.preventDefault();//window의 기본 스크롤 이벤트를 제거
    console.log(e);
    let delta = e.wheelDelta;
    //wheelDelta = 마우스 휠을 위로올렸을때 120을 반환하고, 밑으로 내렸을때 -120을 반환함
    if(!delta){//delta값이 없으면 e.detail값을 delta에다가 할당 *firefox전용
        delta = e.detail*-40;//파이어폭스의 경우 마우스 휠을 위로 올렸을때 -3이 밑으로 내렸을 때 3이 반환이 되므로 -40으로 값을 곱해서 음수=>정수로 정수=>음수로 변경하여 사용하여야 합니다.
    }

    const artArr = Array.prototype.slice.call(articles);
    //articles에 할당한 article들을 배열로 변경하여 artArr에 저장
    let i = artArr.indexOf(this);//스크롤 이벤트가 발생한 요소(this)의 인덱스 번호를 indexOf메서드로 구해줍니다.
    console.log(i)
    if(delta<0){//마우스 휠을 아래로 올렸을 경우
        let el;//el변수 생성
        (i<articles.length-1)?el = this.nextElementSibling : el = this;
        //현재 마우스휠 이벤트가 발생된요소의 순번(i)이 article요소의 갯수-1보다 작으면 this의 다음 요소를 그렇지 않으면 this를 변수 el에 저장
        let elTop = window.pageYOffset + el.getBoundingClientRect().top;
        //el요소의 y축 절대 좌표값을 elTop변수에 할당
        window.scrollTo({//window에 scrollTo API를 사용하여 elTop위치로 부드럽게 스크롤이동
            behavior:"smooth",//부드럽게 이동 시키기위해smooth를 설정
            left:0,//좌우로는 이동하는 것이 아니니 left를 0으로 설정
            top:elTop //elTop 위치로 이동
        });
    }else if(delta>0){//마우스 휠을 위로 올렸을 경우
        let el;//el변수 생성
        (i>0)? el = this.previousElementSibling : el = this;
        //i가 0보다 크면 this의 이전요소를 0보다 작으면 this를 el변수에 저장.
        let elTop = window.pageYOffset + el.getBoundingClientRect().top;
        //el요소의 y축 절대 좌표값을 elTop변수에 할당
        window.scrollTo({//window에 scrollTo API를 사용하여 elTop위치로 부드럽게 스크롤이동
            behavior:"smooth",//부드럽게 이동 시키기위해smooth를 설정
            left:0,//좌우로는 이동하는 것이 아니니 left를 0으로 설정
            top:elTop //elTop 위치로 이동
        });
    }

}
//===========================
let x = "Active한 웹퍼블리셔 권아라입니다";//typing요소에 들어갈 글자
let i = 0;//글자의 순번을 담는 변수
const typing = document.querySelector("#typing");//typing요소선택

function typeWriter(){//typeWriter함수 생성
    if(i < x.length){//i변수가 x변수의 글자수 보다 작은 숫자일 때 실행
        typing.innerHTML += x[i];//typing요소에 x변수의 글자 중 순번이 i번째인 글자를 더해서 출력
        i++//i변수에 1을 더해서 다시 i변수에 할당
        setTimeout(typeWriter,200);//setTimeout(함수,시간) : 해당 시간 경과 후 함수를 호출
    }else{//i값이 x의 글자수 보다 커지면 실행
    i = 0; //i를 0으로 초기화
    setTimeout(recall,1000); //1초 뒤에 recall함수를 호출
    }
}

function recall(){//recall함수 생성
    typing.textContent = "";//typing요소의 글자요소를 비워줌
    typeWriter();//다시 typeWriter함수를 호출
}

typeWriter();//함수호출