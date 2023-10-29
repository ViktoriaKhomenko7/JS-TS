export type ManType = {
    name: string
    age: number
}
const people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]

const dimychTransformator = (man: ManType) => ({
    //круглые скобки ставим для того, чтобы показать js, что мы конструируем объект
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})

const devs = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    }
]
// если мы вызываем ф-цию, то на месте вызова этой функции появляется тот объект, который она возвращает
//     let d1 = dimychTransformator(people[0])
//     let d2 = dimychTransformator(people[1])
//     let d3 = dimychTransformator(people[2])


// const devs2 = [
//     dimychTransformator(people[0]),
//     dimychTransformator(people[1]),
//     dimychTransformator(people[2])
// ]

const devs3 = people.map(dimychTransformator);

const devs4 = people.map(man => ({
    //круглые скобки ставим для того, чтобы показать js, что мы конструируем объект
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}));

//результат отработки 05_01() - всегда массив
const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: ManType[]) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}