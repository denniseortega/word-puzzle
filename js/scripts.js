var input=[];
var letters=[];
var vowels =["a", "e", "i","o","u","y" ];


$(document).ready(function() {
  $(".btn").click(function(event){
    console.log("hello");
    event.preventDefault();
  var letters=$("#sentence").val();
  console.log("the value is"+sentence.length);
  input= letters.split("");
  $("#sentence").show();
  for (var i=0; i < input.length; i++){
    for (var j=0; j < vowels.length; j++){
    if (input[i]==vowels[j]) {
      input[i]="-";
      }
    }
  }
    console.log(input);
});
});
