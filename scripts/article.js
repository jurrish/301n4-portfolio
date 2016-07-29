var articles = [];

function Article (pieces) {
  this.title = pieces.title;
  this.category = pieces.category;
  this.author = pieces.author;
  this.authorUrl = pieces.authorUrl;
  this.publishedOn = pieces.publishedOn;
  this.body = pieces.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();//clones the template including html elements and their values(empty) in each instance
//$newArticle.attr('name', value);
  $newArticle.attr('data-category', this.category);
  $newArticle.attr('data-author', this.author);

  $newArticle.find('authorLine a').html(this.author);
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('address a').text(this.author);
  $newArticle.find('authorLine a').attr('href', this.authorUrl);
  $newArticle.find('.blog-filler').html(this.body);
  $newArticle.find('h1').text(this.title);//doesn't need .template because we're instantiating inside the article.template div already

  $newArticle.find('time').html(' about ' + parseInt(new Date() - new Date(this.publishedOn) / 60 / 60 / 24 / 1000) + ' days ago ');

  $newArticle.append('<hr>');

  $newArticle.removeClass('template');//why not .template?
//add in logic for handlebars.compile(this instance);
  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  return articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
