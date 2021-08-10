// $(document).ready(function() {
//   $("button#hello").click(function() {
//     $("ul").prepend("<li>Hello!</li>");
//   });

//   $("button#goodbye").click(function() {
//     $("ul").prepend("<li>Goodbye!</li>");
//   });

//   $("button#stop").click(function() {
//     $("ul").prepend("<li>Stop copying me!</li>");
//   });
// });

$(document).ready(function() {
  $("button#hello").click(function() {
    $("body").removeClass();
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");

    // $("ul#user").children("li").first().click(function() {
    //   alert('hi');
    // });
    // $("ul#webpage").children("li").first().click(function() {
    //   alert('hi');
    // });

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    })
  });

  $("button#salad").click(function() {
    $("body").removeClass();
    $("ul#user").prepend("<li>SaLaD!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).toggleClass("body-green");
    });
      $("ul#webpage").children("li").first().click(function() {
      $(this).toggleClass("body-green");
    })
    });

  $("button#goodbye").click(function() {
    $("body").removeClass();
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("body").removeClass();
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });

  $("button#doge").click(function() {
    $("body").removeClass();
    $("ul#user").prepend("<li>BORK!</li>");
    $("ul#webpage").prepend("<li>Mewo Imma catten.</li>");
  });

  // $("button#cat").click(function() {
  //   $("body").removeClass();
  //   $("ul#user").prepend("<li>MEOW!</li>");
  //   $("ul#webpage").prepend("<li>Borka-borka me are doge.</li>");
  // });

  // $("button#insert-img").click(function() {
  //   $("body").removeClass();
  //   $("ul#webpage").prepend(<img src = "img/walrus.jpg"></img>);
  // });
});