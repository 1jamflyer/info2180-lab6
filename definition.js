$(document).ready(function(){

var searchbutton= $(".search");
var link="request.php?q=";

searchbutton.on("click", function());

function function(event){
    var term= $("#term").val()
    
    $.ajax({
        url: link + term,
    })
    .done(function(data)){
        alert(data)
    }
}
})