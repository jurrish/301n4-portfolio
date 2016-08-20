(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    console.log('projectsController firing');
    Project.fetchAll(projectView.initIndex);
  };
  module.projectsController = projectsController;
})(window);
