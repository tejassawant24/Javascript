//Console.log("Hello Exception"); // it will give runtime error

try {
  //write runtime error code here
  Console.log("Hello Exception");
} catch (ex) {
  //catches the exception.
  //Log maintain for us.
  console.log(ex.message); //shows error message
  console.log(ex.stack); //shows the location of error

  //Message shown to end user
  console.log("something went wrong. contact administrator!!");
} finally {
  //executes even if error occurs or not
  console.log("Finally block executed");
}
