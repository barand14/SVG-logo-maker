const inquirer = require('inquirer');
const fs = require('fs');
//const svg = require('@svgdotjs/svg.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');
const {Circle, Square, Triangle} = require("./lib/shape.js")

const questions = [
{
    type: 'input',
    name: 'text',
    message:'Logo text?',
    validate:function(input){
        const done = this.async();
        setTimeout(() => {
            if(input.lengh > 3){
                done(" :: Error :: Text needs to be 3 characters or less");
            }
            done(true);
        }, 500);
    }
},
{
    type: 'input',
    name: 'textColor',
    message:'Text color?'
},
{
    type: 'list',
    name: 'shape',
    message: 'Logo shape?',
    choices: ["triangle", "circle", "square"],
},
{
    type: 'input',
    name: 'shapecolor',
    message: 'Shape color?',
}
];


function init(){
    inquirer.prompt (questions)
    .then(response =>{
        //console.log(response)
        let newShape;

        if(response.shape === "circle"){
            newShape = new Circle(response.shapecolor)
        }
       else if(response.shape === "square"){
        newShape = new Square(response.shapecolor)
        }
        else {
            newShape = new Triangle(response.shapecolor)
        }

        const newSvgTag = 
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${newShape.render()}

        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
      
        </svg>
        `
        fs.writeFileSync("newLogo.svg", newSvgTag)
    })
}





init()