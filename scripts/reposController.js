(function(module) {
  var reposController = {};
  console.log('reposController firing');
  reposController.index = function () {
    $('section').hide();
    $('#github-data').show();
    repos.requestRepos(repoView.init);
  };
  module.reposController = reposController;
})(window);
