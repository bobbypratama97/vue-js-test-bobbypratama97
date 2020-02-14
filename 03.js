function mirror(text) {
    var split_string = text.split("");
    var reverse_string = split_string.reverse();
    var reverse_result = reverse_string.join("");
    var final_result = text + reverse_result;
    return final_result;
}

print_result = mirror('---ccv');
console.log(print_result);