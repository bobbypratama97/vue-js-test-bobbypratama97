function grade(value) {
    if (value >= 90) {
        document.write('A');
    } else if (89 <= value <= 80) {
        document.write('B');
    } else if (79 <= value <= 70) {
        document.write('C');
    } else if (69 <= value <= 60) {
        document.write('D');
    } else if (value <= 59) {
        document.write('B');
    }
}