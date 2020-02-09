console.log('main.js is successfully loaded')

let mmi /* main-menu-item*/ = document.getElementsByClassName('main-menu-item');

for (var i = 0; i < mmi.length; i++) {
    mmi[i].addEventListener("mouseenter", showSub, false);
    mmi[i].addEventListener("mouseleave", hideSub, false);
}

// effect of showing submenu
function showSub() {
    if (this.children.length > 1) {
        this.children[1].style.height = "auto";
        this.children[1].style.overflow = "visible";
        this.children[1].style.opacity = "1";
        this.children[1].style.left = "2vw";
    } else {
        return false;
    }
}

// effect of hiding submenu
function hideSub() {
    if (this.children.length > 1) {
        this.children[1].style.height = "0px";
        this.children[1].style.overflow = "hidden";
        this.children[1].style.opacity = "0";
        this.children[1].style.left = "0vw";
    } else {
        return false;
    }
}



//opening of searching block
let block = document.getElementById('search');
let sic = document.getElementById('search-icon');
let sic2 = document.getElementById('search-icon2');
let xic3 = document.getElementById('close-icon');
sic.addEventListener('click', showing);

function showing() {
    block.style.height = 3.5 + 'vw';
    sic2.style.display = 'block';
    xic3.style.display = 'block';
}
xic3.addEventListener('click', hiding)

function hiding() {
    sic2.style.display = 'none';
    xic3.style.display = 'none';
    block.style.height = 0 + 'vw';
}



// changing photo and name by buttons

let worker = document.getElementById('worker-photo');
let leftBtn = document.getElementById('left-btn');
let rightBtn = document.getElementById('right-btn');
let body = document.getElementsByTagName('body')
let name = document.getElementById('worker-name');
let prof = document.getElementById('worker-prof');
leftBtn.addEventListener('click', changeLeft);
rightBtn.addEventListener('click', changeRight)
function changeLeft() {
    if (worker.classList.contains('worker_photo2') == true) {
        worker.classList.toggle('worker_photo3') 
        worker.classList.toggle('worker_photo2')
        name.innerHTML = 'Brad Jordon'
        prof.innerHTML = 'Web-programmer'
    } else if (worker.classList.contains('worker_photo3') == true) {
        worker.classList.toggle('worker_photo4') 
        worker.classList.toggle('worker_photo3')
        name.innerHTML = 'Sarrah Connor'
        prof.innerHTML = 'HR' 
    } else if (worker.classList.contains('worker_photo4') == true) {
        worker.classList.toggle('worker_photo5') 
        worker.classList.toggle('worker_photo4')
        name.innerHTML = 'Hannah Baker'
        prof.innerHTML = 'Graphic Designer' 
    } else if (worker.classList.contains('worker_photo5') == true) {
        worker.classList.toggle('worker_photo2') 
        worker.classList.toggle('worker_photo5')
        name.innerHTML = 'Jack Daniels'
        prof.innerHTML = 'Web-designer' 
    }
    // worker[0].style.zIndex = '1'
    // worker[1].style.zIndex = '0'
    // worker[2].style.zIndex = '0'
    // worker[3].style.zIndex = '0'
}
function changeRight() {
    if (worker.classList.contains('worker_photo2') == true) {
        worker.classList.toggle('worker_photo5') 
        worker.classList.toggle('worker_photo2')
        name.innerHTML = 'Hannah Baker'
        prof.innerHTML = 'Graphic Designer' 
    } else if (worker.classList.contains('worker_photo5') == true) {
        worker.classList.toggle('worker_photo4') 
        worker.classList.toggle('worker_photo5')
        name.innerHTML = 'Sarrah Connor'
        prof.innerHTML = 'HR' 
    } else if (worker.classList.contains('worker_photo4') == true) {
        worker.classList.toggle('worker_photo3') 
        worker.classList.toggle('worker_photo4') 
        name.innerHTML = 'Brad Jordon'
        prof.innerHTML = 'Web-programmer'
    } else if (worker.classList.contains('worker_photo3') == true) {
        worker.classList.toggle('worker_photo2') 
        worker.classList.toggle('worker_photo3')
        name.innerHTML = 'Jack Daniels'
        prof.innerHTML = 'Web-designer' 
    }
}





// img changing in creative design
let allBtn = document.getElementById('all');
let work1 = document.getElementById('work1');
let work2 = document.getElementById('work2');
let work3 = document.getElementById('work3');
let work4 = document.getElementById('work4');
let work5 = document.getElementById('work5');
let work6 = document.getElementById('work6');


let creativeBtn = document.getElementById('creative');
let agencyBtn = document.getElementById('agency');
let uxBtn = document.getElementById('ux');
let designBtn = document.getElementById('design');
let otherBtn = document.getElementById('other');
allBtn.addEventListener('click', allView);
creativeBtn.addEventListener('click', creativeChange);
agencyBtn.addEventListener('click', agencyChange);
uxBtn.addEventListener('click', uxChange);
designBtn.addEventListener('click', designChange);
otherBtn.addEventListener('click', otherCHange);

function allView() {
    work1.style.transform = 'scale(1)'
    work1.style.left = '0'
    work1.style.top = '0'

    work2.style.transform = 'scale(1)'
    work2.style.left = '30vw'
    work2.style.top = '0'

    work3.style.transform = 'scale(1)'
    work3.style.left = '60vw'
    work3.style.top = '0'

    work4.style.transform = 'scale(1)'
    work4.style.left = '0'
    work4.style.top = '25vw'

    work5.style.transform = 'scale(1)'
    work5.style.left = '30vw'
    work5.style.top = '25vw'

    work6.style.transform = 'scale(1)'
    work6.style.left = '60vw'
    work6.style.top = '25vw'

    creativeBtn.classList.remove('active_label');
    allBtn.classList.add('active_label');
    agencyBtn.classList.remove('active_label')
    uxBtn.classList.remove('active_label')
    designBtn.classList.remove('active_label')
    otherBtn.classList.remove('active_label')
}


