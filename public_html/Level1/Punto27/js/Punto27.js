function menu() {
  var option = prompt("Select an option to enter your data:\n\
                          1. Personal information\n\
                          2. Family reference\n\
                          3. Work reference\n\
                          4. Professional profile description\n\
                          5. Print Resume\n\
                          0. Exit program");
  return parseInt(option);
}


var personalinformation = {
  name: "", lastname: "", address: "", phone: "", email: ""
};

function option1() {
  personalinformation.name = prompt("Enter your name: ");
  personalinformation.lastname = prompt("Enter your last name: ");
  personalinformation.address = prompt("Enter your address");
  personalinformation.phone = prompt("Enter your number phone: ");
  personalinformation.email = prompt("Enter your email: ");
  monica();
  return personalinformation;

}

var familyreference = {
  name: "", lastname: "", phone: ""
};

function option2() {
  familyreference.name = prompt("Enter your name: ");
  familyreference.lastname = prompt("Enter your lastname: ");
  familyreference.phone = prompt("Enter your number phone: ");
  monica();
}

var workreference = {
  name: "", lastname: "", phone: ""
};

function option3() {
  workreference.name = prompt("Enter your name: ");
  workreference.lastname = prompt("Enter your lastname: ");
  workreference.phone = prompt("Enter your number phone: ");
  monica();
}

var description = {
  studies: "", titles: "", aspirations: ""
};

function option4() {
  description.studies = prompt("Write your studies: ");
  description.titles = prompt("Write your titles: ");
  description.aspirations = prompt("Write your aspirations: ");
  monica();
}

function option5() {
  console.log("Personal Information");
  console.log("Name: " + personalinformation.name);
  console.log("Lastname: " + personalinformation.lastname);
  console.log("Address: " + personalinformation.address);
  console.log("Phone: " + personalinformation.phone);
  console.log("Email: " + personalinformation.email);
}

function monica() {
  var result = menu();
  switch (result) {
    case 1:
      option1();
      break;
    case 2:
      option2();
      break;
    case 3:
      option3();
      break;
    case 4:
      option4();
      break;
    case 5:
      option5();
      break;
    default:
      monica();
      break;
  }
}

monica();