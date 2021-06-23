let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

/*The first condition in variable message doesnt have any expression if condition is true.
 so we have to add "greetings" to welcome the employee/*