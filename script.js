const cards = document.querySelectorAll(".main-card");
let currentIndex = 0;


function showCard(index){
    cards.forEach(card => card.classList.remove("active"));
    cards[index].classList.add("active");
}

document.getElementById("right").addEventListener("click",function(){
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
});

document.getElementById("left").addEventListener("click",()=>{
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
})