let card = require("../card.json");
let cardArr = [];
let choices = [];
let holder;
let count = 0;
let isLost = false;

/*******Functions********/
    // This function will loop through the card.json and take the id from each item
    //   and places it into cardArr to be able to randomize later with the shuffle function
function arrayId() {
    for (var i = 0; i < card.lenth; i++) {
        cardArr = card[i].id;
    }
}

    //this function is called every time an image is pressed
function clicked() {
    if (choices.length != count) {
        for (var j = 0; j < choices.length; j++) {
            if (holder = choices[i]) {
                lost();
            }
            else {
                //increase the count by 1
                count++;
                restart();
            }
        }
    } else {
        //you've won!
    }
}

    //This function first create a function to shuffle the cardArr
    //  then it will shuffle the cardArr
    //  then it will loop through the shuffled cardArr
    //  and create and image tag that will render on the page
function restart() {
    //Function that will shuffle the array
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    // Now we shuffle the cardArr
    cardArr = shuffle(cardArr);
    console.log(arr);
    // Now we take the shuffled cardArr and loop through it and render the results
    for (var k = 0; k < card.lenth; k++) {
        var imageUrl = cardArr[k].image;
        var images = $("<img>");
        gifImages.addId("card");
        gifImages.attr("src", imageUrl);
        gifImages.attr("id", cardArr[k]);
        $("#image").prepend(images);
    }
  
}

    //This will clear the rendering area and display you have lost
    //  and restart the game
function lost() {
    isLost = true;
    // this will clear the display area
    $(".react-space").empty();
    // this will display a button with the title "You Lost!"
    var looser = $("<button>");
    looser.addClass("looser");
    looser.text("You lost!")
    $(".react-space").append(looser);
}

/********Button Area*********/

    //when the start button is clicked
$("#start").on(click, function () {
    restart();
});

    //when the image is clicked
$(".imgage").on(click, function () {
    var imgChosen = this.id;
    choices.push(imgChosen);
    clicked();
});
