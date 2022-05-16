const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Drama", title: "Dramas" },
    { name: "Action", title: "Action Movies" },
    { name: "Comedy", title: "Comedies" },
    { name: "Horror", title: "Horror Films" },
    { name: "Sci-Fi", title: "Sci-Fi Movies" },
    { name: "Family", title: "Family Films" },
    { name: "Romance", title: "Romantic Movies" },
    { name: "All", title: " " },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      image: "pulp-fiction.jpg",
      categoryz: [categories[0]._id, categories[2]._id, categories[7]._id],
      price: 44.99,
      quantity: 50,
    },
    {
      name: "No Country for Old Men",
      description:
        "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
      image: "no-country-for-old-men.jpg",
      categoryz: [categories[0]._id, categories[7]._id],
      price: 29.99,
      quantity: 500,
    },
    {
      name: "Die Hard",
      categoryz: [categories[1]._id, categories[7]._id],
      description:
        "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
      image: "die-hard.jpg",
      price: 19.99,
      quantity: 20,
    },
    {
      name: "Fearless",
      categoryz: [categories[0]._id, categories[1]._id, categories[7]._id],
      description:
        "A biography of Chinese Martial Arts Master Huo Yuanjia, who is the founder and spiritual guru of the Jin Wu Sports Federation.",
      image: "fearless.jpg",
      price: 34.99,
      quantity: 50,
    },
    {
      name: "Braveheart",
      categoryz: [categories[0]._id, categories[1]._id, categories[7]._id],
      description:
        "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
      image: "braveheart.jpg",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "The Big Lebowski",
      categoryz: [categories[2]._id, categories[7]._id],
      description:
        "Ultimate L.A. slacker Jeff The Dude Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's missing wife.",
      image: "the-big-lebowski.jpg",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Meet the Parents",
      categoryz: [categories[2]._id, categories[6]._id, categories[7]._id],
      description:
        "Male nurse Greg Focker meets his girlfriend's parents before proposing, but her suspicious father is every date's worst nightmare.",
      image: "meet-the-parents.jpg",
      price: 39.99,
      quantity: 30,
    },
    {
      name: "The Ring",
      categoryz: [categories[3]._id, categories[7]._id],
      description:
        "A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.",
      image: "the-ring.jpg",
      price: 19.99,
      quantity: 100,
    },
    {
      name: "Scream",
      categoryz: [categories[3]._id, categories[7]._id],
      description:
        "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
      image: "scream.jpg",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "Aliens",
      categoryz: [categories[1]._id, categories[4]._id, categories[7]._id],
      description:
        "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
      image: "aliens.jpg",
      price: 21.99,
      quantity: 50,
    },
    {
      name: "Everything Everywhere All at Once",
      categoryz: [categories[1]._id, categories[4]._id, categories[7]._id],
      description:
        "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
      image: "everything-everywhere-all-at-once.jpg",
      price: 29.99,
      quantity: 40,
    },
    {
      name: "Arrival",
      categoryz: [categories[0]._id, categories[4]._id, categories[7]._id],
      description:
        "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
      image: "arrival.jpg",
      price: 59.99,
      quantity: 4,
    },
    {
      name: "Blade Runner",
      categoryz: [
        categories[0]._id,
        categories[1]._id,
        categories[4]._id,
        categories[7]._id,
      ],
      description:
        "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
      image: "bladerunner.jpg",
      price: 27.99,
      quantity: 33,
    },
    {
      name: "Home Alone",
      categoryz: [categories[2]._id, categories[5]._id, categories[7]._id],
      description:
        "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
      image: "home-alone.jpg",
      price: 34.99,
      quantity: 12,
    },
    {
      name: "Frozen",
      categoryz: [categories[2]._id, categories[5]._id, categories[7]._id],
      description:
        "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
      image: "frozen.jpg",
      price: 22.99,
      quantity: 30,
    },
    {
      name: "Soul",
      categoryz: [categories[2]._id, categories[5]._id, categories[7]._id],
      description:
        "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",
      image: "soul.jpg",
      price: 44.99,
      quantity: 51,
    },
    {
      name: "About Time",
      categoryz: [
        categories[0]._id,
        categories[2]._id,
        categories[6]._id,
        categories[7]._id,
      ],
      description:
        "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
      image: "about-time.jpg",
      price: 51.99,
      quantity: 50,
    },
    {
      name: "Before Sunset",
      categoryz: [categories[0]._id, categories[6]._id, categories[7]._id],
      description:
        "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
      image: "before-sunset.jpg",
      price: 24.99,
      quantity: 47,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Molly",
    lastName: "Moo",
    email: "moobear@yahoo.com",
    password: "123456",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Mira",
    lastName: "Pups",
    email: "mirpups@yahoo.com",
    password: "123456",
  });

  console.log("users seeded");

  process.exit();
});
