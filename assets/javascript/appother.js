var correctAnswer =[]



function scoring() {
    $("#submit-button").on("click", function() {
   if($('input[name=optradio1]:checked').val() === "checked") {
    var rightAnswer = $('input[name=optradio1]:checked').val()
    correctAnswer.push(rightAnswer)
    
   }
   if($('input[name=optradio2]:checked').val() === "checked") {
     
    correctAnswer.push($('input[name=optradio2]:checked').val())
   
   }
   
   if($('input[name=optradio3]:checked').val() === "checked") {
     
    correctAnswer.push($('input[name=optradio3]:checked').val())
    
   }
   if($('input[name=optradio4]:checked').val() === "checked") {
     
    correctAnswer.push($('input[name=optradio4]:checked').val())
    
   } 
   if($('input[name=optradio5]:checked').val() === "checked") {
     
    correctAnswer.push($('input[name=optradio5]:checked').val())
    
   }
   if($('input[name=optradio6]:checked').val() === "checked") {
     
    correctAnswer.push($('input[name=optradio6]:checked').val())
    
   }
   var correctScore = correctAnswer.length 

    var incorrectScore = 6 - correctAnswer.length
    var score = correctScore 
    $(".results").innerHTML(correctAnswer)
   console.log(correctAnswer, correctScore, incorrectScore)
    })

}
// $("#right-answer1").one("click", function() {
    
//     var rightAnswer = $('input[name=optradio1]:checked').val()
//     correctAnswer.push(rightAnswer)

//     console.log(correctAnswer)

// })
   


// $("#right-answer2").on("click", function() {
   
    
//     correctAnswer.push($("#right-answer2").text())

//     console.log(correctAnswer)


    
// }
// )
// $("#right-answer3").on("click", function() {
   
    
//     correctAnswer.push($("#right-answer3").text())

//     console.log(correctAnswer)


    
// }
// )

// $("#right-answer4").on("click", function() {
   
    
//     correctAnswer.push($("#right-answer4").text())

//     console.log(correctAnswer)


    
// }
// )

// $("#right-answer5").on("click", function() {
   
    
//     correctAnswer.push($("#right-answer5").text())

//     console.log(correctAnswer)


    
// }
// )

// $("#right-answer6").on("click", function() {
   
    
//     correctAnswer.push($("#right-answer6").text())

//     console.log(correctAnswer)


    
// }
// )

// // function updateScore() {
// //     if(click===false) {
// //         score ++ 
// //         console.log(score)
// //     }
// // }

// var clock = {
//     time: 5,

// timeConverter: function(t) {

//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);

//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
//   }

// } 



// var rightAnswer = ["Dom Perignon", "Lake Superior", "The Moon", "A farrier", "Greenland", "Madrid"]

$(document).ready(function() {
    scoring()
    $(".results").html(correctScore)
    

})