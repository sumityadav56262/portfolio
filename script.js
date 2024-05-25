var m_tabLinks = document.getElementsByClassName('tab-links');
var m_tabContents = document.getElementsByClassName('tab-contents');

var m_projectTabLinks = document.getElementsByClassName('project-tab-links');
var m_projectTabContents = document.getElementsByClassName('project-tab-contents');
var slideMenu = document.getElementById("ulMenu");

function showMenu(){
    slideMenu.style.right = "0px";
}
function hideMenu(){
    slideMenu.style.right = "-150px";
}

function openTab(_tabName){
    for(tabLink of m_tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of m_tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(_tabName).classList.add('active-tab')
}
function openProjectTab(_tabName)
{
    for(tabLink of m_projectTabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of m_projectTabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(_tabName).classList.add("active-tab");
}