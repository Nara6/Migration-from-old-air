const event = require('../src/models/event');
const data = [
	{
		title: 'BookDay',
		description: 'Happybookday',
		image: 'https://res.cloudinary.com/itclibrary/image/upload/v1656597104/dummy/event/bookfair2_bbhvvi.jpg',
		
	}
];
const createEvent = async () => {
	const result = await event.insertMany(data);
	console.log('Insert Event Successfully');
	return result;
};

module.exports = {
	createEvent
};
