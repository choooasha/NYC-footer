const container1 = document.querySelector('.container1');
const pics = document.querySelectorAll('.gallery .pics');

container1.addEventListener('click', (e) => {
  
    let filterElem = e.target;
    if (!filterElem.classList.contains('filter')) {
        filterElem = e.target.closest('.filter');
    }
    if (!filterElem) return;

    const currentActive = container1.querySelector('.active');
    if (currentActive) currentActive.classList.remove('active');

    
    filterElem.classList.add('active');

  
    const filterValue = filterElem.getAttribute('data-filter');

   
    pics.forEach((pic) => {
        if (filterValue === 'All' || pic.classList.contains(filterValue)) {
            pic.classList.add('show');
            pic.classList.remove('hide');
        } else {
            pic.classList.add('hide');
            pic.classList.remove('show');
        }
    });
});
