$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});
function adjustScrollPosition() {
    var hash = window.location.hash;
    if (hash) {
      var target = document.querySelector(hash);
      if (target) {
        var headerHeight = document.querySelector('header').offsetHeight;
        window.scrollTo(0, target.offsetTop - headerHeight);
      }
    }
  }
  
  // Add event listener for hash changes
  window.addEventListener('hashchange', adjustScrollPosition);
  
  // Adjust scroll position on page load
  window.addEventListener('load', adjustScrollPosition);

  //java
  setInterval(function() {
    // Get the current image
    var current = document.querySelector('.banner img:not([style*="display: none"])');

    // Get the next image or the first image if the current image is the last one
    var next = (current.nextElementSibling) ? current.nextElementSibling : document.querySelector('.banner img:first-child');

    // Hide the current image and display the next image
    current.style.display = 'none';
    next.style.display = 'block';
  }, 5000);

  