(function(module) {
  var repoView = {};

  var ui = function() {
    var $githubData = $('#github-data');

    $githubData.find('ul').empty();
    $githubData.hide().siblings().show();
  };

  var render = Handlebars.compile($('#github-data').text());

  repoView.init = function () {
    ui();

    $('#github-data').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(window);
