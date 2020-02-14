function reverse(text) {
    var result = text.split(" ");
    result.reverse();
    final_result = result.join(" ");
    return final_result;
}

print_result = reverse('Aku Cinta Kamu');
console.log(print_result);