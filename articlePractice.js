var articles = [];

function Article (pieces) {
  this.author = pieces.author;
  this.authorUrl = pieces.authorUrl;
  this.title = pieces.title;
  this.category = pieces.category;
  this.body = pieces.body;
  this.publishedOn = pieces.publishedOn;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  if(!this.publishedOn) {
    $newArticle.addClass('draft');
  }
  //setting attributes that ARENT THERE yet
  $newArticle.attr('data-category', this.category);
  $newArticle.attr('data-author', this.author);
  //getting then setting attributes that are already attached to elements
  //some of these need to be changed to match my index.html!!!!Check the html elements and make sure the attributes match the ones being get/set!!

  // <section id="articles">
  //   <article class="template" data-category="cat">
  //     <header>
  //       <h1>Title</h1>
  //       <div class="authorLine">
  //         By <address><a href="">Author Name</a></address>
  //         published <time pubdate datetime="2000-01-01">Publish Time</time>
  //       </div>
  //     </header>
  //     <section class="blog-filler"></section>
  //   </article>
  // </section>
  $newArticle.find('.address a').html(this.author);
  $newArticle.find('.address a').attr('href', this.authorUrl);
  $newArticle.find('h1:first').text(this.title);
  $newArticle.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
