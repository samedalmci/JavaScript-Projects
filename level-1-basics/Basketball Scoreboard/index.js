const home = document.querySelector(".scorehome");
const away = document.querySelector(".scoreaway");
const timer = document.querySelector(".timer-content");

let homecounter = 0;
let awaycounter = 0;


const points = {
  one: 1,
  two: 2,
  three: 3
};

function UpdateSkore(side, index) {
    let scoreToAdd = points[index];

    if (side === "hometeam") {
        homecounter += scoreToAdd;
        home.textContent = homecounter;
    } else if (side === "awayteam") {
        awaycounter += scoreToAdd;
        away.textContent = awaycounter;
    }
}

