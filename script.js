let menuList = document.getElementById("navlist")
navlist.style.maxHeight="10px";



function toggleMenu() {
        const nav = document.querySelector('.navlist');
        nav.classList.toggle('active');

        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }







