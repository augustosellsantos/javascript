const paragrafos = document.querySelector('.paragrafos');
const todosParagrafos = paragrafos.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;
console.log(backgroundColorBody);

for (let pagrafos of todosParagrafos) {
    pagrafos.style.backgroundColor = backgroundColorBody;
    pagrafos.style.color = '#FFFFFF';
}