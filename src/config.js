const config = {
    db: {
        host: "localhost",
        user: "root",
        password: "123456",
        database: "api_v2",
        connectTimeout: 60000,
        multipleStatements: true
    },
    listPerPage: 10,
};

module.exports = config;