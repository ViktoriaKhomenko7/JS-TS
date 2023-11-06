import {ManType} from "./destructuring";
import exp from "constants";


let props: ManType;
beforeEach(()=>{
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})

test("s", () => {

    // const age = props.age
    // const lessons = props.lessons
    const {age, lessons} = props
    const {title} = props.address.street

    // const a = props.age
    // const l = props.lessons


    expect(age).toBe(32)
    expect(lessons.length).toBe(3)

    // expect(a).toBe(32)
    // expect(l.length).toBe(2)

    expect(title).toBe("Nezavisimosti street")
})

test("a", () => {
    //Это когда мы точно знаем, сколько в массиве элементов
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    //const [ls1, ls2] = props.lessons // неактуально для массивов с данными (неизвестно сколько там элементов)
    //const [,,ls3] = props.lessons
    const [, ls2, ...restLessons] = props.lessons
    //restLessons

    //expect(l1.title).toBe("1")
    expect(ls2.title).toBe("2")

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")
})