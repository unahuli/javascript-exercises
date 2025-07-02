const findTheOldest = function(peopleArr) {
    return peopleArr.reduce((obj, person) => {
        let currentYear = !("yearOfDeath" in person) ? new Date().getFullYear() : person.yearOfDeath;
        if (!obj.oldest) {
            obj.oldest = {name: person.name, age: currentYear - person.yearOfBirth};
        } else {
            let currentPersonAge = person.yearOfDeath - person.yearOfBirth;
            if (currentPersonAge > obj.oldest.age) obj.oldest = {name: person.name, age: person.yearOfDeath - person.yearOfBirth};
        }
        return obj;
    },{}).oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