function creativeChange() {
    work2.style.transform = 'scale(0)'
    work4.style.transform = 'scale(0)'
    work6.style.transform = 'scale(0)'

    work1.style.transform = 'scale(1)'
    work3.style.transform = 'scale(1)'
    work5.style.transform = 'scale(1)'

    work3.style.left = '30vw';
    work5.style.left = '60vw';
    work5.style.top = '0vw';

    creativeBtn.classList.add('active_label');
    allBtn.classList.remove('active_label');
    agencyBtn.classList.remove('active_label')
    uxBtn.classList.remove('active_label')
    designBtn.classList.remove('active_label')
    otherBtn.classList.remove('active_label')
} 

function agencyChange() {
    work1.style.transform = 'scale(1)'
    work1.style.left = '0'
    work1.style.top = '0'

    work2.style.transform = 'scale(1)'
    work2.style.left = '30vw'
    work2.style.top = '0'

    work3.style.transform = 'scale(1)'
    work3.style.left = '60vw'
    work3.style.top = '0'

    work4.style.transform = 'scale(1)'
    work4.style.left = '0'
    work4.style.top = '25vw'

    work5.style.transform = 'scale(1)'
    work5.style.left = '30vw'
    work5.style.top = '25vw'

    work6.style.transform = 'scale(1)'
    work6.style.left = '60vw'
    work6.style.top = '25vw'


    creativeBtn.classList.remove('active_label');
    allBtn.classList.remove('active_label');
    agencyBtn.classList.add('active_label')
    uxBtn.classList.remove('active_label')
    designBtn.classList.remove('active_label')
    otherBtn.classList.remove('active_label')
}

function uxChange() {
    work1.style.transform = 'scale(1)'
    work1.style.left = '0'
    work1.style.top = '0'

    work2.style.transform = 'scale(0)'

    work3.style.transform = 'scale(1)'
    work3.style.left = '30vw'
    work3.style.top = '0'

    work4.style.transform = 'scale(0)'

    work5.style.transform = 'scale(0)'

    work6.style.transform = 'scale(1)'
    work6.style.left = '60vw'
    work6.style.top = '0vw'

    creativeBtn.classList.remove('active_label');
    allBtn.classList.remove('active_label');
    agencyBtn.classList.remove('active_label')
    uxBtn.classList.add('active_label')
    designBtn.classList.remove('active_label')
    otherBtn.classList.remove('active_label')
}
function designChange() {
    work1.style.transform = 'scale(0)'

    work2.style.transform = 'scale(1)'
    work2.style.left = '0vw'
    work2.style.top = '0vw'

    work3.style.transform = 'scale(0)'

    work4.style.transform = 'scale(1)'
    work4.style.left = '30vw'
    work4.style.top = '0vw'

    work5.style.transform = 'scale(0)'

    work6.style.transform = 'scale(1)'
    work6.style.left = '60vw'
    work6.style.top = '0vw'

    creativeBtn.classList.remove('active_label');
    allBtn.classList.remove('active_label');
    agencyBtn.classList.remove('active_label')
    uxBtn.classList.remove('active_label')
    designBtn.classList.add('active_label')
    otherBtn.classList.remove('active_label')
}

function otherCHange() {
    work1.style.transform = 'scale(0)'

    work2.style.transform = 'scale(1)'
    work2.style.left = '0vw'
    work2.style.top = '0'

    work3.style.transform = 'scale(0)'

    work4.style.transform = 'scale(1)'
    work4.style.left = '30vw'
    work4.style.top = '0vw'

    work5.style.transform = 'scale(1)'
    work5.style.left = '60vw'
    work5.style.top = '0vw'

    work6.style.transform = 'scale(0)'

    creativeBtn.classList.remove('active_label');
    allBtn.classList.remove('active_label');
    agencyBtn.classList.remove('active_label')
    uxBtn.classList.remove('active_label')
    designBtn.classList.remove('active_label')
    otherBtn.classList.add('active_label')
}


//language changing
let current = document.getElementById('current');
let langList = document.getElementById('lang')
let uk = document.getElementById('uk');
let us = document.getElementById('us');
let bn = document.getElementById('bn');
current.addEventListener('click', function(){
    
    langList.classList.toggle('active_langlist')
});
uk.addEventListener('click', function() {
    current.innerHTML = uk.innerHTML + '<i class="fas fa-sort-down"></i>';
    uk.classList.add('active_li');
    us.classList.remove('active_li');
    bn.classList.remove('active_li');
    langList.classList.remove('active_langlist')
});
us.addEventListener('click', function() {
    current.innerHTML = us.innerHTML + '<i class="fas fa-sort-down"></i>';
    uk.classList.remove('active_li');
    us.classList.add('active_li');
    bn.classList.remove('active_li');
    langList.classList.remove('active_langlist')
});
bn.addEventListener('click', function() {
    current.innerHTML = bn.innerHTML + '<i class="fas fa-sort-down"></i>';
    uk.classList.remove('active_li');
    us.classList.remove('active_li');
    bn.classList.add('active_li');
    langList.classList.remove('active_langlist')
});





