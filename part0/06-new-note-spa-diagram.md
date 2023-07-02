sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST NEW NOTE // address: data.json
    activate server
    server-->>browser: Response (201) - Note Created
    deactivate server

    Note right of the browser: The browser does not re-render everything because it did not get a redirect, only a 201 response.