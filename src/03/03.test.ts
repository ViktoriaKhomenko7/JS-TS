import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dimych",
        age: 28,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "JS"
            }
        ]
    }
})

test("new tech skill should be added to student", ()=>{

// тут мы ожидаем, что к нам придет студент с тремя технологиями
    expect(student.technologies.length).toBe(3);

//функция его изменяет
    addSkill(student, "REACT");

// мы ожидаем, что результат:
// 1. появится четвертая технология
// 2. ее название будет REACT
// 3. ее id будет определен
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("REACT");
    expect(student.technologies[3].id).toBeDefined();
})

test("student should be active", ()=>{

// тут мы ожидаем, что студент isn't active
    expect(student.isActive).toBe(false);

//функция его изменяет
    makeStudentActive(student);

// мы ожидаем, что станет true
    expect(student.isActive).toBe(true);
})

test("does student live in city", ()=> {
    let result1 = doesStudentLiveIn(student, "Moscow");
    let result2 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})