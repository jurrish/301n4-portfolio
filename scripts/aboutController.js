(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('main').hide();
    $('#about').fadeIn('fast');
  };
  module.aboutController = aboutController;
})(window);
