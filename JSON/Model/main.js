/// <reference path="customerModel.js"/>
/// <reference path="customerCommunicationModel.js"/>
/// <reference path="customerAddressModel.js"/>

function setCustomerData() {
  //one to one relationship//

  let customerModelObj = new customerModel();
  customerModelObj.firstName = "Tejas";
  customerModelObj.lastName = "Sawant";
  customerModelObj.age = "21";
  customerModelObj.dataOfBirth = "24-12-1997";

  let customerCommunicationModelObj = new customerCommunicationModel();
  customerCommunicationModelObj.mobileNumber = "9875647654";
  customerCommunicationModelObj.emailId = "sawanttejas10@gmail.com";

  customerModelObj.customerCommunication = customerCommunicationModelObj;

  let customerAddressModelObj = new customerAddressModel();
  customerAddressModelObj.flatNo = "91";
  customerAddressModelObj.buildingName = "Lords";
  customerAddressModelObj.landMark = "McD";
  customerAddressModelObj.area = "Bandra";
  customerAddressModelObj.cityName = "Mumbai";
  customerAddressModelObj.pinCode = "400056";
  customerAddressModelObj.state = "Maharashtra";

  customerModelObj.customerAddress = customerAddressModelObj;

  //One to many relationship//

  let customerCommuncationListObj = new Array(); //Array of Oject

  let customerComm1 = new customerCommunicationModel();
  customerComm1.mobileNumber = "8769065674";
  customerComm1.emailId = "sawanttejas07@gmail.com";

  let customerComm2 = new customerCommunicationModel();
  customerComm2.mobileNumber = "9169065674";
  customerComm2.emailId = "sawanttejas50@gmail.com";

  customerCommuncationListObj[0] = customerComm1;
  customerCommuncationListObj[1] = customerComm2;

  customerModelObj.customerCommunicationList = customerCommuncationListObj;

  return customerModelObj;
}

function display(customerData) {
  console.log(customerData.firstName);
  console.log(customerData.lastName);
  console.log(customerData.age);
  console.log(customerData.dateOfBirth);

  console.log(customerData.customerCommunication.mobileNumber);
  console.log(customerData.customerCommunication.emailId);

  console.log(customerData.customerAddress.flatNo);
  console.log(customerData.customerAddress.buildingName);
  console.log(customerData.customerAddress.landMark);
  console.log(customerData.customerAddress.area);
  console.log(customerData.customerAddress.cityName);
  console.log(customerData.customerAddress.state);
  console.log(customerData.customerAddress.pinCode);

  for (let Data of customerData.customerCommunicationList) {
    console.log(Data.mobileNumber);
    console.log(Data.emailId);
  }
}

let customerModelObj = setCustomerData();
display(customerModelObj);

// Serialization(Single Object)
// Convert Javascript Object into JSON
function toJson(customerModel) {
  return JSON.stringify(customerModel);
}

let customerModelJson = toJson(customerModelObj);
console.log(customerModelJson);

// Serialization (Array Object)
// Convert Javascript Object into JSON Array
function toJsonArray() {
  let customerCommuncationListObj = new Array(); //Array of Oject

  let customerComm1 = new customerCommunicationModel();
  customerComm1.mobileNumber = "8769065674";
  customerComm1.emailId = "sawanttejas07@gmail.com";

  let customerComm2 = new customerCommunicationModel();
  customerComm2.mobileNumber = "9169065674";
  customerComm2.emailId = "sawanttejas50@gmail.com";

  customerCommuncationListObj[0] = customerComm1;
  customerCommuncationListObj[1] = customerComm2;

  return JSON.stringify(customerCommuncationListObj);
}

let customerModelListJson = toJsonArray();
console.log(customerModelListJson);

// De-serialization (Single object)
// Convert JSON to Javascript Object
function toObject(strCustomerModelJson) {
  return JSON.parse(strCustomerModelJson);
}

customerModelObj = toObject(customerModelJson);
console.log(customerModelObj);

// De-serialization (Array object)
// Convert JSON Array to Javascript Object
function toArrayObject(strCustomerListModelJson) {
  return JSON.parse(strCustomerListModelJson);
}

// De-serialization (Array object)

let customerCommunicationListObj = toArrayObject(customerModelListJson);
console.log(customerCommunicationListObj);
