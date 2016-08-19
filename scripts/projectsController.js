(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    Project.fetchAll();
  };
  module.projectsController = projectsController;
})(window);
