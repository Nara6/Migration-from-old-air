const category = require('../model/category');

const data = [
    {
        name: 'Phone',
        description: '',
        image_url: 'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/596688-Product-0-I-637982218040540343.jpg?v=1662700885',
    },
    {
        name: 'Mini Speaker',
        description: '',
        image_url: 'https://www.apple.com/v/homepod-mini/h/images/overview/hero_homepod_white__fbci8wwv3oi2_large.png',
    },
    {
        name: 'Tablet',
        description: '',
        image_url: 'https://www.notebookcheck.net/fileadmin/Notebooks/Lenovo/Tab_P11/4_zu_3_Teaser.png'
    },
    {
        name: 'Headphones',
        description: '',
        image_url: 'https://rent4keeps.com.au/wp-content/uploads/2022/11/rent-to-own-Apple-AirPods-Max-Headphones.jpg'
    },
    {
        name: 'Laptop',
        description: '',
        image_url: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/southeast-asia/kh/mkt/plp/laptops/matebook-x-pro-2022.jpg'
    },
    {
        name: 'Accessories',
        description: '',
        image_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=532&hei=582&fmt=png-alpha&.v=1660803972361'
    }
]

const createCategory = async ()=>{
    const result = await category.insertMany(data);
    console.log("Category Insert Successfully");
    return result;
}
module.exports= {createCategory}