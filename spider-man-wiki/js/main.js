(function(doc, win) {
    'use strict';
    
    const topnavEl = doc.querySelector('#topnavClick');
    const dropdownEl = doc.querySelector('#dropdownClick');
    const learnMoreBt = doc.querySelector('#learnMoreBt');

    dropdownEl.addEventListener('click', dropdownMenu, false);
    learnMoreBt.addEventListener('click', openNewTab, false);

    function dropdownMenu() {
        if(topnavEl.className === "topnav") {
        topnavEl.className += " responsive";
        }else {
            topnavEl.className = "topnav";
        }
    }

    function openNewTab() {
        event.preventDefault();
        win.open('https://www.superherostuff.com/biographies/spideybio.html');
    }

})(document, window);