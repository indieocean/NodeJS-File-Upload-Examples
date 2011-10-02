# Valums File-Uploader

### Pros:

* Utilises HTML5 multiple file uploader
* No flash plugins, only native browser technologies used
* Converts any html element into the upload browse button for nice easy styling.
* Drag and Drop functionality for HTML5 browsers
* Cookies available on the serverside
* All params automatically passed to server via query string (good for node)

### Cons:

* Only single file uploads possible with non-HTML5 browsers (IE)
* Progress bar only available for HTML5 browsers (websocket alternative could be created using [SocketIO](http://socket.io/ "SocketIO is a cross browser real-time solution for nodeJS")
  and [formidable](https://github.com/felixge/node-formidable)'s upload progress events.
* Cancellable uploads