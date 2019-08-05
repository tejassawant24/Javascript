//-----------BUSINESS LOGIC----------//
//-----MADE BY DEVELOPER B-----//

function context() {
  this.developerBMethodDemo = function() {
    try {
      // create instance of repository class
      let repositoryObj = new repository();
      repositoryObj.developerAMethodDemo();
    } catch (ex) {
      throw ex;
    }
  };
}
