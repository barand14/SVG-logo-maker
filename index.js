const inquirer = require('inquirer');
const generateMarkdown = require('./lib/generateMarkdown.js');
const fs = require('fs');
const svg = require('@svgdotjs/svg.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');

const questions = [
{
    type: 'input',
    message:'Logo text?',
    name: 'text',
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
    message:'Text color?',
    name: 'textColor',
},
{
    type: 'list',
    Choices: ["circle", "triangle", "square"],
    message: 'Logo shape?'
    name: 'shape',
},
{
    type: 'input',
    message: 'Shape color?',
    name: 'shapecolor',
}
];
