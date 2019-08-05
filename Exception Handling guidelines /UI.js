//----------------------UI-----------------------------------//
//----------MADE BY DEVELOPER C---------//

function ui() {
  this.developerCMethodDemo = function() {
    try {
      // create an instance of context class
      let contextObj = new context();
      contextObj.developerBMethodDemo();
    } catch (ex) {
      console.log(ex.message);
      console.log(ex.stack);
    } finally {
      console.log("finally executed");
    }
  };
}

// To call developerCMethodDemo()
let uiObj = new ui();
uiObj.developerCMethodDemo();
