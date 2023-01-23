// 1  -----------

let fruit = [
    'apple',
    'apricot',
    'avocado',
    'banana',
    'kiwi',
    'lemon',
    'fig'
]
console.log(fruit)
// dell
fruit.pop()
fruit.shift()

// new fruit
fruit.push('mango')
fruit.unshift('papaya')


console.log(fruit)

// 2 ----------

let message  = ["A" ,"love" , "JS"].join(' ')
console.log(message)


// 3 ----------

fruit.splice(2 , 1, 'orange' , 'blackberry' , 'peas')

console.log(fruit)
