//CRUD(l)
//Create = Create new employees and assign them an employee #, name(first and last), schedule type and preferences
//and save these preferences to a db
//Read = Read already stored values from a db(mongo)
//Update = change a current employees work preferences
//Delete = Delete terminated employees
//list = list out entire db of all employees


//Setting up prototypes
//fullTime = 35hrs (5 shifts per week)
//partTime = 28hrs (4 shifts per week, all set)
//Shifts = 3(Open, Mid, Close)
//storeSchedule = M-Sa (8:30-10:30) Sun(8:30-8:00)
//hoursPerDay
//hoursPerWeek


//Business Hours
//Minimum 1 manager and 5 other employees per shift
// var weeklyBusinessHours = {
//     var threeShifts = {"firstShift" + "secondShift" + "thirdShift"'};
//     var twoShifts = {"twoShifts": "firstShift" + "thirdShift"};
//     "Monday": ("threeShifts"),
//     "Tuesday": ("threeShifts"),
//     "Wednesday": ("threeShifts"),
//     "Thursday": ("threeShifts"),
//     "Friday": ("threeShifts"),
//     "Saturday": ("threeShifts"),
//     "Sunday": ("twoShifts")
// };



//General Employee Class
//Create a class and constructor to handel employee creation
class Employee {
    constructor(firstName, lastName, employeeNumber, hoursPerWeek, fixedSchedule, daysPrefered, shiftPrefered) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeNumber = employeeNumber;
        this.hoursPerWeek = hoursPerWeek;
        this.fixedSchedule = fixedSchedule;
    }
}

class FixedSchedule {
    constructor (setDaysOff, setShift) {
        this.setDaysOff = setDaysOff;
        this.setShift = setShift;
    }
}

const martin = new Employee('Martin', 'Prather', 14432, 35, true);

console.log(martin)

//General Employee Setup
// var employee = {
//     "firstName": null,
//     "lastName": null,
//     "employeeNumber": null,
//     "hoursPerWeek": null,
    //set schedule/fixed schedule
    // "fixedSchedule": function() {
    //     var fixedSchedule = {
    //         "setDaysOff": null,
    //         "setShift": null,
    //         "getFixedShift": function() {
    //             if (this.setDaysOff != null) {
    //                 return this.setDaysOff;
    //             }
    //             else if (this.setShift != null) {
    //                 return this.setShift;
    //             }
    //             else {
    //                 fixedSchedule == null;
    //             }
    //         },
    //     };
    // },
//     "daysPrefered": null,
//     "shiftPrefered": null,
//     "getFullName": function() {
//         return this.firstName + " " + this.lastName;
//     }
    
// };

// var employeePreferences = Object.create(employee);

// console.log(employee)

// var fixedSchedule = Object.create(employee);
// fixedSchedule.setDaysOff=null;
// fixedSchedule.setShift=null;
//
//////////////////////////////////////////////////
//
//name + fulltime/part time
// var employeePrototype = {
//     firstName: null,
//     lastName: null,
//     employeeNumber: null,
//     fullTime: null,
//     partTime: null,
// };

//set schedule/fixed schedule
// var scheduleTypePrototype = Object.create(employeePrototype);
// scheduleTypePrototype.fixedSchedule=null;
// scheduleTypePrototype.fixedSchedule=null;

//set daysOff preference and shiftPrefered for FULL TIME & NONFIXED Schedules
// var preferencePrototype = Object.create(employeePrototype);
// preferencePrototype.daysOff=null;
// preferencePrototype.shiftPrefered=null;

//create individual employee preferences..wonky
// var ben = Object.create(employeePrototype);
// Object.getPrototypeOf(Object.getPrototypeOf(ben));
// Object.hasPrototype(ben, employeePrototype);

//Manager Schedules First
//Fixed Schedules
//General Employee Preferences