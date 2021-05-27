let menuIcon = document.querySelector(".menuIcon");
menuIcon.addEventListener("click", function () {
    let navigate = document.getElementsByTagName("nav");
    document.body.classList.toggle("lock")
    navigate[0].classList.toggle("active");
    menuIcon.classList.toggle("active")
});

// ACCORDION

let accordionHeader = document.getElementsByClassName('accordionHeader'),
    active = document.getElementsByClassName('activePanel');

Array.from(accordionHeader).forEach(function(item) {
    item.addEventListener('click', function() {
        if (active.length > 0 && active[0] !== this.parentNode)
        {
            console.log(active[0].classList)
            active[0].classList.remove('activePanel');
        }
        this.parentNode.classList.toggle('activePanel');
    });
});

// FAQs

let question = document.getElementsByClassName('question'),
    blockActive = document.getElementsByClassName('blockActive');

Array.from(question).forEach(function(item) {
    item.addEventListener('click', function() {
        if (blockActive.length > 0 && blockActive[0] !== this.parentNode)
        {
            blockActive[0].classList.remove('blockActive');
        }
        this.parentNode.classList.toggle('blockActive');
    });
});

// GLOSSARY

let arr = [
    {li:"IP Address", text: "Code that is masked so that a human or computer unintentionally allows it to replicate itself to spread for the purpose of compromising, corrupting, or destroying a system. "},
    {li: "Malware", text: "Malicious software that blocks access to a system until a ransom is paid."},
    {li: "Penetration Test", text: "Code that is masked so that a human or computer unintentionally"},
    {li: "Phishing/ Spearphishi", text: `Lorem ipsum mauris integer in nam gravida adipiscing ultricies, vitae `},
    {li:"Ransomware", text: "Malicious software that blocks access to a system until a ransom is paid."},
    {li:"Botnet", text: "Lorem, ipsum tempus rutrum tellus lorem sed nulla gravida bibendum "},
    {li:"Breach", text: "Lorem ipsum risus non, molestie nec mauris a quisque vulputate. "},
    {li:"Cloud", text: "Lorem ipsum a enim, elementum leo non: cursus a proin "},
    {li:"DDoS", text: "Lorem ipsum eu sodales lorem nam sodales adipiscing eros nibh "},
    {li:"Domain", text: "Malicious software that blocks access to a system until a ransom is paid."},
    {li:"Endpoint", text: "Lorem ipsum a enim, elementum leo non: cursus a proin "},
    {li:"Exploit", text: "Lorem ipsum risus non, molestie nec mauris a quisque vulputate, "},
    {li:"Firewall", text: "Lorem ipsum et eget sagittis nam sem donec porttitor bibendum. "},
    {li:"Session Hijacking", text: "Malicious software that blocks access to a system until a ransom is paid."},
    {li:"Social Engineering", text: "Lorem ipsum gravida auctor sit amet commodo mauris sapien justo."},
    {li:"Software", text: "Lorem ipsum gravida auctor sit amet commodo mauris sapien justo."},
    {li:"SOC", text: "Malicious software that blocks access to a system until a ransom is paid."},
    {li:"Trojan Horse", text: "Lorem ipsum et eget sagittis nam sem donec porttitor bibendum."},
    {li:"VPN", text: "Lorem ipsum gravida auctor sit amet commodo mauris sapien justo"},
    {li:"Virus", text: "Code that is masked so that a human or computer unintentionally allows it to replicate itself to spread for the purpose of compromising, corrupting, or destroying a system. "},
    {li:"Worm", text: "Malicious software that blocks access to a system until a ransom is paid."},
]
let i = 0;
let listLength = 5;
if(document.documentElement.clientWidth >= 1440)
{listLength = 16}


// let rightA = document.getElementsByClassName("arrow1");
// let leftA = document.getElementsByClassName("arrow2");
//
// rightA[0].addEventListener('click', getNewList);
// leftA[0].addEventListener('click', getOldList);
//
// function getNewList() {
//     i = i + 5;
//     if(i<arr.length){
//         getList(listLength, arr);
//     } else {
//         i = arr.length;
//     }
// }
//
// function getOldList() {
//     i = i - 5;
//     if(i <= 0){
//         getList(listLength, arr);
//     } else {
//         i = 0;
//     }
// }


// window.addEventListener(`resize`, () => {
//
//     if(document.documentElement.clientWidth >= 1440)
//     {listLength = 16} else {listLength = 5}
//     console.log(listLength)
//     getList(listLength ,arr)
// }, false);

function getList(listLength, arr) {
    console.log(i);
    let sliderList = document.getElementById("sliderList");
    let ul = document.createElement("ul");
    ul.id = "sliderList";
    for (; i < listLength; i++) {
        let li = document.createElement("li");
        li.innerText = arr[i].li;
        ul.appendChild(li);
    }
    if(ul.firstChild !== null )
    ul.firstChild.id = "active";

    sliderList.replaceWith(ul);
    getSlide()
}

// function getSlide(e, arr) {
//     let slide = arr.find(item => item.li === e.turget.innerHTML);
// }

document.addEventListener("DOMContentLoaded", ()=> getList(listLength, arr));

function getSlide() {
    let list = document.getElementById("sliderList");
    list.addEventListener("click", function (e) {
        let slide = arr.find(item => item.li === e.target.innerHTML);
        document.getElementById("phrase").innerHTML = slide.text;
        document.getElementById("title").innerText = slide.li;
let listActive = document.getElementById('active');
console.log(listActive)
        if (listActive !== this)
                    {
                        listActive.removeAttribute("id");
                    }
        e.target.id = "active";

        // let question = document.getElementsByClassName('question'),
        //     blockActive = document.getElementsByClassName('blockActive');
        // Array.from(list).forEach(function(item) {
        //     item.addEventListener('click', function() {
        //         if (blockActive.length > 0 && blockActive[0] !== this.parentNode)
        //         {
        //             blockActive[0].classList.remove('blockActive');
        //         }
        //         this.parentNode.classList.toggle('blockActive');
        //     });
        // });
    })
}