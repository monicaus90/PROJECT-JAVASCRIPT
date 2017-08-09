function menu() {
  var option = Number(prompt("Select an option to enter your data:\n\
                          1. Personal information\n\
                          2. Family reference\n\
                          3. Work reference\n\
                          4. Professional profile description\n\
                          5. Print Resume\n\
                          0. Exit program"));
  return parseInt(option);
}

function option1() {
  var personalinformation = {
    name: "", lastname: "", address: "", phone: "", email: ""
  };
  personalinformation.name = prompt("Enter your name: ");
  personalinformation.lastname = prompt("Enter your last name: ");
  personalinformation.address = prompt("Enter your address");
  personalinformation.phone = prompt("Enter your number phone: ");
  personalinformation.email = prompt("Enter your email: ");
  return personalinformation;
}

function option2() {
  var familyreference = {
    name: "", lastname: "", phone: ""
  };
  familyreference.name = prompt("Enter your name: ");
  familyreference.lastname = prompt("Enter your lastname: ");
  familyreference.phone = prompt("Enter your number phone: ");
  return familyreference;
}

function option3() {
  var workreference = {
    name: "", lastname: "", phone: ""
  };
  workreference.name = prompt("Enter your name: ");
  workreference.lastname = prompt("Enter your lastname: ");
  workreference.phone = prompt("Enter your number phone: ");
  return workreference;
}

function option4() {
  var description = {
    studies: "", titles: "", aspirations: ""
  };
  description.studies = prompt("Write your studies: ");
  description.titles = prompt("Write your titles: ");
  description.aspirations = prompt("Write your aspirations: ");
  return description;
}

function option5(personalinformation, familyreference, workreference, description) {
  console.log("          Personal Information");
  console.log("Name: " + personalinformation.name);
  console.log("Lastname: " + personalinformation.lastname);
  console.log("Address: " + personalinformation.address);
  console.log("Phone: " + personalinformation.phone);
  console.log("Email: " + personalinformation.email);
  console.log("          Family Reference");
  console.log("Name: " + familyreference.name);
  console.log("Lastname: " + familyreference.lastname);
  console.log("Phone: " + familyreference.phone);
  console.log("          Work Reference");
  console.log("Name: " + workreference.name);
  console.log("Lastname: " + workreference.lastname);
  console.log("Phone: " + workreference.phone);
  console.log("          Description");
  console.log("Studies: " + description.studies);
  console.log("Titles: " + description.titles);
  console.log("Aspirations: " + description.aspirations);
}
while(result!==0){
  var result = menu();
  
  
  switch (result) {
    case 1:
      var date1 = option1();
      break;
    case 2:
      var date2 = option2();
      break;
    case 3:
      var date3 = option3();
      break;
    case 4:
      var date4 = option4();
      break;
    case 5:
      option5(date1,date2,date3,date4);
      break;
    case 0:
    result = 0;
    break;
    default:
      alert("Enter other option");
      break;
  }
  }