const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {

document.body.classList.toggle('light-mode');

if(document.body.classList.contains('light-mode')){

document.documentElement.style.setProperty('--bg','#f8fafc');
document.documentElement.style.setProperty('--secondary','#ffffff');
document.documentElement.style.setProperty('--card','#e2e8f0');
document.documentElement.style.setProperty('--text','#0f172a');
document.documentElement.style.setProperty('--light','#334155');

themeToggle.innerHTML='☀️';

}else{

document.documentElement.style.setProperty('--bg','#0f172a');
document.documentElement.style.setProperty('--secondary','#111827');
document.documentElement.style.setProperty('--card','#1e293b');
document.documentElement.style.setProperty('--text','#f8fafc');
document.documentElement.style.setProperty('--light','#cbd5e1');

themeToggle.innerHTML='🌙';

}

});

const cards=document.querySelectorAll('.skill-card,.project-card');

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';
entry.target.style.transform='translateY(0px)';

}

});

},{threshold:0.1});

cards.forEach((card)=>{

card.style.opacity='0';
card.style.transform='translateY(40px)';
card.style.transition='all 0.7s ease';

observer.observe(card);

});
