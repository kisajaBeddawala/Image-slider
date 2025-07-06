const cards = document.querySelectorAll(".main-card");
let currentIndex = 0;

const bottomSlider = document.querySelector(".bottom-slider");
const visibleCount = 5;
const cardWidth = 170;
let liveIndex = visibleCount;

const originalCards = Array.from(bottomSlider.children);

for(let i = 0; i < visibleCount; i++){
    const firstClone = originalCards[i].cloneNode(true);
    bottomSlider.append(firstClone);
    const lastClone = originalCards[originalCards.length - i - 1].cloneNode(true);
    bottomSlider.prepend(lastClone);
}

bottomSlider.style.transform = `translateX(-${liveIndex * cardWidth}px)`;

function slideTo(index){
    bottomSlider.style.transition = "transform 0.5s ease";
    bottomSlider.style.transform = `translateX(-${index * cardWidth}px)`;
    liveIndex = index;
}

bottomSlider.addEventListener("transitionend",()=>{
    const totalCards = bottomSlider.children.length;

    if(liveIndex >= totalCards - visibleCount){
        bottomSlider.style.transition = "none";
        liveIndex = visibleCount;
        bottomSlider.style.transform = `translateX(-${liveIndex * cardWidth}px)`;
    }

    if(liveIndex < visibleCount){
        bottomSlider.style.transition = "none";
        liveIndex = totalCards - visibleCount * 2;
        bottomSlider.style.transform = `translateX(-${liveIndex * cardWidth}px)`;
    }
})
function showCard(index){
    cards.forEach(card => card.classList.remove("active"));
    cards[index].classList.add("active");
}

document.getElementById("right").addEventListener("click",function(){
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
    slideTo(liveIndex + 1);
});

document.getElementById("left").addEventListener("click",()=>{
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
    slideTo(liveIndex - 1);
})