let index = { 
  listen: function() {
    astilectron.onMessage(function(message) {
      switch (message.name) {
        case "about":
          index.about(message.payload);
          return {payload: "payload"};
          break;
          case "check.out.menu":
              asticode.notifier.info(message.payload);
              break;        
      }
    });
  }
}
