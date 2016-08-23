//populate filter, work on main-nav hide/show, work on set teaser (hide after 1st 3 lines of ipsum)
(function(module) {
  var projectView = {};

  projectView.populateFilters = function() {
    if($('#project-filter option:first').siblings().length === 0) {
      $('.project').each(function() {
        var val = $(this).find('h1').text();
        console.log(val);
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        $('#project-filter').append(optionTag);
        if(('#project-filter option[value"' + val +'"]').length === 0) {
          $('#project-filter').append(optionTag);
        };
      });
    }

  };

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
  projectView.collapseBody();//edit json files and add <p> tags and escape the <\/p>, or else it have more elements to hide.

// projectView.navDisplay = function() {
//   $('.nav-menu').on('click', function(e) {
//     e.preventDefault();
//     console.log('boop');
//     $('.hamburger-menu ul li').toggle();//create an icon so that it stays visible!!! it works, but it's resizing on click
//   });
// };
// projectView.navDisplay();//not working?? do i need to build out the hamburger menu first?

  projectView.initIndex = function() {
    console.log('boop');
    $('#projectsHere').empty();
    Project.all.forEach(function(a) {
      $('#projectsHere').append(a.toHtml());//for each instantiaton of the project object, i want to append the piece to the projectsHere id inside the index.html
    });
    // projectView.filterListener();
    projectView.populateFilters();
    projectView.collapseBody();
  };
  module.projectView = projectView;
})(window);
