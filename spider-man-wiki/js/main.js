(function(doc) {
    'use strict';
    
    const topnavEl = doc.querySelector('#topnavClick');
    const dropdownEl = doc.querySelector('#dropdownClick');

    dropdownEl.addEventListener('click', dropdownMenu, false);

    function dropdownMenu() {
        if(topnavEl.className === "topnav") {
        topnavEl.className += " responsive";
        }else {
            topnavEl.className = "topnav";
        }
    }
})(document);