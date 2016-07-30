// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var authorPicks = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(authorPicks);
    }
  });
};
articleView.populateFilters();

articleView.handleAuthorFilter = function() {
  var $articles = $('#articles article');
  $('#author-filter').on('change', function() {
    // var $default = $(this).attr('#author-filter:first child');
    if ($(this).val()) {
      $authorOption = $(this).val();
      $articles.hide();
      $('article[data-author="' + $authorOption + '"]').fadeIn();
      console.log('hides all articles');
    } else {
      $articles.fadeIn('fast');
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleAuthorFilter();


articleView.handleMainNav = function() {
  // TODO: Add an event handler to .main-nav element that will power the Tabs feature.
  //       Clicking any .tab element should hide all the .tab-content sections, and then reveal the
  //       single .tab-content section that is associated with the clicked .tab element.
  //       So: You need to dynamically build a selector string with the correct ID, based on the
  //       data available to you on the .tab element that was clicked.
  $('.nav-menu').on('click', function() {
    $('.tab-content').hide();
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  // TODO: Add an event handler to reveal all the hidden elements,
  //       when the .read-on link is clicked. You can go ahead and hide the
  //       "Read On" link once it has been clicked. Be sure to prevent the default link-click action!
  //       Ideally, we'd attach this as just 1 event handler on the #articles section, and let it
  //       process any .read-on clicks that happen within child nodes.

};

// TODO: Call all of the above functions, once we are sure the DOM is ready.
$();
