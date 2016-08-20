(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    console.log('projectsController firing');
    Project.fetchAll();
  };
  module.projectsController = projectsController;
})(window);
