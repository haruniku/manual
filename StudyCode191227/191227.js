// 画像をランダムで表示させる①
$(function() {
  //処理
  $("#js-output").text("大吉");

  //ボタン取得
  $("#js-omikuji").on("click", function() {
    // textメソッドに出力
    var randomNum = Math.floor(Math.random() * 11);
    $("#js-randomNum").text(randomNum);

    //もし、1だったら大吉
    if (randomNum <= 1) {
      $("#js-output").append('<img src="" alt="">');
    } else if (randomNum <= 5) {
      $("#js-output").append('<img src="" alt="">');
    } else if (randomNum <= 9) {
      $("#js-output").append('<img src="" alt="">');
    } else {
      $("#js-output").append('<img src="" alt="">');
    }
  });
});

// 画像をランダムで表示させる②
$(function() {
  //処理
  $("#js-output").text("大吉");

  //ボタン取得
  $("#js-omikuji").on("click", function() {
    // textメソッドに出力
    var randomNum = Math.floor(Math.random() * 11);
    $("#js-randomNum").text(randomNum);

    //もし、1だったら大吉
    if (randomNum <= 1) {
      $("#js-output").html('<img src="" alt="">');
    } else if (randomNum <= 5) {
      $("#js-output").html('<img src="" alt="">');
    } else if (randomNum <= 9) {
      $("#js-output").html('<img src="" alt="">');
    } else {
      $("#js-output").html('<img src="" alt="">');
    }
  });
});
