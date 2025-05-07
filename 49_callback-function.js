function greetings(greetingsMorning, name) {
  greetingsMorning(name);
}

function greetingsMorning(name) {
  console.log("Good Morning", name);
}

function greetingsEvening(name){
    console.log('Good Evening', name);
    
}

greetings(greetingsMorning, "Anik");
greetings(greetingsEvening, "Mamun");
// greetings(greetingsMorning, "Anik");
