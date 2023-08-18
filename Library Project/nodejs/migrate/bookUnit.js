const { generate, validate } = require('isbn-util');

const BookUnit = require('../src/models/bookUnit');
const Book = require('../src/models/book');
const Location = require('../src/models/location');

async function getLocationId() {
	var locationId = [];
	const data = await Location.find().select('_id').select('block').select('shelf');
	data.forEach((locId) => {
		const loc = {
			id: locId._id.toString(),
			block: locId.block,
			shelf: locId.shelf
		};
		locationId.push(loc);
	});
	return locationId;
}
async function getBookId() {
	var booksId = [];
	const data = await Book.find().select('_id').select('title');
	data.forEach((bookId) => {
		const book = {
			id: bookId._id.toString(),
			title: bookId.title
		};
		booksId.push(book);
	});
	return booksId;
}
async function formData() {
	const books = await getBookId();
	const location = await getLocationId();
	const data = [
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[1].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[1].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[1].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[1].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[1].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[1].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[1].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[2].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[2].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[0].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			isPrimary:true,
			bookRef: books[0].id,
			location: location[0].id
		},
		{
			isbn: generate('13'),
			
			bookRef: books[3].id,
			location: location[1].id
		},
		{
			isbn: generate('13'),
			
			bookRef: books[3].id,
			location: location[1].id
		},
		{
			isbn: generate('13'),
			bookRef: books[4].id,
			location: location[1].id
		},
		{
			isbn: generate('13'),
			bookRef: books[4].id,
			location: location[1].id
		},
		{
			isbn: generate('13'),
			
			bookRef: books[5].id,
			location: location[1].id
		},
		{
			isbn: generate('13'),
			
			bookRef: books[5].id,
			location: location[1].id
		},
		{
			isbn: generate('13'),
			
			bookRef: books[6].id,
			location: location[2].id
		},
		{
			isbn: generate('13'),
			
			bookRef: books[6].id,
			location: location[2].id
		},
		{
			isbn: generate('13'),
			
			bookRef: books[7].id,
			location: location[2].id
		},
		
	];
	return data;
}

const createBookUnite = async () => {
	const data = await formData();
	const result = await BookUnit.insertMany(data);
	console.log('Insert BookUnit Successfully');
	return result;
};

module.exports = {
	createBookUnite
};
