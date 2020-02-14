function duplicateRemover(city) {
    let unique = {};
    city.forEach(function (i) {
        if (!unique[i]) {
            unique[i] = true;
        }
    });
    return unique;
}

const city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung'];

filter_result = duplicateRemover(city);
console.log(filter_result);