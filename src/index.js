const cities = ['Mexico City', 'London', 'Paris', 'New York', 'Madrid', 'Berlin'];

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
};

module.exports = randomString;