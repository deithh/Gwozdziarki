const list =document.querySelector('.slide-list');
const slides = Array.from(list.children);
const nextB = document.querySelector('.rightbutton');
const prevB = document.querySelector('.leftbutton');
const navu = document.querySelector('.slidercontrol');
const dots = Array.from(navu.children);

const slideWidth =slides[0].getBoundingClientRect().width;

const setSlidePos = (slide, index) => {
    slide.style.left = slideWidth * index  + 'px';
};

slides.forEach(setSlidePos);

const updateDots = (currentDot, targetDot) =>{
    currentDot.classList.remove('currentDot');
    targetDot.classList.add('currentDot');


}
const moveToSilde = (list, currentSlide, targetSlide) => {
    
    list.style.transform ='translateX(-' +targetSlide.style.left;
    currentSlide.classList.remove('current');
    targetSlide.classList.add('current');
    
}

nextB.addEventListener('click', e => {
    const currentDot = navu.querySelector('.currentDot');
    const currentSlide = list.querySelector('.current');
    const nextSlide = currentSlide.nextElementSibling;
    const targetDot = currentDot.nextElementSibling;
   
    moveToSilde(list, currentSlide, nextSlide);
    updateDots(currentDot, targetDot);
    
});
prevB.addEventListener('click', e => {
    const currentSlide = list.querySelector('.current');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = navu.querySelector('.currentDot');
    const targetDot = currentDot.previousElementSibling;

    moveToSilde(list, currentSlide, prevSlide);
    updateDots(currentDot, targetDot);
});

navu.addEventListener('click', e =>{
    const targetDot = e.target.closest('button');
    
    if (!targetDot) return;
    
    const currentSlide = list.querySelector('.current');
    const currentDot = navu.querySelector('.currentDot');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    
    
    moveToSilde(list, currentSlide, slides[targetIndex]);
    updateDots(currentDot, targetDot);
    
})