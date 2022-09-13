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


  
