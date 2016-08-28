(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?sort=updated&per_page=10',
      type: 'GET',
      headers: {
        Authorization: 'token ' + process.env.GITHUB_TOKEN
      }
    }).done(function(data) {
      console.log(data);
      repos.all = data;
      callback();
    });
  };

//defining .with here
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };
  module.repos = repos;
})(window);
