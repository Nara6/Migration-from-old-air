const Category = require('../model/category');
const Product = require('../model/product');

async function getCategoryId(){
    var categoryId = []
    const data = await Category.find().select('_id').select('name')
    data.forEach((catId) => {
        const category = {
            id: catId._id.toString(),
            name: catId.name
        }
        categoryId.push(category)
    })
    return categoryId;
}
async function formData(){
    const categoryId = await getCategoryId();
    const data = [
        {
            name: "Airpod 3",
            price: 168,
            category: categoryId[5].id,
            image_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=532&hei=582&fmt=png-alpha&.v=1660803972361'
        },
        {
            name: "Ipad",
            price: 1099.99,
            category: categoryId[3].id,
            image_url: 'https://assets.stickpng.com/images/61d4a5448b51e20004664d4a.png'
        },
        {
            name: "Laptop-Asus",
            price: 899.99,
            category: categoryId[4].id,
            image_url: 'https://dlcdnwebimgs.asus.com/gain/5a89f27d-3bfd-4274-be45-424508a54d38'
        },
        {
            name: "Apple-wireless Charger",
            price: 199.99,
            category: categoryId[5].id,
            image_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ3G2?wid=532&hei=582&fmt=png-alpha&.v=1655339971296'
        },
        {
            name: "Galaxy-Tab",
            price: 799.99,
            category: categoryId[2].id,
            image_url: 'https://images.samsung.com/is/image/samsung/ph-galaxy-tab-a-2019-101-sm-t515nzkextc-lperspectiveblack-thumb-160992247?$480_480_PNG$'
        },
        {
            
            name: "Galaxy buds pro",
            price: 199.99,
            category: categoryId[5].id,
            image_url: 'https://images.samsung.com/is/image/samsung/p6pim/ae/2208/gallery/ae-galaxy-buds2-pro-r510-sm-r510nlvamea-533203083?$650_519_PNG$'
        },
        {
            name: "Beat Studio3",
            price: 499.99,
            category: categoryId[3].id,
            image_url: 'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo3-wireless/pdp/solo3-pdp-p02.png.large.2x.png'
        },
        {
            name: "JBL Control X",
            price: 249.99,
            category: categoryId[1].id,
            image_url: 'https://kh.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw8f7e0327/JBL_ControlX_Black_021_dvHAMaster.png?sw=537&sfrm=png'
        }
    ];
    return data;
}
const createProduct = async()=>{
    const data = await formData();
    const result = await Product.create(data);
    console.log("Product inserted successfully!");
    return result;
}

module.exports = {createProduct}
