// reverse a string

const reverse =(text) =>{
    const result =[];
    const split = text.split('')

    for (let index = split.length; index >=0; index--) {
        result.push(split[index])
        
    }
    console.log(result.join(''))
}
reverse("janvier")

