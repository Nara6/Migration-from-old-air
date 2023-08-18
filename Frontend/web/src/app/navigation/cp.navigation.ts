import { FuseNavigation } from '@fuse/types';

let isAdmin = false; 
if(localStorage.getItem('role') == 'Admin'){

    isAdmin = true; 
}

// console.log(isAdmin); 

export const cpNavigation: FuseNavigation[] = [
   
    {
        id       : 'applications',
        title    : 'Menus',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [

            //===================================>> Dashboard
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                translate: 'ផ្ទាំងព័ត៏មាន',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard',
                children : [],
            }, 

            //===================================>> POS
            {
                id       : 'pos',
                title    : 'POS',
                translate: 'ការបញ្ជារទិញ',
                type     : 'item',
                icon     : 'desktop_mac',
                url      : '/pos',
                children : [],
            }, 

             //===================================>> Sale
             {
                id       : 'sale',
                title    : 'Sales',
                translate: 'ការលក់',
                type     : 'item',
                icon     : 'shopping_cart',
                url      : '/sales',
                children : [],
            }, 

            //===================================>> Product
            {
                id       : 'product',
                title    : 'Product',
                translate: 'ផលិតផល',
                type     : 'collapsable',
                icon     : 'shop_two',
                hidden   : !isAdmin,
                children : [
                    {
                        id       : 'all-product',
                        title    : 'All Products',
                        translate: 'ផលិតផលទាំងអស់',
                        type     : 'item',
                        icon     : 'keyboard_arrow_right',
                        url      : '/products'
                    }, 
                    {
                        id      : 'product-type',
                        title   : 'Type',
                        translate: 'ប្រភេទផលិតផល',
                        type    : 'item',
                        icon     : 'keyboard_arrow_right',
                        url     : '/product-types'
                    }

                ],
            },

            //===========================================>>User
            
            {
                id: "user",
                title: "user",
                translate: "អ្នកប្រើប្រាស់",
                type: 'item',
                icon: "people",
                url: "/user"

            },

            //===================================>> My Profile
            {
                id       : 'profile',
                title    : 'Profile',
                translate: 'គណនី',
                type     : 'item',
                icon     : 'person',
                url      : '/my-profile'
            },
    
        ],
    },

    
    
];
