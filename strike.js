(function (window, document) {
    "use strict";

    var onStrike = function (messages) {
        var body = document.getElementsByTagName('body')[0];

        // Create the main black full screen container
        var screen = document.createElement('div');
        screen.setAttribute('id', 'strike-screen');
        body.appendChild(screen);

        var container = document.createElement('div');
        screen.appendChild(container);

        // Create a `p` element for each phrase.
        messages.forEach(function (m) {
            var p = document.createElement('p');
            p.appendChild(document.createTextNode(m));
            container.appendChild(p);
        });
    };

    window.strike = function (strikeDay, messages) {

        var strikeTest = window.location.search.search('strikeTest') != -1;

        var today = new Date();
        var strikeIsToday = today.toDateString() == strikeDay.toDateString();

        if (strikeTest || strikeIsToday) {
            onStrike(messages);
        }
    };

})(window, document);
