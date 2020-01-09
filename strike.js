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
            p.insertAdjacentHTML('beforeend', m);
            container.appendChild(p);
        });
    };

    window.strike = function (strikeDays, messages) {

        var strikeTest = window.location.search.search('strikeTest') != -1;

        var today = new Date();

        if (!Array.isArray(strikeDays))
        {
            strikeDays = [strikeDays];
        }

        var strikeIsToday = strikeDays.some(function (day) {
            return today.toDateString() == day.toDateString();
        });

        if (strikeTest || strikeIsToday) {
            onStrike(messages);
        }
    };

})(window, document);
