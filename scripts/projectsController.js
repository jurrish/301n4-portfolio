(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    $('section').hide();
    $('#projectsHere').empty();
    $('#projectsHere').show();
    Project.fetchAll();
  };
  //lol boop
  module.projectsController = projectsController;
})(window);
