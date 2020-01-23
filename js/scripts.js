//business logic:
// var vowels = ["a", "e", "i", "o", "u","y", "A", "E", "I", "O", "U", "Y"]
 
    
        

// front end logic:
$(document).ready(function() {
    $("form.form").submit(function(event) {
        event.preventDefault();
        var sentence = $("input#pig-latin").val().split("");
        console.log(sentence);
        var pigLatin = function(str) {
            if (!isNaN(sentence) === true )  {
                
            } else if (str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u") {
                sentence.push("way");
            } else if (str[0] !== "a" || str[0] !== "a" || str[0] !== "e" || str[0] !== "i" || str[0] !== "o" || str[0] !== "u" ) {
                var firstLetter = [sentence.shift()];
                console.log(firstLetter);
                sentence.push(firstLetter);
                console.log(sentence);
                sentence.push("ay");
            } 
        }
        pigLatin(sentence);

        var newSentence = sentence.join("");
        $(".results").show();
        $(".results").text(newSentence);
    });
});
