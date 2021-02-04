/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active

// sections 
let sections = document.querySelectorAll("section");
// Ul
let listLinks = document.getElementById("ulList");
// Btn Top
const btnUp = document.getElementById('btnUp')




function AddList() {
    sections.forEach(sectionAdd => {
        // Create List
        let list = document.createElement("li");
        // set Class into list
        list.classList.add("nav-item")
            /////////////////////////////////////////
            // Create link 
        let links = document.createElement("a");
        // set class and href into link 
        links.classList.add("nav-link");
        console.log(list)
            ////////////////////////////////////////
        const textNode = document.createTextNode(sectionAdd.id);
        links.appendChild(textNode);
        links.setAttribute("data-link", sectionAdd.id);
        list.appendChild(links)
        listLinks.appendChild(list)

    })
}

// getBoundingClientRect func To be determined Top 
function BoundingSections() {
    let targetSection = sections[0];
    sections.forEach(sectionRect => {
        let rect = sectionRect.getBoundingClientRect()
        if (rect.top > 0 && rect.top < 550) {
            targetSection = sectionRect;
        }


        console.log(rect.top)
    })
    return targetSection;
}
//// Scroll Func
function scrollWindow() {
    window.addEventListener('scroll', (e) => {
        btnUp.style.display = "block"
        let sectionScroll = BoundingSections(); // getBoundingClientRect func 
        sectionScroll.classList.add('your-active-class');

        sections.forEach(sectionActive => {
            if (sectionActive.id != sectionScroll.id & sectionActive.classList.contains('your-active-class')) {
                sectionActive.classList.remove('your-active-class');
            }
        })

        const linkActive = document.querySelector(`a[data-link="${sectionScroll.id}"]`)
        linkActive.classList.add('active')

        const classActive = document.querySelectorAll('.nav-link');
        classActive.forEach(activeClass => {
            if (activeClass.dataset.link != linkActive.dataset.link & activeClass.classList.contains('active')) {
                activeClass.classList.remove('active')
            }
        })

    })
}
// Click To Scroll Func
function ScrollClick() {
    listLinks.addEventListener("click", (e) => {
        console.log(e.target.dataset.link)
        const sectionView = document.querySelector('#' + e.target.dataset.link)
        sectionView.scrollIntoView({ 'behavior': 'smooth' });
        console.log(sectionView)

    })

    if (document.body.scrollTop > 300) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
}
btnUp.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

// play Add list Function
AddList();
/// play scrollWindow Func
scrollWindow();
//// play ScrollClick Func
ScrollClick();