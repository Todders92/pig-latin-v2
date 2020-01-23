//business logic:
// var vowels = ["a", "e", "i", "o", "u","y", "A", "E", "I", "O", "U", "Y"]
 var pigLatin = function(str) {
    if (str[0] === "a" || str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u" || str[0] === "y" ) {
    alert("the first letter is a vowel")
    } 
}
    
        

// front end logic:
$(document).ready(function() {
    $("form.form").submit(function(event) {
        event.preventDefault();
        var sentence = $("input#pig-latin").val().split("");
        console.log(sentence);

        pigLatin(sentence);

        var newSentence = sentence.join("");
        $(".results").show();
        $(".results").append("<p>" + newSentence +"</p>");
    });
});
