// DOM Selection
// document.getElementById -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Tayo D Last';

//  document.getElementsByTagName() -> HTMLcollections
const p = document.getElementsByTagName('p');

for( let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLcollections
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini Di udah dari Javascript';

// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 =document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

const li = document.querySelectorAll('li');
for ( let i = 0; i < li.length; i++) {
    li[i].style.color = 'red';
}

// mempersempit pencarian document
// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';

































