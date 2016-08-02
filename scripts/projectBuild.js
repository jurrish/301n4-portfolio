var projects = [];

function Project (pieces) {
  this.title = pieces.title;
  this.projectUrl = pieces.projectUrl;
  this.publishedOn = pieces.publishedOn;
  this.body = pieces.body;
}

Project.prototype.toHtml = function () {
  var template = Handlebars.compile($('#projectTemplate').text());

  this.timeFrame = parseInt((new Date() - new Date(this.publishedOn)) / 60/ 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.timeFrame + ' days ago' : '(draft)';
  this.body = marked(this.body);

  return template(this);
  //constructing toHtml prototype with my project key/value pairs
};

if (typeof projectData !== 'undefined') {
  projectData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  projectData.forEach(function(element) {
    projects.push(new Project(element));
  });
}

projects.forEach(function(a) {
  $('#projectsHere').append(a.toHtml());
});

//populate filter, do publishedOn, append + <hr> separation
