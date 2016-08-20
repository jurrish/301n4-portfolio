(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('main').hide();
    console.log('aboutController firing');
    $('#about').fadeIn('fast');
  };
  module.aboutController = aboutController;
})(window);
