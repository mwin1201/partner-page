const filterSelection = () => {
    const choices = [document.getElementById("partner_filter").value, document.getElementById("region_filter").value];
    var cards, card_index, choice_index;
    cards = document.getElementsByClassName("card");
    for (choice_index = 0; choice_index < choices.length; choice_index++) {
        if (choices[choice_index] === "all") choices[choice_index] = "";
    }
    for (card_index = 0; card_index < cards.length; card_index++) {
        removeClass(cards[card_index],"show");
        if (cards[card_index].className.indexOf(choices[0]) > -1 
            && 
            cards[card_index].className.indexOf(choices[1]) > -1) {
                addClass(cards[card_index], "show");
            }
    }
};

const removeClass = (card, className) => {
    var arr1, arr2, index;
    arr1 = card.className.split(" ");
    arr2 = className.split(" ");
    for (index = 0; index < arr2.length; index++) {
        if (arr1.indexOf(arr2[index]) > -1) {
            arr1.splice(arr1.indexOf(arr2[index]), 1);
        }
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

//var partner_filter = document.getElementById("partner_filter");
//var region_filter = document.getElementById("region_filter");
//var filter_form = document.getElementById("filters");
//partner_filter.addEventListener("change", filterSelection([partner_filter.value, region_filter.value]));
//region_filter.addEventListener("change", filterSelection([partner_filter.value,region_filter.value]));
//filter_form.addEventListener("submit", filterSelection(["technology","all"]));

// choices
// variation 1: ["all", "all"]
// variation 2: ["reseller", "all"]
// variation 3: ["reseller", "usa"]
// variation 4: ["all", "usa"]

// cards
// variations 1: ["card technology usa show"]