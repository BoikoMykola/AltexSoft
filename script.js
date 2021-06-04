const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function () {
    const navigate = document.getElementsByTagName("nav");
    document.body.classList.toggle("lock")
    navigate[0].classList.toggle("active");
    menuIcon.classList.toggle("active")
});


// MENU HIDDEN
let previous = 0;
window.addEventListener("scroll", function () {
    const menu = document.getElementsByClassName("header-container");
    const subNav = document.getElementsByClassName("sub-nav-block");
    if (pageYOffset > 670 && pageYOffset < previous) {
        document.getElementById("logo").src = "image/SKOUT2.png";
        menu[0].classList.add("header-container-fixed");
        subNav[0].classList.add("sub-nav-fixed");
    } else {
        document.getElementById("logo").src = "image/SKOUT.png";
        menu[0].classList.remove("header-container-fixed");
        subNav[0].classList.remove("sub-nav-fixed");
    }
    previous = pageYOffset;
});


// ACCORDION
const accordionHeader = document.getElementsByClassName('accordion-header'),
    active = document.getElementsByClassName('active-panel');
Array.from(accordionHeader).forEach(function (item) {
    item.addEventListener('click', function () {
        if (active.length > 0 && active[0] !== this.parentNode) {
            active[0].classList.remove('active-panel');
        }
        this.parentNode.classList.toggle('active-panel');
    });
});

// FAQs
const question = document.getElementsByClassName('question'),
    blockActive = document.getElementsByClassName('blockActive');
Array.from(question).forEach(function (item) {
    item.addEventListener('click', function () {
        if (blockActive.length > 0 && blockActive[0] !== this.parentNode) {
            blockActive[0].classList.remove('blockActive');
        }
        this.parentNode.classList.toggle('blockActive');
    });
});

// GLOSSARY
let arr = [];
let i = 0;
let listLength = 5;
let change = false;
if (document.documentElement.clientWidth >= 1440) {
    listLength = 16;
    change = true
}

// Получение информации с JSON - файла
function sendRequest() {
    let request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", "arr.json");
    request.onerror = function () {
        alert("Ошибка");
    }
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            arr = JSON.parse(this.response);
            getList(listLength, arr)
        }
    }
}

// Загрузка нового или предыдущего списка слайдов
let next = document.getElementsByClassName("next-btn");
let prev = document.getElementsByClassName("prev-btn");

next[0].addEventListener('click', getNextList);
prev[0].addEventListener('click', getPrevList);

function getNextList() {
    let sliderList = document.getElementById("sliderList");
    let lastElem = sliderList.lastChild.innerHTML
    let index = arr.findIndex(item => item.name === lastElem);
    i = index + 1;
    let listLengthNew = i + listLength;
    if (listLengthNew < arr.length) {
        getList(listLengthNew, arr)
    } else {
        getList(arr.length, arr)
    }
}

function getPrevList() {
    let sliderList = document.getElementById("sliderList");
    let firstElem = sliderList.firstChild.innerHTML
    let index = arr.findIndex(item => item.name === firstElem);
    i = index - listLength;
    if (i >= 0) {
        getList(index, arr)
    } else {
        i = 0
        getList(listLength, arr)
    }
}


// Изменение величины списка слайдов при переходе через breakpoint 1440px.
window.addEventListener(`resize`, () => {
    let change2 = document.documentElement.clientWidth >= 1440;
    if (change !== change2 && document.documentElement.clientWidth >= 1440) {
        change = change2;
        listLength = 16;
        getList(listLength, arr)
    } else if (change !== change2 && document.documentElement.clientWidth < 1440) {
        change = change2;
        listLength = 5;
        getList(listLength, arr)
    }
});

// Формирование списка слайдов
function getList(listLength, arr) {
    let sliderList = document.getElementById("sliderList");
    let ul = document.createElement("ul");
    ul.id = "sliderList";
    for (; i < listLength; i++) {
        let li = document.createElement("li");
        li.innerText = arr[i].name;
        ul.appendChild(li);
    }
    i = 0;
    if (ul.firstChild !== null)
        ul.firstChild.id = "active";
    let slide = arr.find(item => item.name === ul.firstChild.innerHTML);
    document.getElementById("phrase").innerHTML = slide.text;
    document.getElementById("title").innerText = slide.name;
    sliderList.replaceWith(ul);
    getSlide()

}

document.addEventListener("DOMContentLoaded", () => sendRequest());

// Отрисовка слайда
function getSlide() {
    const list = document.getElementById("sliderList");
    list.addEventListener("click", function (e) {
        let slide = arr.find(item => item.name === e.target.innerHTML);
        document.getElementById("phrase").innerHTML = slide.text;
        document.getElementById("title").innerText = slide.name;
        let listActive = document.getElementById('active');
        if (listActive !== this) {
            listActive.removeAttribute("id");
        }
        e.target.id = "active";
    })
}