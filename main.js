let sec = document.querySelectorAll("section");
let listLinks = document.getElementById("ulList");


function AddList() {
    sec.forEach(sec => {
        // Create List
        let list = document.createElement("li");
        // set Class into list
        list.setAttribute("class", "nav-item")
            /////////////////////////////////////////
            // Create link 
        let links = document.createElement("a");
        // set class and href into link 
        links.setAttribute("class", "nav-link")
        links.setAttribute("href", "#")
            ////////////////////////////////////////
            // get data-nav from section
        let dataNav = sec.getAttribute("data-nav")
        const textNode = document.createTextNode(dataNav)
        links.appendChild(textNode)
        list.appendChild(links)
        console.log(list)
        listLinks.appendChild(list)
    })
    let fragment = document.createDocumentFragment() = listLinks;
}
AddList();