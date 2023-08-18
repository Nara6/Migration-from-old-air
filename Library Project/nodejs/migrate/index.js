const mongoose = require('mongoose');
const { connectMongoDB } = require('../src/configs/db');

const Users = require('../migrate/user');
const category = require('../migrate/category');
const language = require('../migrate/language');
const author = require("../migrate/author");
const location = require('../migrate/location')
const book = require("../migrate/book");
const borrow = require("../migrate/borrow")
const bookunit = require("../migrate/bookUnit")
const UserIdentities = require("../migrate/userIdentity")
const event = require("../migrate/event")
async function dropDatabase() {
	try {
		const conn = mongoose.createConnection(process.env.DATABASE_URI)
		await conn.dropDatabase()
		console.log("Drop Database");
	} catch (e) {
		console.log(e.message);
	}
}

async function insertData() {
	try {
		connectMongoDB();
		await Users.createUser();
		await UserIdentities.createUserIdentity();
		await category.createCategory();
		await author.createAuthor();
		await language.createLanguage();
		await location.createLocation();
		await event.createEvent();
		await book.createBook();
		await bookunit.createBookUnite();
		await borrow.createBorrowBook();
		console.log('Migrate Done');
	} catch (e) {
		console.log(e.message);
	}
}

async function run() {
	await dropDatabase();
	await insertData();
	process.exit()
}
run()
