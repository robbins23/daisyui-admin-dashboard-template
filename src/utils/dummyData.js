const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Product call", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Meeting with tech team", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Meeting with Cristina", theme : "PURPLE", startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
        {title : "Meeting with Alex", theme : "BLUE", startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
        {title : "Product Call", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Product meeting", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Sales Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Product Meeting", theme : "ORANGE", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Marketing Meeting", theme : "PINK", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Client Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Sales meeting", theme : "BLUE", startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
        {title : "Client meeting", theme : "PURPLE", startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {name : "Alex", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "alex@dashwind.com", location : "Paris", amount : 100, date : moment().endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "London", amount : 190, date : moment().add(-1, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "jhon@dashwind.com", location : "Canada", amount : 112, date : moment().add(-1, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@dashwind.com", location : "Peru", amount : 111, date : moment().add(-1, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/5-image.jpg", email : "virat@dashwind.com", location : "London", amount : 190, date : moment().add(-2, 'd').endOf('day')},
        {name : "Miya", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "miya@dashwind.com", location : "Paris", amount : 230, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Canada", amount : 331, date : moment().add(-2, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "matrix@dashwind.com", location : "London", amount : 581, date : moment().add(-2, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "ereena@dashwind.com", location : "Tokyo", amount : 151, date : moment().add(-2, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "jhon@dashwind.com", location : "Paris", amount : 91, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Canada", amount : 161, date : moment().add(-3, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@dashwind.com", location : "US", amount : 121, date : moment().add(-3, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "jhon@dashwind.com", location : "Tokyo", amount : 713, date : moment().add(-3, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "London", amount : 217, date : moment().add(-3, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Paris", amount : 117, date : moment().add(-3, 'd').endOf('day')},
        {name : "Miya", avatar : "https://reqres.in/img/faces/7-image.jpg", email : "jhon@dashwind.com", location : "Canada", amount : 612, date : moment().add(-3, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "matrix@dashwind.com", location : "London", amount : 631, date : moment().add(-3, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "Tokyo", amount : 151, date : moment().add(-3, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Paris", amount : 617, date : moment().add(-3, 'd').endOf('day')},

    
    ]
});
