const Exercise = require('./index')
const Exercises = require('./index')

test(`the 'isEven' function suppose to return a bool if the input is even or not`, () => {
    const e1 = new Exercises()

    expect(e1.isEven(2)).toBeTruthy()

    expect(e1.isEven(3)).toBeFalsy()

    expect(e1.isEven('3')).toEqual({ error: 'the input was not a number' })
})

test(`the 'removeAtLeastOne' function should remove at least one element from the array`, () => {
    const e2 = new Exercise()

    expect(e2.removeAtLeastOne([1]).length).toBe(0)

    expect(e2.removeAtLeastOne([2, 1]).length).toBe(1)

    expect(e2.removeAtLeastOne([])).toEqual({ error: 'cant remove from an empty array' })
})

test(`the 'simplify' function should return a clean, lowercase string without these symbols: "!", "#", ".", ",", "'"`, () => {
    const e3 = new Exercise()

    expect(e3.simplify('Hs!#.kMD,.#')).toEqual('hskmd')

    expect(e3.simplify('MDFKmdkfm#!.#RGTR').length).toBe(13)
})

test(`the function 'validate' takes an array of booleans and returns true or false depending on the content of the array`, () => {
    const e4 = new Exercise()

    expect(e4.validate([true, true, false, true])).toBe(true)

    expect(e4.validate([false, true, false, false])).toBe(false)

    expect(e4.validate([4, true, 6, false, false])).toBe(false)

    expect(e4.validate([1, 2, 4, 7])).toEqual({ error: "Need at least one boolean" })
})

test('expect the `push` function to be called', () => {
    const e5 = new Exercise()
    const spy = jest.spyOn(e5, 'add')

    e5.add(1, 2)
    expect(spy).toHaveBeenCalled()
})