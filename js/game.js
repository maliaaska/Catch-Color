
function Game(options) {
  this.rows = options;
  this.columns = options;
  this.randColor();
  this.won = false;
  this.loose = false;
  this.score = 0;
  this.colorsClicked = 0;
  this.collectionGuessed = 0;

}

var pressedBtId = [];
var storedPressedBtId = [];

  Game.prototype.start = function() {
  setInterval(function(){
    $("#color_board").empty();
    this.randColor();


    $('#color_board > div').click(function(){
      alert("ada");
      $(this).fadeOut( "500", function() {
        console.log("sdasdas");
       pressedBtId.push($(this).attr("data-row"));
      if (storedPressedBtId.length === 0){
        pressedBtId.push(storedPressedBtId);
        conosle.log("elo elo");
  //     } else if('') {
  //
  //       $.each(pressedBtId, function (idx, value){
  //         if ($.inArray(value, nextPressedBtId) !== -1) {
  //       console.log('Match colors: ' + value);
  //     } else {
  //       console.log('Not Match: ' + value);
  //   }
  // });

      }
      // $(this).animate({
      // color: "#fff",
      // }, 1000);

    });
    });

      console.log(pressedBtId);
  }.bind(this),5000);




 // To change colors of the color_board at first it needs to remove all colors from the board.
  // $('#color_board > div').on('click', 'appDetails',function(clicked){
    // alert('cazzzo');


    // var pressedId = $(this).attr('id');
    //   alert("you just pressed this button " + pressedId);
    //   });

};


// Game.prototype.clickedElements = function () {

      // $(this).addClass('blocked');
      // console.log(pressedId);
      // this.selectedColors.push(clicked);

    // else if (this.selecteeColors.length === 1) {
    //   this.colorsClicked++;
    //   $(this.div).addClass('blocked');
    //   this.selectedColors.push(this.div);
    //   console.log(this.selectedColors[0].id, this.selectedColors[1].id);
    //   if (this.selectedColors[0].id  === this.selectedColors[1].id) {
    //     this.pairsGuessed++;
    //     $(card).removeClass('blocked');
    //     this.selectedCards = [];
    //   } else {
    //     this.pairsClicked++;
    //     setTimeout(function(){
    //       $(this.selectedCards[0]).css('background-color', '#456783');
    //       $(this.selectedCards[1]).css('background-color', '#456783');
    //       this.selectedCards = [];
    //     }.bind(this), 1000);
    //   }
    // }



    // var selector = (['data-row'  + x ] + [' data-col'  + y ]);

// }.bind(this));
// };
Game.prototype.randColor = function(){
for (var row = 0; row < this.rows; row++) {
    for (var col = 0; col < this.columns; col++) {
      var newClass = ["cellBackground1", "cellBackground2", "cellBackground3", "cellBackground4", "cellBackground5", "cellBackground6"];
      var selectedColor = newClass[Math.floor(Math.random()* newClass.length)];
      $('#color_board').append($('<div>')
        .addClass(selectedColor)
        .attr('data-row', row)
        .attr('data-col', col)
      );
    }
  }
};







// // function checkelements(row, col) {
// //   var topElement = [row - 1, col];
// //   var leftElement = [row, col -1];
// //   var rightElement = [row, col + 1];
// //   var bottomElement = [row + 1, col];
// //
// //   var array = [top, left, right, bottom];
//
//
//  array.forEach(function(direction){
//    if ( i.hasClass !== direction[0].hasClass){
//      return false;
//    }
//
//  });
// }

  $(document).ready(function() {
    game = new Game(20);
  $("h1").addClass("header");
  $(".header").css("position related");
  $(".header").css("margin auto");


     game.start();
    //  game.clickedElements();


  });
