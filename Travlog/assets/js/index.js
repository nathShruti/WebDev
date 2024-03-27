// Owl Carousel
$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
    
      margin: 15,
      loop: false,
      nav: true,
      dots: false,
      responsive: {
        			0: {
        				items: 1
        				// nav: true
        			},
        			480: {
        				items: 2,
        				nav: false,
                        loop: true
        			},
        			768: {
        				items: 2,
        				// nav: true,
        				loop: true
        			},
        			992: {
        				items: 3,
        				// nav: true,
        				loop: true
        			}
        		},
    });
  });

// Counter Function
$('.box-head').each(function() {
	var $this = $(this),
		countTo = $this.attr('data-count');
	
	$({ countNum: $this.text()}).animate({
	  countNum: countTo
	},
  
	{
  
	  duration: 4000,
	  easing:'linear',
	  step: function() {
		$this.text(Math.floor(this.countNum));
	  },
	  complete: function() {
		$this.text(this.countNum);
		//alert('finished');
	  }
  
	});  
	
  
  });

$('.test-scroll').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	items: 1,
	autoplay: true,
    autoplayTimeout:3500,
    autoplayHoverPause:true
})

// Get the element to animate
const element = document.querySelector('.travel-point .container');

// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    // If element is in viewport, add the 'show' class to trigger the animation
    if (entry.isIntersecting) {
      element.classList.add('show');
    }
    else {
      element.classList.remove('show');
    }
  });
}, options);

// Start observing the element
observer.observe(element);