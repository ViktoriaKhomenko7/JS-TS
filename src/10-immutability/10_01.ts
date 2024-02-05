export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType = {id: number, title: string}
export type WithCompaniesType = {
    companies: Array<CompanyType>
}




export function makeHairStyle(u: UserType, power: number) {
    return {
        //shallow copy - поверхностная копия
        ...u,
        hair: u.hair / power
    }
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }
}

export function addNewBooks(u: UserWithLaptopType & UserWithBooksType,
                            newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
                           book: string,
                           newBook: string) => ({

    ...u,
    books: u.books.map(el => el === book ? newBook : el)

})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType,
                           deletedBook: string) => ({

    ...u,
    books: u.books.filter(el => el !== deletedBook)

})

export const addNewCompany = (u: UserWithLaptopType & WithCompaniesType,
                              newComp: string) => ({
    ...u,
    companies: [...u.companies, {id: 3, title: newComp}]

})

export const updateCompany = (u: UserWithLaptopType & WithCompaniesType,
                              id: number,
                              newTitle: string) => ({
    ...u,
    companies: u.companies.map(el => el.id === id ? {...el, title: newTitle} : el)
})

export const updateCompanyTitle = (companies: { [key: string]: CompanyType[]},
                                   userName: string,
                                   companyId: number,
                                   newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(el => el.id === companyId ? {...el, title: newTitle} : el)


    return companyCopy
}