module.exports = {
    database: 'mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false',
    secret: '$ecreate12345',
    enableConsoleLog: true,
    enableFileLog:false,
    tokenExpire: 36000 //10 hours
}
