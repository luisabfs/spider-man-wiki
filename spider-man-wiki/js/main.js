(function(doc, win) {
    'use strict';
    
    const learnMoreBt = doc.querySelector('#learnMoreBt');
    learnMoreBt.addEventListener('click', openNewTab, false);

    function openNewTab() {
        event.preventDefault();
        win.open('https://www.superherostuff.com/biographies/spideybio.html');
    }

})(document, window);