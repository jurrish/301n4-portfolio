(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    Project.fetchAll(projectView.initIndex);
  };
  module.projectsController = projectsController;
})(window);
