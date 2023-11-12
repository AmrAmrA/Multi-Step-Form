class Student {
    fullName: string;
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }
   
  interface Person {
    firstName: string;
    lastName: string;
  }
   
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
   
  let user = new Student("Mikhouri", "Mikhouri.", "User");
   
  document.body.textContent = greeter(user);

  let world = false; 

  type WindowStates = "open" | "closed" | "minimized";

  const myWindow : WindowStates = "open"