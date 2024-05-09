class Circle {
    //constructor adds parameter characteristics to class
    constructor(color){
        this.color = color
    }
    // methods are actions this class can take
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

//new Circle("blue").render()

class Square {
    //constructor adds parameter characteristics to class
    constructor(color){
        this.color = color
    }
    // methods are actions this class can take
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Triangle {
    //constructor adds parameter characteristics to class
    constructor(color){
        this.color = color
    }
    // methods are actions this class can take
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

module.exports = {Circle, Square, Triangle}