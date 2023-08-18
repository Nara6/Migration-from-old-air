const author = require("../src/models/author");
const data = [
  {
    name:"William Shakespeare",
    dob: new Date("1564-4-26"),
    bio:"English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's greatest dramatist",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1655714039/dummy/User/Shakespeare_lnpgzg.webp"
  },
  {
    name:"Agatha Christie",
    dob: new Date("1890-7-15"),
    bio:" English writer known for her 66 detective novels and 14 short story collections, ",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1655714138/dummy/User/Agatha_Christie_yvqzfw.png"
  },
  {
    name:"Barbara Cartland",
    dob: new Date("1890-7-15"),
    bio:" English writer, best known as a prolific publisher of both contemporary and historical romance novels, the latter set primarily during the Victorian or Edwardian period. ",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1655714275/dummy/User/220px-Dame_Barbara_Cartland_Allan_Warren_r7bczt.jpg"
  },
  {
    name:"Harold Robbins",
    dob: new Date("1890-7-15"),
    bio:" Author of popular novels. One of the best-selling writers of all time, he wrote over 25 best-sellers, selling over 750 million copies in 32 languages. ",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1655714306/dummy/User/220px-Harold_Robbins__1979_hqcg1m.jpg"
  },
  {
    name:"Georges Simenon",
    dob: new Date("1890-7-15"),
    bio:"  prolific author who published nearly 500 novels and numerous short works, Simenon is best known as the creator of the fictional detective Jules Maigret.",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1655714339/dummy/User/Georges_Simenon__1963__without_hat_by_Erling_Mandelmann_eujxeq.jpg"
  },
  {
    name:"GoalKicker",
    dob: new Date("1996-6-15"),
    bio:"  You need great programming books? We have professional programming books for you!",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656039968/dummy/authors/1519868660450_j3czec.jpg"
  },
  {
    name:"Cody Lindley",
    dob: new Date("1976-6-13"),
    bio:"  Cody Lindley is a front-end/JavaScript developer and recovering Flash developer. He has an extensive background working professionally (25+ years) with HTML, CSS, JavaScript, and client-side performance techniques as it pertains to web development. If he is not wielding client-side code he is likely toying with interface/interaction design, Design Systems, and Component UI systems. When not sitting in front of a computer, it's a sure bet he is hanging out with his wife & three boys in Meridian, Idaho. In his spare time Cody is working towards being a One Dollar Apologist and enjoys defending the evidence for a classical Christian world-view with reason and empathy at c-m-c-a.com.",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656040829/dummy/authors/cody-lindley_zz4bva.jpg"
  },
  {
    name:"Paul McFedries",
    dob: new Date("1959-8-23"),
    bio:"  I have written nearly 100 books on technology and language, all of which are listed on my website (see the link, below). I'm also a programmer, web developer, and technology enthusiast.",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656040668/dummy/authors/paul-mcfedries-253x300_pfmgun.jpg"
  },
  {
    name:"Jose Roberto Olivas Mendoza",
    dob: new Date("1990-8-23"),
    bio:"  Emprendedor, empresario, tecnólogo, autor novel y padre de familia por casi 30 años..",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656040668/dummy/authors/paul-mcfedries-253x300_pfmgun.jpg"
  },
  {
    name:"Jake VanderPlas",
    dob: new Date("1982-5-23"),
    bio:"  Jake VanderPlas is a software engineer at Google Research, working on tools that support data-intensive research. He maintains a technical blog, Pythonic Perambulations,to share tutorials and opinions related to statistics, open software, and scientific computing in Python. ",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656041528/dummy/authors/download_jbxeg3.jpg"
  },
  {
    name:"Ed Freitas",
    dob: new Date("1982-5-23"),
    bio:"  Managing Director @ Echo Fox Events | Director @ Aero & Space Co | Facilitator | Aviator | Instructor | Keynote Speaker | Professional Drummer | Producer",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656041528/dummy/authors/download_jbxeg3.jpg"
  },
  {
    name:"James McCaffrey",
    dob: new Date("1982-5-23"),
    bio:"  Managing Director @ Echo Fox Events | Director @ Aero & Space Co | Facilitator | Aviator | Instructor | Keynote Speaker | Professional Drummer | Producer",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656041528/dummy/authors/download_jbxeg3.jpg"
  },
  {
    name:"Joseph D. Booth",
    dob: new Date("1982-5-23"),
    bio:"  Managing Director @ Echo Fox Events | Director @ Aero & Space Co | Facilitator | Aviator | Instructor | Keynote Speaker | Professional Drummer | Producer",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656041528/dummy/authors/download_jbxeg3.jpg"
  },
  {
    name:"Lucy Maud Montgomery",
    dob: new Date("1874-11-30"),
    bio:"  Lucy Maud Montgomery was born at Clifton (now New London), Prince Edward Island, Canada, on November 30, 1874. She achieved international fame in her lifetime, putting Prince Edward Island and Canada on the world literary map. Best known for her Anne of Green Gables books, she was also a prolific writer of short stories and poetry. She published some 500 short stories and poems and twenty novels before her death in 1942.",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656056193/dummy/book/ai-montgome_tkh8yh.jpg"
  },
  {
    name:"T.K. Eldridge",
    dob: new Date("1980-11-30"),
    bio:"  T.K. Eldridge retired from a career in Intelligence for the US Gov't to write. The experiences from then are now being used to feed the muse for paranormal romance, thrillers, supernatural, and urban fantasy stories. When they’re not writing, they are enjoying life in the Blue Ridge mountains of western North Carolina. Two dogs, a garden, a craft hobby and a love of Celtic Traditional music keep them from spending too much time at the computer.",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656056662/dummy/authors/authorlogo-nowords_0_1_ln8x30.webp"
  },
  {
    name:"Christine Pope",
    dob: new Date("1980-11-30"),
    bio:"  I’ve been writing stories ever since I could hold a pencil. When I was in grade school, my parents bought a typewriter — ostensibly for family use — and I quickly commandeered it, amazed by how much easier it was to write when I didn’t have to do everything longhand!My first (absolutely horrible, derivative, will never see the light of day) novel was written on that typewriter when I was eleven years old, and I was off to the races. I wrote all through junior high, high school, and college, but then stopped for a long time…nearly seven years…due to life getting in the way. Fanfic revived my love of writing (and yes, some of it is still out there, so you can try to track me down if you like!), and then I sold three books (Taking Dictation, Hearts on Fire, and Sympathy for the Devil) to a small e-publisher in 2010. The self-publishing revolution began gaining steam not long after that, and, for a variety of reasons, I made the decision to start publishing my books myself. Because I had a background in editing and graphic design, I did most of the work myself back then, as did a lot of other authors. These days, I work with professional cover designers, editors, and proofreaders, although I still do my own formatting and website design (in case you were wondering).",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656058276/dummy/authors/1544656010305_vltee6.jpg"
  },
  {
    name:"Malcolm Archibald",
    dob: new Date("1980-11-30"),
    bio:"  Born and bred in Edinburgh, I have been writing for as long as I can remember, mainly books with a historical background. If you have any queries or comments, please contact me! Malcolm",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656058885/dummy/authors/original-2bc090f0855e64d756717e91aa8e3cf1_gtxuvz.png"
  },
  {
    name:"Autar K Kaw",
    dob: new Date("1975-11-30"),
    bio:"  Autar Kaw is a professor of mechanical engineering at the University of South Florida. In 2012, he won the U.S Professor of the Year award from the Carnegie Foundation for Advancement of Teaching and the Council for Advancement and Support of Education.",
    image:"https://res.cloudinary.com/itclibrary/image/upload/v1656059387/dummy/authors/download_2_halcjy.jpg"
  },
];
const createAuthor = async () => {
  const result = await author.insertMany(data);
  console.log("Insert Author Successfully");
  return result;
};

module.exports = {
  createAuthor,
};
