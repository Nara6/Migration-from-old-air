import { FuseNavigation } from '@fuse/types';

let isAdmin = false; 
if(localStorage.getItem('role') == 'Admin'){

    isAdmin = true; 
}

console.log(isAdmin); 

export const portalNavigation: FuseNavigation[] = [
   
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
                title    : 'ក្តារបង្ហាញទិន្នន័យ',
                translate: 'ក្តារបង្ហាញទិន្នន័យ',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard',
                children : [],
            }, 

            //===================================>> POS
            {
                id       : 'pos',
                title    : 'បញ្ជាទិញ',
                translate: 'បញ្ជាទិញ',
                type     : 'collapsable',
                icon     : 'desktop_mac',
                url      : '/pos',
                children : [
                    {
                        id       : 'all-pos',
                        title    : '0.3Kg',
                        translate: '0.3Kg',
                        type     : 'item',
                        icon     : 'keyboard_arrow_right',
                        url      : '/pos'
                    },
                    {
                        id      : 'all-pos',
                        title   : '0.5Kg',
                        translate: '0.5Kg',
                        type    : 'item',
                        icon     : 'keyboard_arrow_right',
                        url     : '/pos1'
                    }
                ],
            }, 

             //===================================>> Sale
             {
                id       : 'sale',
                title    : 'ការលក់',
                translate: 'ការលក់',
                type     : 'item',
                icon     : 'shopping_cart',
                url      : '/sales',
                children : [],
            }, 

            //===================================>> Branch
            {
                id       : 'branch',
                title    : 'សាខា',
                translate: 'សាខា',
                type     : 'item',
                icon     : 'store',
                url      : '/branches',
                hidden   : !isAdmin,
                children : [],
            }, 

            //===================================>> Product
            {
                id       : 'product',
                title    : 'ទំនិញ',
                translate: 'ទំនិញ',
                type     : 'collapsable',
                icon     : 'shop_two',
                hidden   : !isAdmin,
                children : [
                    {
                        id       : 'all-product',
                        title    : 'ទំនិញទាំងអស់',
                        translate: 'ទំនិញទាំងអស់',
                        type     : 'item',
                        icon     : 'keyboard_arrow_right',
                        url      : '/products'
                    }, 
                    {
                        id      : 'product-type',
                        title   : 'ប្រភេទទំនិញ',
                        translate: 'ប្រភេទទំនិញ',
                        type    : 'item',
                        icon     : 'keyboard_arrow_right',
                        url     : '/product-types'
                    }
                ],
            },

           
            //===================================>> Expense
            {
                id       : 'expense',
                title    : 'ការចំណាយ',
                translate: 'ការចំណាយ',
                type     : 'collapsable',
                icon     : 'monetization_on',
                hidden   : !isAdmin,
                children : [
                    {
                        id       : 'all-expense',
                        title    : 'ការចំណាយទាំងអស់',
                        translate: 'ការចំណាយទាំងអស់',
                        type     : 'item',
                        icon     : 'keyboard_arrow_right',
                        url      : '/expenses'
                    }, 
                    {
                        id      : 'expense-type',
                        title   : 'ប្រភេទការចំណាយ',
                        translate: 'ប្រភេទការចំណាយ',
                        type    : 'item',
                        icon     : 'keyboard_arrow_right',
                        url     : '/expense-types'
                    }
                ],
            },

            //===================================>> User
            {
                id       : 'user',
                title    : 'អ្នកប្រើប្រាស់',
                translate: 'អ្នកប្រើប្រាស់',
                type     : 'item',
                icon     : 'group',
                url      : '/users',
                hidden   : !isAdmin
            },

            //===================================>> My Profile
            {
                id       : 'profile',
                title    : 'Profile',
                translate: 'Profile',
                type     : 'item',
                icon     : 'person',
                url      : '/profile'
            },
    
        ],
    },

    
    
];
