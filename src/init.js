$(document).ready(function(){
  window.dancers = [];

  $("button.lineup").on("click", function (event) {

    window.dancers.forEach(function (value) {
      value.lineUp();
      value._isConga = true;

    });
  });

  $("button.conga").on("click", function (event) {

    var leadDancer = dancers[0];
    var x = leadDancer._left + 5;
    var y = leadDancer._top + 5;
    leadDancer.setPosition(y, x);
    leadDancer._isConga = true;
    for(var i = 1; i < dancers.length; i++) {
      dancers[i]._isConga = true;
      x = x - 20;
      y = y - 20;
      dancers[i].setPosition(y, x);
    }
  });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      window.dancers
    );
    // debugger;
    dancer._$node.on('mouseenter', function (event){

      dancer._$node.addClass("rotate");
    });
    dancer._$node.on('mouseleave', function (event){
      dancer._$node.removeClass("rotate");
    });
    if (dancer instanceof TwirlyDancer) {
      dancer._$node.on('click', function () {
        dancer._$node.toggleClass("spin");
      });
    }
    window.dancers.push(dancer);

    $('body').append(dancer._$node);
  });
});

