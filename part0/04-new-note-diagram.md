sequenceDiagram
    participant browser
    participant server

    browser->>server: POST NEW NOTE // address: new_note
    activate server
    server-->>browser: Response (302) & Redirect // address: notes
    deactivate server

    browser->>server: GET CSS FILE // address: main.css
    activate server
    server-->>browser: Response & CSS file
    deactivate server

    browser->>server: GET JAVASCRIPT // address: main.js
    activate server
    server-->>browser: Response & JS file
    deactivate server


    browser->>server: GET NOTES JSON DATA // address: data.json
    activate server
    server-->>browser: Notes JSON object
    deactivate server