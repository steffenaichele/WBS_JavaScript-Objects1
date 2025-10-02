console.log(
	"%c\n\nDestructuring",
	"font-family: sans-serif; color: black; font-weight: bold; font-size: 1.5rem;"
);

// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};
// Initial function
function displayPerson(person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}


for (let i = 0; i < 2; i++) {
	this["fruit" + (i + 1)] = fruits[i];
}

console.log(
		`%cconst fruit1 =  ${fruit1}`,
		`color: grey; font-weight: light;`
	);

	console.log(
		`%cconst fruit2 =  ${fruit2}`,
		`color: grey; font-weight: light;`
	);

const selectedFruits = new Array();

for (let i = 0; i < fruits.length; i++) {
	if (i == 0 || i == 2) {
		selectedFruits.push('"' + fruits[i] + '"');
	} else {
		continue;
	}
}

console.log(
		`%cconst selectedFruits = ${selectedFruits}`,
		`color: grey; font-weight: light;`
	);

const {name, age} = person;

console.log(
		`%c${name} is ${age} years old.`,
		`color: grey; font-weight: light;`
	);

	const { address: { city } } = person;
	
console.log(
		`%c${name} lives in ${city}.`,
		`color: grey; font-weight: light;`
	);

displayPerson = ({name, age}) => {
	console.log(`Name: ${name}, Age: ${age}`);
};

displayPerson(person);