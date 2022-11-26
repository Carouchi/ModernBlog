import mysql from "mysql";

export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "LemmeDrink08!!",
	database: "blog",
});
