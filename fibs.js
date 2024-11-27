function fibs(arr_length) {
    if(arr_length <= 0) return []

    if(arr_length === 1) return [0]

    let fib1 = 0, fib2 = 1
    let result = [fib1, fib2]

    for (let i = 2; i < arr_length; i++) {
        let next = fib1 + fib2
        fib1 = fib2
        fib2 = next

        result.push(next)
    }

    return result
}

console.log(fibs(8))
