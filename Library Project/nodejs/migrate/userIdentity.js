const UserIdentities = require('../src/models/userIdentity');
const Users = require('../src/models/user');

async function getUsersId() {
	var userId = [];
	const data = await Users.find().select('_id').select('name');
	data.forEach((usrId) => {
		const user = {
			id: usrId._id.toString(),
			Users: usrId.Users
		};
		userId.push(user);
	});
	return userId;
}
async function formData() {
	const User = await getUsersId();
	const data = [
		{
			userAccID: User[0].id,
			firstName: 'Dim',
			lastName: 'Lify',
			dob: new Date("2000-11-13"),
			tel: '016440639',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[1].id,
			firstName: 'Bros',
			lastName: 'Toch',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[2].id,
			firstName: 'Sopagna',
			lastName: 'heang',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
        {
			userAccID: User[3].id,
			firstName: 'Sivou',
			lastName: 'Bou',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'FEMALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[4].id,
			firstName: 'ratanak',
			lastName: 'hang',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[5].id,
			firstName: 'chakravuth',
			lastName: 'keat',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[6].id,
			firstName: 'sokheang',
			lastName: 'hal',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[7].id,
			firstName: 'kolaboth',
			lastName: 'Hok',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[8].id,
			firstName: 'lion',
			lastName: 'lion',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[9].id,
			firstName: 'ant',
			lastName: 'ant',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[10].id,
			firstName: 'tiger',
			lastName: 'tiger',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[11].id,
			firstName: 'bee',
			lastName: 'bee',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[12].id,
			firstName: 'Aardvark',
			lastName: 'Aardvark',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[13].id,
			firstName: 'Addax',
			lastName: 'Addax',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[14].id,
			firstName: 'Affenpinscher',
			lastName: 'Affenpinscher',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[15].id,
			firstName: 'African',
			lastName: 'African',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[16].id,
			firstName: 'African',
			lastName: 'Elephant12',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[17].id,
			firstName: 'AfricanPenguin',
			lastName: 'AfricanPenguin',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[18].id,
			firstName: 'AgamaLizard',
			lastName: 'AgamaLizard',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[19].id,
			firstName: 'AiredaleTerrier',
			lastName: 'AiredaleTerrier',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[20].id,
			firstName: 'American',
			lastName: 'American',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[21].id,
			firstName: 'Anatolian',
			lastName: 'Anatolian',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[22].id,
			firstName: 'Anglerfish',
			lastName: 'Anglerfish',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
		{
			userAccID: User[23].id,
			firstName: 'Anole',
			lastName: 'Anole',
			dob: new Date('2000-2-22'),
			tel: '010456789',
			gender: 'MALE',
			address: 'PhnomPenh',
			occupation: 'Student',
			nationality: 'KHMER'
		},
	
	];
    return data
}
const createUserIdentity = async () => {
	const data = await formData();
	const result = await UserIdentities.insertMany(data);
	console.log('Insert UserIdentity Successfully');
	return result;
};
module.exports = {
	createUserIdentity
};
