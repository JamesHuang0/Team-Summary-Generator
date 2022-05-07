const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const addManagerCard = require('./src/managercard');
const addEngineerCard = require('./src/engineercard');
const addInternCard = require('./src/interncard');
const createPageTemplate = require('./src/pagetemplate');

const team = [];

const addManager = [
    {
        name: 'name',
        type: 'input',
        message: "What is the manager's name?"
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the manager's employee ID?"
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the manager's email address?"
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: "What is the manager's office number?"
    },
    {
        name: 'nextInput',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', "I'm done!"],
        message: "What would you like to do next?"
    },
];

const addEngineer = [
    {
      name: 'name',
      type: 'input',
      message: "What is the engineer's name?"
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the engineer's employee ID?"
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the engineer's email address?"
    },
    {
        name: 'github',
        type: 'input',
        message: "What is the engineer's Github username?"
    },
    {
        name: 'nextInput',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', "I'm done!"],
        message: "What would you like to do next?"
    },
  ];

const addIntern = [
    {
      name: 'name',
      type: 'input',
      message: "What is the intern's name?"
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the intern's employee ID?"
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the intern's email address?"
    },
    {
        name: 'school',
        type: 'input',
        message: "What college does the intern attend?"
    },
    {
        name: 'nextInput',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', "I'm done!"],
        message: "What would you like to do next?"
    },
  ];

ask(addManager);

function ask(questions) {
    inquirer
        .prompt(questions)
        .then((teamMember) => {
            team.push(teamMember);

            if (teamMember.nextInput === 'Add Engineer') {
                ask(addEngineer);
            } else if (teamMember.nextInput === 'Add Intern') {
                ask(addIntern);
            } else {
                createTeamProfiles(team);
            }
        })
}

function createTeamProfiles(team) {
    
    const profiles = team.map((teamMember) => {
      const { name, id, email } = teamMember;
  
      if (teamMember.hasOwnProperty('officeNumber')) {
        const { officeNumber } = teamMember;
        return new Manager(name, id, email, officeNumber);
      }
  
      if (teamMember.hasOwnProperty('github')) {
        const { github } = teamMember;
        return new Engineer(name, id, email, github);
      }
  
      if (teamMember.hasOwnProperty('school')) {
        const { school } = teamMember;
        return new Intern(name, id, email, school);
      }
    });
  
    generateHTML(profiles);
  }

function generateHTML(profiles) {
      let profileCards = '';
      profiles.forEach((summary) => {
        if (summary instanceof Manager) {
          const card = addManagerCard(summary);
          profileCards += card;
        } else if (summary instanceof Engineer) {
          const card = addEngineerCard(summary);
          profileCards += card;
        } else if (summary instanceof Intern) {
          const card = addInternCard(summary);
          profileCards += card;
        }
  })
const newHTML = createPageTemplate(profileCards);
writeHTML(newHTML);
};

function writeHTML(newHTML) {
    fs.writeFile('./dist/teamsummary.html', newHTML, (err) => {
      if (err) throw err;
      console.log('HTML document successfully created in the /dist folder.');
    });
  };