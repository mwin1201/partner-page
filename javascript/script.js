const filterSelection = (choice) => {
    var cards, index;
    cards = document.getElementsByClassName("card");
    if (choice === "all") choice = "";
    for (index = 0; index < cards.length; index++) {
        removeClass(cards[index],"show");
        if (cards[index].className.indexOf(choice) > -1) {
            addClass(cards[index], "show");
        }
    }

};

const removeClass = (card, className) => {
    var arr1, arr2, index;
    arr1 = card.className.split(" ");
    arr2 = className.split(" ");
    if (arr1.indexOf(arr2) > -1) {
        arr1.splice(arr1.indexOf(arr2[index]), 1);
    }
    card.className = arr1.join(" ");
};

const addClass = (card, className) => {
    var arr1, arr2, index;
    arr1 = card.className.split(" ");
    arr2 = className.split(" ");
    for (index = 0; index < arr2.length; index++) {
        if (arr1.indexOf(arr2[index]) == -1) {
            card.className += " " + arr2[index];
        }
    }
};

//filterSelection("all");