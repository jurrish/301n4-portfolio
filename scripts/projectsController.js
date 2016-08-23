(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    $('section').hide();
    $('#projectsHere').empty();
    $('#projectsHere').show();
    Project.fetchAll();
  };
  module.projectsController = projectsController;
})(window);
