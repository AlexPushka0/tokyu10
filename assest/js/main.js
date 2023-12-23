//переход1
document.querySelector('a.arrow-down').addEventListener('click', function(e) {
    e.preventDefault();
    
    const section = document.getElementById('routes');
    const offset = section.offsetTop; 
  
    window.scroll({ top: offset, left: 0, behavior: 'smooth' });
  });
  

//переход 2
  document.querySelector('a.routes__btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const section = document.getElementById('history');
    const offset = section.offsetTop; 
  
    window.scroll({ top: offset, left: 0, behavior: 'smooth' });
  });
//переход3
document.querySelector('a.offer__btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const section = document.getElementById('routes-wrapper');
    const offset = section.offsetTop; 
  
    window.scroll({ top: offset, left: 0, behavior: 'smooth' });
  });