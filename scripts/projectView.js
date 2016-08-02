//populate filter, work on main-nav hide/show, work on set teaser (hide after 1st 3 lines of ipsum)
var projectView = {};

projectView.populateFilters = function() {
  $('.project').each(function() {
    var val = $(this).find('h1').text();
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    $('#project-filter').append(optionTag);
  });
};
projectView.populateFilters();

projectView.filterListener = function () {
  $('#project-filter').on('change', function() {
    if($(this).val()) {
      $('.project').hide();
      $('[data-category="' + $(this).val() + '"]').fadeIn('slow');
    } else {
      $('.project').fadeIn('slow');
      $('project.template').hide();
    };
  });
};
projectView.filterListener();

projectView.collapseBody = function () {
  console.log($('.blog-filler *:nth-of-type(n+2)'));
  $('.blog-filler *:nth-of-type(n+2)').hide();
};
projectView.collapseBody();
