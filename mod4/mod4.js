
const names = ["John", "Paul", "Jake", "Emily", "Sam", "jill", "Mike"];

for (let name of names) {
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log(`Goodbye ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}
