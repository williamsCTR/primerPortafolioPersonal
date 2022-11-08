/*TOGGEL "activo"*/
/*Cuando haga click en el boton le añado o le quito la clase al menu*/

const button = document.querySelector('.button')
const menu   = document.querySelector('.menu')

button.addEventListener('click',()=>{
    menu.classList.toggle('activo')
})


//Scroll//
const ico__front = document.getElementById(`ico__front`);
const ico_back = document.getElementById(`ico_back`);
const ico_otras = document.getElementById(`ico_otras`);
const animacionSobreMiP = document.getElementById(`animacionSobreMiP`);
const proyectosAnimacion = document.getElementById(`proyectosAnimacion`);
const formularioAnimacion = document.getElementById(`formularioAnimacion`);
const redesAnimacion = document.getElementById(`redesAnimacion`);

const cargarElemenento = (entradas, observador) => {
    
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting){
            entrada.target.classList.add(`show`);
        } else {
            entrada.target.classList.remove(`show`);
        }
    });
}

const observador = new IntersectionObserver( cargarElemenento,{
    root: null,
    rootMargin: `0px`,
    threshold:0.09
});

observador.observe(ico__front);
observador.observe(ico_back);
observador.observe(ico_otras);
observador.observe(animacionSobreMiP);
observador.observe(proyectosAnimacion);
observador.observe(formularioAnimacion);
observador.observe(redesAnimacion);


//formulario//