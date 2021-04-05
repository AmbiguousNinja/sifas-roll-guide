var good_cards = [
    "https://kachagain.com/sifas/images/cards/128.png",
    "https://kachagain.com/sifas/images/cards/56.png",
    "https://kachagain.com/sifas/images/cards/149.png",
    "https://kachagain.com/sifas/images/cards/180.png",
    "https://kachagain.com/sifas/images/cards/223.png",
    "https://kachagain.com/sifas/images/cards/253.png",
    "https://kachagain.com/sifas/images/cards/282.png",
    "https://kachagain.com/sifas/images/cards/295.png",
    "https://kachagain.com/sifas/images/cards/340.png",
    "https://kachagain.com/sifas/images/cards/362.png",
    "https://kachagain.com/sifas/images/cards/393.png",
    "https://kachagain.com/sifas/images/cards/420.png",
]

function o7() {
    var you_box = document.getElementById("you-box");
    you_box.src = good_cards[Math.floor(Math.random() * good_cards.length)];
}
