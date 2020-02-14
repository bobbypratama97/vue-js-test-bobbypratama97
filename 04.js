function filteringAge(people) {
    let result = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].age <= 21) {
            result.push(people[i]);
        }
    }

    return result;
}

const people = [{
        id: 1,
        name: 'Udin',
        age: 12
    },
    {
        id: 2,
        name: 'Wati',
        age: 51
    },
    {
        id: 3,
        name: 'Budi',
        age: 34
    },
    {
        id: 4,
        name: 'Agus',
        age: 16
    },
    {
        id: 5,
        name: 'Sari',
        age: 19
    },
    {
        id: 6,
        name: 'Ririn',
        age: 21
    },
];

filter_result = filteringAge(people);
console.log(filter_result);