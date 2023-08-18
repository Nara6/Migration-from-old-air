const Book = require("../src/models/book");
const Category = require("../src/models/category")
const Author = require("../src/models/author");
const Language = require("../src/models/language");

async function getCategoryId(){
    var categoryId = []
    const data = await Category.find().select('_id').select('category')
    data.forEach((catId) => {
        const category = {
            id: catId._id.toString(),
            category: catId.category
        }
        categoryId.push(category)
      })
      return categoryId
    }
    async function getAuthorId(){
      var authorId = []
      const data = await Author.find().select('_id').select('name')
      data.forEach((AurId) => {
        const author = {
          id: AurId._id.toString(),
          author: AurId.name
        }
        authorId.push(author)
      })
      return authorId
    }
    async function getLanguageId(){
      var languageId = []
      const data = await Language.find().select('_id').select('language')
      data.forEach((langId) => {
        const lang = {
          id: langId._id.toString(),
          language: langId.name
        }
        languageId.push(lang)
      })
      return languageId
    };
async function formData(){
    const category = await getCategoryId()
    const author = await getAuthorId()
    const language = await getLanguageId()
    const data = [
      {
        title:'MySQL',
        description:'The SQL Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656040382/dummy/book.img/SQLGrow_iloro5.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042775/dummy/book/SQLNotesForProfessionals_mj2elu.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'AngularJS Notes for Professionals book',
        description:'The Angular Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656042234/dummy/book.img/AngularJSGrow_ryrwyq.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656043143/dummy/book/AngularJSNotesForProfessionals_xoii06.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'Angular 2+ Notes for Professionals book',
        description:'The Angular Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656042236/dummy/book.img/Angular2Grow_cymq0r.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042771/dummy/book/Angular2NotesForProfessionals_g7eyz3.pdf",
        Publisher: "GoalKicker.com",

      },
      {
        title:'Bash Notes for Professionals book',
        description:'The Bash Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656042315/dummy/book.img/BashGrow_umu51l.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042779/dummy/book/BashNotesForProfessionals_oi2tzq.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'C# Notes for Professionals book',
        description:'The C# Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656042415/dummy/book.img/CSharpGrow_tkk8a4.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042415/dummy/book.img/CSharpGrow_tkk8a4.png",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'Git® Notes for Professionals book',
        description:'The Git Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656042415/dummy/book.img/CSharpGrow_tkk8a4.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042479/dummy/book.img/GitGrow_fxail4.png",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'HTML5 Notes for Professionals book',
        description:'HTML5 Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656042575/dummy/book.img/HTML5Grow_rcf66j.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042755/dummy/book/HTML5NotesForProfessionals_mrohsz.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'C++',
        description:'The C++ Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656039577/dummy/book.img/CPlusPlusGrow_cvoamx.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656039618/dummy/book/CPlusPlusNotesForProfessionals_krftv1.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'HTML5 Canvas Notes for Professionals book',
        description:'HTML5 Canvas Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1655717649/dummy/book.img/4cc4b6-20150304-catch22_znm6lv.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042781/dummy/book/HTML5CanvasNotesForProfessionals_fgkimp.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'Front-end',
        description:'This is a guide that everyone can use to learn about the practice of front-end development. It broadly outlines and discusses the practice of front-end engineering: how to learn it and what tools are used when practicing it in 2019.' , 
        category: category[0].id,
        author: author[7].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656040378/dummy/book.img/FM_2019Cover_final_idz2t4.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042773/dummy/book/Front-end_Developer_Handbook_2019_jdy1pb.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'Web Design Playground',
        description:'Topics included: Getting to Know HTML and CSS • Building Your First Web Page • Adding Structure to Your Page • Formatting Your Web Page • Project: Creating a Personal Home Page • Adding Images and Other Media • Learning More About Styles • Floating and Positioning Elements • Styling Sizes, Borders, and Margins • Project: Creating a Landing Page • Learning Page Layout Basics • Creating Page Layouts with Flexbox • Designing Responsive Web Pages • Making Your Images and Typography Responsive • Project: Creating a Photo Gallery • More HTML Elements for Web Designers • Adding a Splash of Color to Your Web Designs • Enhancing Page Text with Typography • Learning Advanced CSS Selectors • Project: Creating a Portfolio Page' , 
        category: category[0].id,
        author: author[8].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656040378/dummy/book.img/FM_2019Cover_final_idz2t4.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042775/dummy/book/SQLNotesForProfessionals_mj2elu.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'.NET Framework Notes for Professionals',
        description:'The .NET Framework Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656040378/dummy/book.img/FM_2019Cover_final_idz2t4.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042759/dummy/book/DotNETFrameworkNotesForProfessionals_q4gv7r.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'PostgreSQL® Notes for Professionals book',
        description:'The .NET Framework Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[1].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656055129/dummy/book.img/PostgreSQLGrow_wvu61r.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656055035/dummy/book/PostgreSQLNotesForProfessionals_fcvuyl.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " May 2018",
      },
      {
        title:'NuGet In-House Succinctly',
        description:'In NuGet In-House Succinctly, author José Roberto Olivas Mendoza guides readers through the process of setting up a local NuGet server, creating a distributable package, publishing the package to that server, and then using the package in other projects. This is an essential ebook for all .NET developers.' , 
        category: category[0].id,
        author: author[9].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656041442/dummy/book.img/nuget-in-house-succinctly_qmdb7u.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656042764/dummy/book/nuget-in-house-succinctly_w2cbrm.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'Python Data Science Handbook',
        description:'Several resources exist for individual pieces of this data science stack, but only with the Python Data Science Handbook: Essential Tools for Working with Data do you get them all—IPython, NumPy, Pandas, Matplotlib, Scikit-Learn, and other related tools.' , 
        category: category[0].id,
        author: author[9].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656041764/dummy/book.img/python-data-science-handbook_ye9lon.jpg",
        language: language[0].id,
        bookFile:"https://jakevdp.github.io/PythonDataScienceHandbook/",
        Publisher: "O’Reilly Media",
        publishedDate: " November 2016",
      },
      {
        title:'Algorithms Notes for Professionals book',
        description:'The Algorithms Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656041764/dummy/book.img/python-data-science-handbook_ye9lon.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656041933/dummy/book/AlgorithmsNotesForProfessionals_mtxks4.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'JavaScript® Notes for Professionals book',
        description:'JavaScript® Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656044216/dummy/book.img/JavaScriptGrow_hdrjm4.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656044282/dummy/book/JavaScriptNotesForProfessionals_n6dpoi.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'jQuery® Notes for Professionals book',
        description:'jQuery Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[0].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656044964/dummy/book.img/jQuery_fluw7c.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656044921/dummy/book/jQueryNotesForProfessionals_vvkhll.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'Oracle Database Notes for Professionals',
        description:'The Oracle Database Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow. Text content is released under Creative Commons BY-SA.' , 
        category: category[2].id,
        author: author[5].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656052572/dummy/book.img/OracleDatabaseGrow_bnmhzi.png",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656052553/dummy/book/OracleDatabaseNotesForProfessionals_pvdmxf.pdf",
        Publisher: "GoalKicker.com",
        publishedDate: " July 2019",
      },
      {
        title:'Robotic Process Automation Succinctly',
        description:'This book will serve as a handbook for students, researchers and practitioners in the area of automatic (computer) face recognition and inspire some future research ideas by identifying potential research directions. The book consists of 28 chapters, each focusing on a certain aspect of the problem.' , 
        category: category[1].id,
        author: author[10].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656053184/dummy/book.img/robotic-process-automation-succinctly_mx4idk.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656053216/dummy/book/robotic-process-automation-succinctly_typwxl.pdf",
        publisher:"Syncfusion Inc.", 
        publishedDate: "June 11, 2020",
      },
      {
        title:'Neural Networks with JavaScript Succinctly',
        description:'In Neural Networks with JavaScript Succinctly, Author James McCaffrey leads you through the fundamental concepts of neural networks, including their architecture, input-output, tanh and softmax activation, back-propagation, error and accuracy, normalization and encoding, and model interpretation.' , 
        category: category[1].id,
        author: author[10].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656053184/dummy/book.img/robotic-process-automation-succinctly_mx4idk.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656054010/dummy/book/neural-networks-with-javascript-succinctly_ml8ri4.pdf",
        publisher:"Syncfusion Inc.", 
        publishedDate: "July 2019",
      },
      {
        title:'Keras Succinctly',
        description:'Neural networks are a powerful tool for developers, but harnessing them can be a challenge. With Keras Succinctly, author James McCaffrey introduces Keras, an open-source, neural network library designed specifically to make working with backend neural network tools easier.' , 
        category: category[1].id,
        author: author[10].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656053184/dummy/book.img/robotic-process-automation-succinctly_mx4idk.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656054654/dummy/book/keras-succinctly_vupcss.pdf",
        publisher:"Syncfusion Inc.", 
        publishedDate: "September 2018",
      },
      {
        title:'SQL Server Metadata Succinctly',
        description:'Neural networks are a powerful tool for developers, but harnessing them can be a challenge. With Keras Succinctly, author James McCaffrey introduces Keras, an open-source, neural network library designed specifically to make working with backend neural network tools easier.' , 
        category: category[2].id,
        author: author[10].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656053184/dummy/book.img/robotic-process-automation-succinctly_mx4idk.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656055832/dummy/book/sql-server-metadata-succinctly_kid2vh.pdf",
        publisher:"Syncfusion Inc.", 
        publishedDate: "November 2019",
      },
      {
        title:'Anne of Green Gables',
        description:'A skinny, red-haired, and freckled orphan girl is mistakenly sent to live with a shy, elderly bachelor and his spinster sister on the north shore of Canadas Prince Edward Island; The elderly siblings had asked to adopt a young boy who could work on the family farm, but the imaginitive and rambunctious Anne Shirley arrives instead, and becomes the center of a series of entertaining adventures.' , 
        category: category[3].id,
        author: author[11].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656056530/dummy/book.img/cover-orig-5036_q7y7qi.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656056290/dummy/book/Anne-of-Green-Gables_icebvk.pdf",
        publisher:"Lucy Maud Montgomery", 
        publishedDate: "March 1908",
      },
      {
        title:'Induction',
        description:"They werent supposed to exist.Sidonie  Sinclair Boudreau were the offspring of a witch and a shifter. Such pairings usually resulted in death. Sid & Sin had not only survived, but thrived, and managed to sidestep the family legacy of supernatural policing. The disappearance of their parents changed everything. A cryptic message, an ancient prophecy, and a mystery to uncover in order to bring their parents home puts the twins in the crosshairs of an enemy they didnt know existed.What would you do, to save those you loved? Fans of paranormal mysteries will love this fast-paced, five star ride!" , 
        category: category[4].id,
        author: author[12].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656056889/dummy/book.img/induction_aq58b9.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656056934/dummy/book/Induction_lat77a.pdf",
        publisher:"T.K. Eldridge", 
        publishedDate: "2019",
      },
      {
        title:'Becoming Bader',
        description:"When Bader's parents died in a house fire, she ended her plans for law school and went home to run the family bookstore. years later, the world is changing once again and Bader's life changes with it. Does she have what it takes? Will she take risks with her heart and find her truth?" , 
        category: category[4].id,
        author: author[12].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656057055/dummy/book.img/winthrop3_nocdyt.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656057045/dummy/book/Becoming-Bader_hncgds.pdf",
        publisher:"T.K. Eldridge", 
        publishedDate: "2019",
      },
      {
        title:'Remembrance',
        description:"I was three when I watched my mother die.Now I'm back in Muckle Cove digging into her murder.They say coming home is never easy, but what I'm finding goes so much deeper than anyone could have imagined.Ancient magic, modern politics, and my mother's ghost all point to some truth in the past that could change my present forever. If it doesn't kill me first...Grab this first in the five-star series that readers say ...makes you believe in magic!" , 
        category: category[4].id,
        author: author[12].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656057393/dummy/book.img/Remembrance_xjlilb.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656057262/dummy/book/Remembrance_vgrmna.pdf",
        publisher:"T.K. Eldridge", 
        publishedDate: "2019",
      },
      {
        title:'Dead & Buried',
        description:"Detectives Kennedy and Donovan were partners for years. Then one of them died. And yet, they're still partners.Kennedy has to solve Donovan's death while his partner's ghost helps him. Sort of. How do you explain where you got the tips?How do you hide that you're speaking to thin air and no, you haven't lost your mind? Kennedy has to hide how he's figuring it all out so he can keep his badge and solve the murder - before he ends up dead and buried too Check out Partners in Crime - a new supernatural mystery series by T.K. Eldridge." , 
        category: category[4].id,
        author: author[12].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656057534/dummy/book.img/518BnwMFa6L_dr0uul.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656057262/dummy/book/Remembrance_vgrmna.pdf",
        publisher:"T.K. Eldridge", 
        publishedDate: "2021",
      },
      {
        title:'Jericho',
        description:"He had made the ultimate sacrifice...only he wasn't really dead.He signed their forms. He accepted their diagnosis. He welcomed the treatment.He changed his name and disappeared.Now he is treated as less than human. A pet, held in the Facility until he and his team are let loose on a government-sanctioned target.Except this next target isn't some terrorist or criminal - it's a teenage girl on US soil, along with the woman who stole his heart. Jericho and his team may be a different kind of soldier, but they still hold to their moral codes and honor. Going against a direct order is not something they would normally consider...But nothing about this team is normal." , 
        category: category[4].id,
        author: author[12].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656057779/dummy/book.img/hybrid1_kojd8f.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656057262/dummy/book/Remembrance_vgrmna.pdf",
        publisher:"T.K. Eldridge", 
        publishedDate: "2021",
      },
      {
        title:'Darkangel',
        description:"inding the man of your dreams can be a real nightmare….As the future prima, or head witch of her clan, Angela McAllister is expected to bond with her consort during her twenty-first year, thus ensuring that she will come into her full powers at the appointed time. The clock is ticking down, and her consort has yet to make an appearance. Instead, her dreams are haunted by a man she’s never seen, the one she believes must be her intended match.But with time running out, and dark forces attempting to seize her powers for their own, Angela is faced with a terrible choice: give up her dreams of the man she may never meet and take the safer path, or risk leaving her clan and everyone in it at the mercy of those who seek their ruin.Darkangel is the first book in the Witches of Cleopatra Hill, a paranormal romance trilogy set in the haunted town of Jerome, Arizona." , 
        category: category[4].id,
        author: author[13].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656058571/dummy/book.img/3_xwz3yy.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656058567/dummy/book/Darkangel_k17iz8.pdf",
        publisher:"Christine Pope", 
        publishedDate: "2021",
      },
      {
        title:'Chosen',
        description:"When a fatal fever nearly wipes out the entire world's population, the survivors of what became known as the Dying believe the worst is in the past. Little do they know…In the aftermath of the Dying, survivor Jessica Monroe searches for sanctuary in a world unlike any she's ever known before. As fear and isolation envelop her, Jessica encounters the sensitive and helpful Jace, who she believes is another survivor. But Jace has a past and secrets of his own that's he not ready to disclose. Soon Jessica realizes that the destruction of humanity might actually be the first step in a larger, more complicated plan -- a plan that may very well involve her. Struggling to discover her role in a terrifying new world where everything has changed, she must decide who she can trust. But is the price for that trust just too high?" , 
        category: category[4].id,
        author: author[13].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656058576/dummy/book.img/51Et1N2-NBL_ns27vp.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656058410/dummy/book/Chosen_rj7jgz.pdf",
        publisher:"Christine Pope", 
        publishedDate: "2021",
      },
      {
        title:'The Swordswoman',
        description:"The Norse thought they could conquer Scotland. They were wrong. Melcorka is an ordinary young woman from the Isles. But when her homeland of Alba is attacked by the Viking horde, Melcorka abandons her life of luxury and chooses the path of a warrior. With a ragtag band of companions, she heads south to unite the clans and free the land from the Norsemen's scourge - and claim her destiny." , 
        category: category[4].id,
        author: author[14].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656059014/dummy/book.img/510sh6QGq8L_etyagz.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656058410/dummy/book/Chosen_rj7jgz.pdf",
        publisher:"Malcolm Archibald", 
        publishedDate: "2016",
      },
      {
        title:'The Fireraisers',
        description:"The Norse thought they could conquer Scotland. They were wrong. Melcorka is an ordinary young woman from the Isles. But when her homeland of Alba is attacked by the Viking horde, Melcorka abandons her life of luxury and chooses the path of a warrior. With a ragtag band of companions, she heads south to unite the clans and free the land from the Norsemen's scourge - and claim her destiny." , 
        category: category[4].id,
        author: author[14].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656059097/dummy/book.img/51xZtqHub9L_zk9esa.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656058410/dummy/book/Chosen_rj7jgz.pdf",
        publisher:"Malcolm Archibald", 
        publishedDate: "2016",
      },
      {
        title:'Displaced',
        description:"The Norse thought they could conquer Scotland. They were wrong. Melcorka is an ordinary young woman from the Isles. But when her homeland of Alba is attacked by the Viking horde, Melcorka abandons her life of luxury and chooses the path of a warrior. With a ragtag band of companions, she heads south to unite the clans and free the land from the Norsemen's scourge - and claim her destiny." , 
        category: category[3].id,
        author: author[14].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656059266/dummy/book.img/51Sc8dm3q3L_fbdvts.jpg",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656059219/dummy/book/Displaced_t32b85.pdf",
        publisher:"Stephen Drake", 
        publishedDate: "2016",
      },
      {
        title:'Mathematical Analysis I',
        description:"Knowledge of this material will also be of benefit to graduate students in economics, signal and image processing, fluid and structural mechanics, etc.This text is an outgrowth of lectures given at the University of Windsor, Canada. One of our main objectives is updating the undergraduate analysis as a rigorous post-calculus course. While such excellent books as Dieudonn´e’sFoundations of Modern Analysis are addressed mainly to graduate students, we try to simplify the modern Bourbaki approach to make it accessible to sufficiently advanced undergraduates." , 
        category: category[5].id,
        author: author[15].id,
        bookThumbnail:"https://res.cloudinary.com/itclibrary/image/upload/v1656059715/dummy/book.img/mathanalysis_x3xhkf.gif",
        language: language[0].id,
        bookFile: "https://res.cloudinary.com/itclibrary/image/upload/v1656059637/dummy/book/zakon-analysisI-a4-one_niuxwh.pdf",
        publisher:"Autar K Kaw", 
        publishedDate: "1989",
      },
    
    
    ];

    return data
}
const createBook = async () => {
    const data = await formData()
    const result = await Book.insertMany(data);
    console.log("Insert Book Successfully");
    return result;
  
};

module.exports = {
  createBook,
};
