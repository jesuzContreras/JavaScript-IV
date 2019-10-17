// CODE here for your Lambda Classes
class Person{
    constructor(base){
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;
    }
    speak(){
        return `Hello, my name is ${this.name} and I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student} recieves a perfect grade in ${subject}`;
    }
}

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubject = attr.favSubject;
    }
    listSubjects(){
        return this.favSubject;
    }
    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun Sprint Challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel} @channel standy times`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const Freddy = new Person({
    name: 'Freddy',
    age: 55,
    location: 'Elm Street'
})
const Jason = new Instructor({
    name: 'JasonV',
    age: 45,
    location: 'Crystal Lake',
    specialty: 'React',
    favLanguage: "C#",
    catchPhrase: 'ch ch ch ah ah ah'
})
const Rob = new Student ({
    name: 'Rob',
    age: 50,
    location: 'Haverhill, MA',
    previousBackground: 'Singer',
    className: 'Intro to WebDev',
    favSubject: ['JavaScript', 'HTML', 'CSS']
})

const Michael = new ProjectManager ({
    name: 'Michael',
    age: 45,
    location: 'HadderField, IL',
    specialty: 'Angular',
    favLanguage: 'Python',
    catchPhrase: 'Strong Silent Type',
    gradClassName: 'Web25',
    favInstructor: 'JasonV'
})

console.log(Freddy.speak());
console.log(Jason.speak());
console.log(Jason.demo('React'));
console.log(Jason.grade(Rob.name, Rob.favSubject[0]));
console.log(Rob.speak());
console.log(Rob.listSubjects());
console.log(Rob.PRAssignments('Intro to WebDev'));
console.log(Rob.sprintChallenge('Intro to WebDev'));
console.log(Michael.speak());
console.log(Michael.demo('Redux'));
console.log(Jason.grade(Rob.name, Rob.favSubject[1]));
console.log(Michael.standUp('ProjectManagerWeb25'));
console.log(Michael.debugsCode(Rob.name, Rob.favSubject[2]));
