var m_tabLinks = document.getElementsByClassName('tab-links');
var m_tabContents = document.getElementsByClassName('tab-contents');

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
document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const msgParam = url.searchParams.get('msg');

    if (msgParam) {
        document.getElementById('msgBox').textContent = msgParam;
        document.querySelector(".alert").style.display = "block";
        setTimeout(function() {
            window.location.href = url.origin + url.pathname;
        }, 3000); // 3000ms = 3 seconds
    }
});
