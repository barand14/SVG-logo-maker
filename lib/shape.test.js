const {Circle, Triangle, Square} = require("./shape")

test("Test Circle Tag", ()=> {
    const expectedTag = `<circle cx="150" cy="100" r="80" fill="blue" />`
    const shape = new Circle("blue").render()

    expect(expectedTag).toEqual(shape)
});

test("Test Triangle Tag", ()=> {
    const expectedTag = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
    const shape = new Triangle("blue").render()

    expect(expectedTag).toEqual(shape)
});
