import sequelize  from 'sequelize';

const db = new sequelize('mysql', 'root', 'root', {
    host: 'http://localhost:5000',
    dialect: 'mysql'
});

try {
    db.authenticate();
    console.log('Connection to DB successful.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default db;

