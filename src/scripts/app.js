// Change Section.
function changeSection() {
    var link = event.target;
    var section = '.' + link.dataset.section
    var links = document.querySelectorAll('.sidebar__links-item');

    links.forEach(function(el) {
        el.classList.remove('sidebar__links-item--active')
    });

    link.classList.add('sidebar__links-item--active');

    document.querySelectorAll('.section').forEach(function(el) {
        el.style.display = 'none';
    })

    document.querySelector(section).style.display = 'block';
}