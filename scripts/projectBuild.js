(function(module) {
  function Project (pieces) {
    this.title = pieces.title;
    this.projectUrl = pieces.projectUrl;
    this.publishedOn = pieces.publishedOn;
    this.body = pieces.body;
  }

  Project.all = [];

  Project.prototype.toHtml = function () {
    var template = Handlebars.compile($('#projectTemplate').text());

    this.timeFrame = parseInt((new Date() - new Date(this.publishedOn)) / 60/ 60 / 24 / 1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.timeFrame + ' days ago' : '(draft)';
    this.body = marked(this.body);

    return template(this);
    //constructing toHtml prototype with my project key/value pairs
  };

  //must turn this into JSON data...

  // if (typeof projectData !== 'undefined') {
  //   projectData.sort(function(a,b) {
  //     return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  //   });
  //
  //   projectData.forEach(function(element) {
  //     projects.push(new Project(element));
  //   });
  // }
  //
  // projects.forEach(function(a) {
  //   $('#projectsHere').append(a.toHtml());
  // });

  Project.loadAll = function(jsonData) {
    jsonData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    jsonData.forEach(function(pieces) {
      Project.all.push(new Project(pieces));
    });
  };
  //populate filter, do publishedOn, append + <hr> separation

  Project.fetchAll = function() {
    if(localStorage.projectData) {
      var jsonPackage = JSON.parse(localStorage.getItem('projectData'));
      Project.loadAll(jsonPackage);
      projectView.initIndex();
    } else {
      $.getJSON('../projectData.json', function(data) {
        console.log(data);
      }).done(function(data) {
        console.log(data);
        Project.loadAll(data);
        console.log(Project.all);
        var newJSON = JSON.stringify(data);
        localStorage.setItem('projectData', newJSON);
        projectView.initIndex();
      });
    };
  };
  module.Project = Project;
})(window);
