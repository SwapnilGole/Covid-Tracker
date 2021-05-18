$(document).ready(function() {
    
    // YOUR CODE (NOT RELATED TO DIALOGFLOW MESSENGER)

    window.addEventListener('dfMessengerLoaded', function (event) {
        $r1 = document.querySelector("df-messenger");
        $r2 = $r1.shadowRoot.querySelector("df-messenger-chat");
        $r3 = $r2.shadowRoot.querySelector("df-messenger-user-input"); //for other mods

        var sheet = new CSSStyleSheet;
        sheet.replaceSync( `div.chat-wrapper[opened="true"] { height: 400px }`);
        $r2.shadowRoot.adoptedStyleSheets = [ sheet ];

        // MORE OF YOUR DIALOGFLOW MESSENGER CODE
    });
});