$(document).ready(function() {
    $("form.form").submit(function(event) {
        event.preventDefault();
        var sentence = $("input#pig-latin").val().split("");
        console.log(sentence);


        
        $(".results").show();
        $(".results").append("<p>" + sentence +"</p>")
    })
})