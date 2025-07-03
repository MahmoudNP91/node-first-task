const fs = require("fs");

const addPerson = (fname, lname, age, city, id) => {
    const allData = loadFile();

    const duplicateData = allData.filter((obj) => {
        return obj.id === id
    })

    if (duplicateData.length == 0) {

        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })

        saveData(allData);
    }
}


const loadFile = () => {
    try {
        const dataJson = fs.readFileSync("data15.json").toString()
        return JSON.parse(dataJson)
    }

    catch {
        return []
    }
}



const saveData = (allData) => {
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data15.json", allDataJson)
}



const deleteData = (id) => {
    const allData = loadFile()

    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })

    saveData(dataToKeep)

    console.log("You have successfully deleted an item")
}

const deleteAllData = () => {
    let allData = loadFile()

    allData = []

    saveData(allData)

    console.log("You have successfully deleted all Data")
}

const readData = (id) => {
    const allData = loadFile()

    const itemNeeded = allData.filter((obj) => {
        return obj.id == id
    })
    console.log(itemNeeded)
}

const readAllData = () => {
    const allData = loadFile()
    console.log(allData)
}

const list = (id) => {
    const allData = loadFile()
    const itemData = allData.filter((obj) => {
        return obj.id == id
    })
    console.log(itemData[0].fname + " " + itemData[0].lname + " " + itemData[0].city)
    
}



module.exports = {
    addPerson,
    deleteData,
    deleteAllData,
    readData,
    readAllData,
    list
}