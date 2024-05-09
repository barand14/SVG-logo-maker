const inquirer = require('inquirer');
const generateMarkdown = require('./lib/generateMarkdown.js');
const fs = require('fs');
const svg = require('@svgdotjs/svg.js');
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
    message:'Text color?',
},
{
    type: 'list',
    name: 'shape',
    message: 'Logo shape?',
    Choices: ["triangle", "circle", "square"],
},
{
    type: 'input',
    name: 'shapecolor',
    message: 'Shape color?',
}
];
