const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelectorAll('.nav__link');
const myButton = document.getElementById("scrollToTop");
const sections = document.querySelectorAll('div[id="1"], div[id="2"], div[id="3"], div[id="4"]');
const nav = document.querySelector('.nav');

const scrollFunction = () => {
    myButton.style.display = (document.documentElement.scrollTop > 20) ? "block" : "none";
}

const getOffsetTop = elem => {
    let offsetTop = 0;
    while (elem) {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
        elem = elem.offsetParent;
    }
    return offsetTop;
};

const updateActiveLink = () => {
    let index = sections.length;
    while (--index && (window.pageYOffset + 50 < getOffsetTop(sections[index]))) {}
    navLinks.forEach(link => link.classList.remove('active'));
    if (index >= 0) {
        const activeLinkId = sections[index].getAttribute('id');
        const activeLink = document.querySelector(`.nav__link[href="#${activeLinkId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const handleNavToggle = () => {
    const navLinksContainer = document.getElementById("nav-links");
    navLinksContainer.classList.toggle("show");
}

const handleScroll = () => {
    if (window.pageYOffset > 50) {
        nav.classList.add('nav__fixed');
    } else {
        nav.classList.remove('nav__fixed');
    }
    updateActiveLink();
    scrollFunction();
}

navToggle.addEventListener("click", handleNavToggle);
myButton.addEventListener('click', scrollToTop);
window.addEventListener('scroll', handleScroll);

navLinks[0].classList.add('active');
