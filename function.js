$(document).ready(function() {
  $("button").click(function() {
    var images = [];
    var src = "";
    var imgCount = $(".destroyIt img").length;
    var slider = $(` <div id="myCarousel" class="carousel slide" data-ride="carousel" style="width: 200px; heigth:200px;">   <!-- Indicators -->
    <ol class="carousel-indicators">
    </ol>
    <div class="carousel-inner"></div>
    </div>`);

    $("body").append(slider);
    for (let i = 0; i < imgCount; i++) {
      src = $("img").attr("src");
      if (i == 0) {
        $(".carousel-indicators").append(
          `<li data-target="#myCarousel" data-slide-to="0" class="active"></li>`
        );
        $(".carousel-inner").append(
          `  
              <div class="item active">
                <img src=` +
            src +
            `>
              </div>`
        );
      } else {
        $(".carousel-indicators").append(
          '<li data-target="#myCarousel" data-slide-to=' + i + "></li>"
        );
        $(".carousel-inner").append(
          `  
              <div class="item">
                <img src=` +
            src +
            `>
              </div>`
        );
      }
      images.push(src);
      $("img:first").remove();
    }
    $("#myCarousel").append(`    
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>`);
    $(".destroyIt").remove();
  });
});
