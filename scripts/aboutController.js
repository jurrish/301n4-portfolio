(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    // $('section:not(#aboutMe)').hide();
    $('main').hide();
    console.log('aboutController firing');
    $('#aboutMe').show();
    $('#aboutMe *').show();//WHY NOT working
    console.log('aboutMe should be showing!');
  };
  module.aboutController = aboutController;
})(window);
