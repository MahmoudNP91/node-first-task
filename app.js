const fs = require("fs");
fs.writeFileSync("data.txt", "mahmoud")
// console.log(fs.readFileSync("data.txt").toString())
fs.appendFileSync("data.txt", " + NaNaPoku")
// console.log(fs.readFileSync("data.txt").toString())

const name = require("./data.js");
// console.log(name.sname)

const validator = require("validator")
// console.log(validator.isEmail("hodavip2000@gmail.com"))
// console.log(process.argv)
// const command = process.argv[2];
// if(command === "add")
//     console.log("You Added an Item")
// else if (command === "delete")
//     console.log("You Deleted an Item")
// else 
//     console.log("ERROR")
const yargs = require("yargs");
const { type } = require("os");
const { json } = require("stream/consumers");
const data = require("./data.js");

yargs.command({
    command : "add",
    describe : "to add an item",
    builder : {
        fname : {
            describe : "this is the first name desc in add command",
            demandOption : true,
            type : "string"
        },
        lname : {
            describe : "this is the last name desc in add command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x) => {
        data.addPerson(x.fname, x.lname, x.age, x.city,x.id)
    }
})

yargs.command({
    command : "delete",
    describe : "to delete an item",
    builder : {
        id : {
            describe : "id of item",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x) => {
        data.deleteData(x.id)
    }
})


yargs.command({
    command : "read",
    describe : "to read an item",
    builder : {
        id : {
            describe : "id of item",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x) => {
        data.readData(x.id)
    }
})


yargs.command({
    command : "readAll",
    describe : "to read all data",
    builder : {
        
    },
    handler : () => {
        data.readAllData()
    }
})

yargs.command({
    command : "deleteAll",
    describe : "to delete all data",
    builder : {
        
    },
    handler : () => {
        data.deleteAllData()
    }
})

yargs.command({
    command : "list",
    describe : "to read the full name and the city",
    builder : {
        id : {
            describe : "id of item",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x) => {
        data.list(x.id)
    }
})


console.log(yargs.argv)