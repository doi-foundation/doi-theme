/* for animating svg */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.path.line');
      const circles = entry.target.querySelectorAll('.path.circle');
  
      if (entry.isIntersecting) {
        square.classList.add('line-animation');
        circles.forEach(( thing) => thing.classList.add('circle-animation'));
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('line-animation');
      circles.forEach(( thing) => thing.classList.remove('circle-animation'));
    });
  });
  
  observer.observe(document.querySelector('.circle-line'));




  const observerlower = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.path.line');
      const circles = entry.target.querySelectorAll('.path.circle');
  
      if (entry.isIntersecting) {
        square.classList.add('line-animation');
        circles.forEach(( thing) => thing.classList.add('circle-animation'));
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('line-animation');
      circles.forEach(( thing) => thing.classList.remove('circle-animation'));
    });
  });
  
  observerlower.observe(document.querySelector('.circle-line-lower'));

$(function() {

  var triggerAtY = $('#leftbignumber').offset().top - $(window).outerHeight();

  $(window).scroll(function(event) {
    // #target not yet in view
    if (triggerAtY > $(window).scrollTop()) {
      return;
    }

    // run your task
    // Animate the element's value from x to y:
    $({someValue: 1}).animate({someValue: 1000000000}, {
      duration: 3000,
      easing:'swing', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#leftbignumber').text(commaSeparateNumber(Math.round(this.someValue)));
      },
      done: function() {
        $('#leftbignumber').text(commaSeparateNumber(1000000000) + "+");
      }
    });

    $({someValue: 1}).animate({someValue: 292000000}, {
      duration: 3000,
      easing:'swing', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#rightbignumber').text(commaSeparateNumber(Math.round(this.someValue)));
      },
      done: function() {
        $('#rightbignumber').text(commaSeparateNumber(292000000) + "+");
      }
    });



    // remove this event handler
    $(this).off(event);
  }); 


  

  function commaSeparateNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }
  return val;
  }
});




  
