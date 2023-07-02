sequenceDiagram
    participant browser
    participant server

    browser->>server: GET HTML // address: spa
    activate server
    server-->>browser: Response & HTML file
    deactivate server

    Note right of the browser: The browser reads the tags and fectches the CSS and JS.

    browser->>server: GET CSS FILE // address: main.css
    activate server
    server-->>browser: Response & CSS file
    deactivate server

    browser->>server: GET JAVASCRIPT // address: main.js
    activate server
    server-->>browser: Response & JS file
    deactivate server

    Note right of the browser: Inside the JavaScript there is a function that fectched the json data for the notes.

    browser->>server: GET NOTES JSON DATA // address: data.json
    activate server
    server-->>browser: Notes JSON object
    deactivate server