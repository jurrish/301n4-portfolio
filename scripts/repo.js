(function(module) {
  var repos = {};
  repos.all = [];
//client side get request
//difference between ajax and GET:
//ajax has more options to send a request(any CRUD operation, GET, POST, DELETE), but when it's used, you have to fill on the type, headers, etc (if they're needed -- ie: check the docs);
//$.get/GET doesn't require those options.
  repos.requestRepos = function(callback) {
    $.ajax({
      url: '/github/user/jurrish/repos?sort=updated&per_page=10',
      type: 'GET'
      //-----------------------------
      // headers: {
      //   Authorization: 'token ' + GITHUB_TOKEN
      // } -----------------------
      //dont need this part because this is just making a request to the server i built (and doesnt need authorization) BUT it will need authorization when the server itself makes a request to the githup API
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
