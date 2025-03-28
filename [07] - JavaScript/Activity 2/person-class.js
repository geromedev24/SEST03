// Person Class with methods

class Person {
  constructor(name, age, occupation, bounty, hobbies, address, skill) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.bounty = bounty;
    this.hobbies = hobbies;
    this.address = address;
    this.skill = skill;
  }

  introduce() {
    console.log("===  INTRODUCTION ===");
    console.log(
      `Hi there! I'm ${this.name} and I just turned ${this.age}.  I am the ${this.occupation} of the Straw Hat Pirates with a ${this.bounty} berries in bounty. Whenever I have free time, you may find me ${this.hobbies}`
    );
  }

  getOlder() {
    this.age += 1;
    console.log(`=== Happy Birthday ===`);
    console.log(`Let's greet ${this.name} as he just turned ${this.age}!`);
  }

  promote(newOccupation) {
    this.occupation = newOccupation;
    console.log(`=== Change Title Alert ===`);
    console.log(
      `After the battle of the Raid on Onigashima and defeating Kaido and Beast Pirate, ${this.name} has been promoted to ${this.occupation} status! Awesome!`
    );
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
    console.log(`=== New Hobby ===`);
    console.log(`${this.name} has learned and enjoys ${newHobby}!`);
  }

  move(newAddress) {
    this.address = newAddress;
    console.log(`=== New Location ===`);
    console.log(
      `${this.name} has moved to a new location at ${newAddress.street}, ${newAddress.city}, ${newAddress.state}, ${newAddress.zip}!  Find him if you can!`
    );
  }

  addSkill(newSkill) {
    this.skill.unshift(newSkill);
    console.log(`=== Level Up Alert ===`);
    console.log(
      `${this.name} has leveled up and acquired new skill ${newSkill}!`
    );
  }
}

// Create Person Profile
const luffy = new Person(
  "Monkey D. Luffy",
  19,
  "Captain",
  "3 Billion",
  ["stretching", " eating boodle fights", " and exploring new places."],
  {
    street: "Foosha Village",
    city: "Dawn Island",
    state: "East Blue",
    zip: 12345,
  },
  []
);

const zoro = new Person(
  "Roronoa Zoro",
  21,
  "Pirate Hunter",
  "1.1 Billion",
  ["fishing", " drinking", " and sword training."],
  {
    street: "Shimotsuki Village",
    city: "Kuraigana Island",
    state: "East Blue",
    zip: 98765,
  },
  []
);

const sanji = new Person(
  "Vinsmoke Sanji",
  20,
  "Master Chef",
  "1.032 Billion",
  ["cooking", " smoking", " and hitting on beautiful ladies."],
  {
    street: "Vinsmok Village",
    city: "Germa Kingdowm",
    state: "North Blue",
    zip: 45612,
  },
  []
);

// TEST
luffy.introduce();
zoro.introduce();
sanji.introduce();

luffy.getOlder();
zoro.getOlder();
sanji.getOlder();

luffy.promote("Yonko");
luffy.addHobby("Singing");

luffy.move({
  street: "In the middle",
  city: "of nowhere",
  state: "in Grandline",
  zip: "00000",
});

luffy.addSkill("Sun God Nika");
