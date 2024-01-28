/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Samuel Marsh
     Date:   1/24/2024

     Filename: js03.js
 */

     //Days of the week 
     let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     window.addEventListener("load", addWeekDays);

     //Function to write weekday names into the calendar
     function addWeekDays() {
        let i = 0; // initial counter value 
     

     //reference the collection of heading cells in the table
     let headingCells = document.getElementsByTagName("th");

     // write each of the seven days into a heading cell
     while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];

        //increase the counter by 1
        i++;
     
     }

    }

    //The code to allow the showgames() function to load

    window.addEventListener("load", showGames);

    //Function to write game information into the calendar (Loop)
    function showGames() {
        for ( let i = 0; i < gameDates.length; i++) {
            let gameInfo = "";


            //Open the paragraph (Display the Name)
            switch (gameResults [i]) {
                case "W":
                    gameInfo += "<p class='win'>";
                    break;
                case "L":
                    gameInfo += "<p class= 'lose'>";
                    break;
                case "S":
                    gameInfo += "<p class= 'suspended'>";
                    break;
                case "P":
                    gameInfo += "<p class='postponed'>";
                    break;
            }
        
            //Display the game location
         if (gameLocations[i] === "h") {
            gameInfo += "vs. ";
         } else if (gameLocations[i] === "a") {
            gameInfo += "@ ";
         }

            //Include the opponent (Display the game/ result)
            gameInfo += gameOpponents[i] + ": (" + runsScored[i] +
            " - " + runsAllowed[i] + ")";

            //Display innings played for suspended, shortened, or extrainning games
            if (gameInnings[i] < 5) {
                gameInfo += "[" + gameInnings[i]+"]***";
            } else if (gameInnings[i] <9){
                gameInfo += " [" + gameInnings[i]+ "]*";
            } else if (gameInnings[i] >9) {
                gameInfo += " [" + gameInnings[i] + "]";
                }
            

            //Close the paragraph
            gameInfo += "</p>";

            //Write the information into a table cell (Write the content into the table cell matching the game date)
            let tableCell = document.getElementById(gameDates[i] );
            tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
        }
    }