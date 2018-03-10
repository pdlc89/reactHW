import React, { Component } from 'react';
import Card from '../Card';
import Choices from '../../choices.json';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            clicked: [],
            choices: Choices
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        });

    }
	render() {
		return(
            <div>
                <nav className="navbar">
                    <div id="title">
                        <h1><a href="/">Memory Game</a></h1>
                    </div>
                    <ul>
                        <li>
                            <h4>Click on every Image Once and ONLY ONCE to Win!</h4>
                        </li>
                        <li>
                            Score: {this.state.count}/<b>10</b>
                        </li>
                    </ul>
                </nav>
                <div className="game">
                    {this.state.choices.map((choice, index) => (
                        <Card choice={choice} handleClick={this.handleClick} key={index} />
                    ))}
                </div>
            </div>
			

		);
	}
}
export default Game;
// let card = Choices;
// let cardArr = [];
// let choices = [];
// let holder;
// let count = 0;
// let isLost = false;

// /*******Functions********/
// // This function will loop through the card.json and take the id from each item
// //   and places it into cardArr to be able to randomize later with the shuffle function
// function arrayId() {
//     for (var i = 0; i < card.lenth; i++) {
//         cardArr = card[i].id;
//     }
// }

// //this function is called every time an image is pressed
// function clicked() {
//     if (choices.length != count) {
//         for (var j = 0; j < choices.length; j++) {
//             if (holder = choices[j]) {
//                 lost();
//             }
//             else {
//                 //increase the count by 1
//                 count++;
//                 restart();
//             }
//         }
//     } else {
//         //you've won!
//     }
// }

// //This function first create a function to shuffle the cardArr
// //  then it will shuffle the cardArr
// //  then it will loop through the shuffled cardArr
// //  and create and image tag that will render on the page
// function restart() {
//     //Function that will shuffle the array
//     function shuffle(array) {
//         var currentIndex = array.length, temporaryValue, randomIndex;

//         // While there remain elements to shuffle...
//         while (0 !== currentIndex) {

//             // Pick a remaining element...
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex -= 1;

//             // And swap it with the current element.
//             temporaryValue = array[currentIndex];
//             array[currentIndex] = array[randomIndex];
//             array[randomIndex] = temporaryValue;
//         }

//         return array;
//     }
//     // Now we shuffle the cardArr
//     cardArr = shuffle(cardArr);
//     console.log(cardArr);
//     // Now we take the shuffled cardArr and loop through it and render the results
//     for (var k = 0; k < card.lenth; k++) {
//         let imageUrl = cardArr[k].image;
//         let images = document.getElementByTagName("img");
//         images.addId("card");
//         images.attr("src", imageUrl);
//         images.attr("id", cardArr[k]);
//         document.getElementById("#image").prepend(images);
//     }

// }

// //This will clear the rendering area and display you have lost
// //  and restart the game
// function lost() {
//     isLost = true;
//     // this will clear the display area
//     document.getElementByClass("react-space").empty();
//     // this will display a button with the title "You Lost!"
//     let looser = document.getElementsByTagName("button");
//     looser.addClass("looser");
//     looser.text("You lost!")
//     document.getElementByClass("react-space").append(looser);
// }

// /********Button Area*********
// let el = document.getElementByTagName("img");
// el.addEventListener("click", function () {
//     console.log("this worked")
// };
// //when the start button is clicked
// $("#start").on(click, function () {
//     restart();
// });

// //when the image is clicked
// $(".imgage").on(click, function () {
//     var imgChosen = this.id;
//     choices.push(imgChosen);
//     clicked();
// });
// */
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isToggleOn: true };

//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }

//     render() {
//         console.log("this worked")
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.count++}
//             </button>
//         );
//     }
// }

