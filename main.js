async function getData() {
    let data = await fetch("./data.json");
    let dataObject = await data.json();
    let students = dataObject.etudiant;


    let arrOfDates = [];
    students.forEach(element => {
        arrOfDates.push(element.date_naissance)
    });

    let arrOfTimes = [];

    let dateString = [];
    arrOfDates.forEach(element => {
        dateString.push(element)
    });


    let parts = [];
    dateString.forEach((e) => {
        parts.push(e.split("-"));
    })


    let years = [];
    let months = [];
    let days = [];

    parts.forEach(element => {
        years.push(parseInt(element[2], 10));
        months.push(parseInt(element[1], 10) - 1);
        days.push(parseInt(element[0], 10));
    });


    let dateObjects = [];

    for (let index = 0; index < years.length; index++) {
        dateObjects.push(new Date(years[index], months[index], days[index]))

    }

    dateObjects.forEach(element => {
        arrOfTimes.push(element.getTime());
    });

    let arr = arrOfTimes.sort((a, b) => {
        b - a;
    });


    arr.sort();

    arr.forEach(element => {
        console.log(new Date(element).toString());
    });

}

getData();


