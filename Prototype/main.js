function userModel() {
  // Property
  this.firstName = undefined;
  this.lastName = undefined;

  //Method
  this.pubDemo1 = function() {
    console.log("Public method");
    console.log(this.firstName);
    console.log(this.lastName);
  };
}

//------------------ Extend the property----------------//
userModel.prototype.address = undefined;

//-------------------Extend the method------------------//
userModel.prototype.pubDemo2 = function() {
  console.log("public Method : extend Version");
  console.log(this.address);
};

let userModelObj = new userModel();
userModelObj.firstName = "Tejas";
userModelObj.lastName = "Sawant";
userModelObj.address = "Thane";

// Calling the class method and prototype(extended) method
userModelObj.pubDemo1(); //class method
userModelObj.pubDemo2(); //prototype(extended) method
