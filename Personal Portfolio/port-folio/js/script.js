/*============= scroll sections active link ============*/
let sections = document.querySelector('section')
let navLinks = document.querySelector('header nav a')

window.onscroll = () => {
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttributes('id');

        if(top >= offset && top < offset + height)  {
            navLinks.ForEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });
        };
    });
    /*============= sticky navbar ============*/
    let header = document.queryselector
};