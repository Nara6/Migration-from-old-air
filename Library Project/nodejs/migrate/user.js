const bcrypt = require('bcryptjs')

const Users = require('../src/models/user')

const data = [
    {
        email: "lifydim@gmail.com",
        username: "DimLify",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        role: "Admin",
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1656043880/dummy/User/286342496_1647726845581979_5599194447195422316_n_o4rtf0.jpg",
    },
    {
        email: "brostoch@gmail.com",
        username: "BrosToch",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        role: "Admin",
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1656043880/dummy/User/photo_2021-01-21_10-20-54_u8txpe.jpg",
    },
    {
        email: "sopagna@gmail.com",
        username: "Sopagna",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        role: "Admin",
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1656043880/dummy/User/270198979_3017003295209510_9130744724563432367_n_l6gwew.jpg",
    },
    {
        email: "bousivou@gmail.com",
        username: "sivou",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        role: "Admin",
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1656043886/dummy/User/photo_2022-01-01_12-44-13_boaqcz.jpg",
    },
    {
        email: "chhengsophin@gmail.com",
        username: "sophin",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        role: "Admin",
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1656043885/dummy/User/photo_2022-06-21_21-30-36_f2madu.jpg",
    },
    {
        email: "hangmonyratanak@gmail.com",
        username: "monyratanak",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        role:"Admin",
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1656043885/dummy/User/277096808_1627776167599981_6308874053978657425_n_twfvzy.jpg",
    },
    {
        email: "keatchakravuth@gmail.com",
        username: "chakravuth",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        role:"Admin",
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
    },
    {
        email: "halsokheang@gmail.com",
        username: "sokheang",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        role:"Admin",
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1656043884/dummy/User/57591562_2295285890738764_1321906580551106560_n_ca4slp.jpg",
    },
    {
        email: "Hokkolaboth@gmail.com",
        username: "hokolaboth",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        role:"Admin",
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1656043883/dummy/User/photo_2022-04-25_11-15-48_nwavwm.jpg",
    },
    {
        email: "lion@gmail.com",
        username: "balodo12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
    },
    {
        email: "ant@gmail.com",
        username: "ant",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
    },
    {
        email: "tiger@gmail.com",
        username: "tiger",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
    },
    {
        email: "bee@gmail.com",
        username: "bee",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
    },
    {
        email: "Aardvark@gmail.com",
        username: "Aardvark12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
    },
    {
        email: "Addax@gmail.com",
        username: "Addax12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Affenpinscher@gmail.com",
        username: "Affenpinscher12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "African Bush Elephant@gmail.com",
        username: "African Bush Elephant12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "African Forest Elephant@gmail.com",
        username: "African Forest Elephant12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "AfricanPenguin@gmail.com",
        username: "African Penguin12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "AgamaLizard@gmail.com",
        username: "AgamaLizard12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "AiredaleTerrier@gmail.com",
        username: "AiredaleTerrier12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "American@gmail.com",
        username: "American12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Anatolian@gmail.com",
        username: "Anatolian12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Anglerfish@gmail.com",
        username: "Anglerfish12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Anole@gmail.com",
        username: "Anole12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Anteater@gmail.com",
        username: "Anteater12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Appenzeller@gmail.com",
        username: "Appenzeller12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Arabian@gmail.com",
        username: "Arabian12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Archaeotherium@gmail.com",
        username: "Archaeotherium12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Arctic@gmail.com",
        username: "Arctic12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Arctotherium@gmail.com",
        username: "Arctotherium12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Armyworm@gmail.com",
        username: "Armyworm",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Asp@gmail.com",
        username: "Asp12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Aussiedor@gmail.com",
        username: "Aussiedor12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Babirusa@gmail.com",
        username: "Babirusa12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Badger@gmail.com",
        username: "Badger12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "BaldEagle@gmail.com",
        username: "BaldEagle12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Banana@gmail.com",
        username: "Banana12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Banded@gmail.com",
        username: "Bandicoot12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Bandicoot@gmail.com",
        username: "Bandicoot12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Barbet@gmail.com",
        username: "Barbet12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Barnacle@gmail.com",
        username: "Barnacle12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Barred@gmail.com",
        username: "Barred12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Basilosaurus@gmail.com",
        username: "Basilosaurus12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Basset@gmail.com",
        username: "Basset12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Bat@gmail.com",
        username: "Bat12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Baya@gmail.com",
        username: "Baya12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Beagador@gmail.com",
        username: "Beagador12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Beaglier@gmail.com",
        username: "Beaglier12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Bearded@gmail.com",
        username: "Bearded12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Beaski@gmail.com",
        username: "Beaski12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Beaver@gmail.com",
        username: "Beaver12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Belgian@gmail.com",
        username: "Belgian12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Bengal@gmail.com",
        username: "Bengal12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Bongo@gmail.com",
        username: "Bongo12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Brachiosaurus@gmail.com",
        username: "Brachiosaurus12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Boxsky@gmail.com",
        username: "Boxsky12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Budgerigar@gmail.com",
        username: "Budgerigar12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Bullfrog@gmail.com",
        username: "Bullfrog12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Bumblebee@gmail.com",
        username: "Bumblebee12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Baboon@gmail.com",
        username: "Baboon12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
        
    },
    {
        email: "Baiji@gmail.com",
        username: "Baiji12",
        password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)), 
        profile:"https://res.cloudinary.com/itclibrary/image/upload/v1655713622/dummy/User/download_o0lz11.jpg",
       
    }
    
]

const createUser = async()=>{
    const result = await Users.insertMany(data)
    console.log("Insert User Successfully");
    return result;
}

module.exports = {
    createUser
}