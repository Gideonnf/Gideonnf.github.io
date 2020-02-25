const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const t1 = new TimelineMax();

t1.fromTo(
    hero, 
    1, 
    {height: "0%"},
    {
         height: '80%', ease: Power2.easeInOut 
    }
).fromTo(
    hero, 
    1.2, 
    {width: '100%'}, 
    {
        width: '80%', ease: Power2.easeInOut 
    });