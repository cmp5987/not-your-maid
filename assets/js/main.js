$( document ).ready(function() {
    console.log( "ready!" );

    $(".clickableImage").click(function(){
        $("#img01").attr("src", this.src);
        $("#myModal").css("display", "block");
        $("body").css("overflow", "hidden");
      });
    $(".close").click(function(){
        $("#myModal").css("display", "none");
        $("body").css("overflow", "visible");
    });
});