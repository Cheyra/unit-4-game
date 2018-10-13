$("document").ready(function () {
        var numberToGuess = Math.floor(Math.random()*(120-19+1)+19);
    console.log(numberToGuess);

    var crystal_one=Math.floor(Math.random()*12);

    console.log(crystal_one);

    var crystal_two=Math.floor(Math.random()*12);
    var crystal_three=Math.floor(Math.random()*12);
    var crystal_four=Math.floor(Math.random()*12);
    var wins =0;
    console.log(wins)
    var losses = 0;
    var wins = 0;
    var totalScore = 0;
    $("#scoreTotal").html(totalScore)
   


    $("#wins").html(wins)
    $("#losses").html(losses)
    console.log(totalScore)
    $("#numberToGuess").html(numberToGuess)
        console.log(numberToGuess)
        $("#scoreTotal").html(totalScore)
    //////////////////////////////////////////////////////////////////////////////////////////////////////////    

    //resets values to start a new round
    function newGame() {
      
         numberToGuess = Math.floor(Math.random() * (120 - 19 + 1) + 19);

         crystal_one = Math.floor(Math.random() * 12);

         crystal_two = Math.floor(Math.random() * 12);
         crystal_three = Math.floor(Math.random() * 12);
         crystal_four = Math.floor(Math.random() * 12);


        $("#wins").html(wins)
        $("#losses").html(losses)
        console.log(totalScore)
        $("#numberToGuess").html(numberToGuess)
            console.log(numberToGuess)
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

 //iff stattement total score less than number to guess proceed with clicks
        if (totalScore < numberToGuess) {

            ////On click crystal one adds random number to total score
            $("#crystal_one").on("click", function () {
                totalScore = totalScore + crystal_one
                $("#scoreTotal").html(totalScore)
                conditions()
            })

            ////On click crystal two adds random number to total score
            $("#crystal_two").on("click", function () {
                totalScore = totalScore + crystal_two
                $("#scoreTotal").html(totalScore)
                console.log(totalScore)
                conditions()
            })




            ////On click crystal three adds random number to total score
            $("#crystal_three").on("click", function () {
                totalScore = totalScore + crystal_three
                $("#scoreTotal").html(totalScore)
                conditions()
            })

            ////On click crystal four adds random number to total score
            $("#crystal_four").on("click", function () {
                totalScore = totalScore + crystal_four
                $("#scoreTotal").html(totalScore)
                conditions()
            })

            console.log(totalScore)
        }
        /////////////////////////////////////////////////////////////////////////////////////////////
    
        //Game ending conditions
        function conditions() {
            //winning conditions
            if (totalScore === numberToGuess) {
                console.log(totalScore)
               totalScore = 0
               $("#scoreTotal").html()
                alert("Congratulations! You Won")
                wins++
                newGame()
            }
            //losing conditions
            else if (totalScore > numberToGuess) {
                losses++
               totalScore = 0
               $("#scoreTotal").html()
                alert("Sorry you lost")
                newGame()
            }


        }
    
    

       
})

