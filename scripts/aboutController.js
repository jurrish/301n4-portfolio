(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    // $('section:not(#aboutMe)').hide();
    $('section').hide();
    console.log('aboutController firing');
    // $('.nav-menu').show();
    // console.log('links id should be showing');
    $('#aboutMe').show();
    $('#aboutMe *').show();//WHY NOT working
    console.log('aboutMe should be showing!');
  };
  module.aboutController = aboutController;
})(window);
