(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    // $('section:not(#aboutMe)').hide();
    $('main section').hide();
    console.log('aboutController firing');
    // $('.nav-menu').show();
    // console.log('links id should be showing');
    $('#about-me').show();
    $('#about-me *').show();//WHY NOT working
    console.log('about-me should be showing!');
  };
  module.aboutController = aboutController;
})(window);
