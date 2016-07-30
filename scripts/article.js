var projects = [];

function Project (pieces) {//each piece will be different depending on my project. made on date?
  this.title = pieces.title;
  this.projectUrl = pieces.projectUrl;
  this.publishedOn = pieces.publishedOn;
  this.body = pieces.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();//clones the template including html elements and their values(empty) in each instance
//$newArticle.attr('name', value);
  $newProject.attr('data-category', this.category);
  $newProject.attr('data-author', this.author);

  $newProject.find('authorLine a').html(this.author);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('address a').text(this.author);
  $newProject.find('authorLine a').attr('href', this.authorUrl);
  $newProject.find('.blog-filler').html(this.body);
  $newProject.find('h1').text(this.title);//doesn't need .template because we're instantiating inside the article.template div already

  $newProject.find('time').html(' about ' + parseInt(new Date() - new Date(this.publishedOn) / 60 / 60 / 24 / 1000) + ' days ago ');

  $newProject.append('<hr>');

  $newProject.removeClass('template');//why not .template?
//add in logic for handlebars.compile(this instance);
  return $newArticle;
};

//which attribute do i want to return here? madeOn date?
rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

//
rawData.forEach(function(ele) {
  return articles.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projectsHere').append(a.toHtml());
});
