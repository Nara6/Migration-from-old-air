import { FuseNavigation } from '@fuse/types';

export const cpNavigation: FuseNavigation[] = [
   
    {
        id       : 'applications',
        title    : 'Menus',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboard',
                title    : 'ផ្ទាំងព័តមាន',
                translate: 'ផ្ទាំងព័តមាន',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/cp/dashboard',
                permission: 'dashboard-list',
                children : [],
            }, 

            {
                id       : 'product',
                title    : 'ផលិតផល',
                translate: 'ផលិតផល',
                type     : 'collapsable',
                icon     : 'group',
                // url      : '/member',
                permission: 'setup-list',
                children : [

                    {
                        id       : 'product-info',
                        title    : 'Product-info',
                        translate: 'ផលិតផល',
                        type     : 'item',
                        url      : '/cp/products/all',
                    },
                    {
                        id       : 'ranks',
                        title    : 'Ranks',
                        translate: 'កញ្ចប់',
                        type     : 'item',
                        url      : '/cp/products/packages',
                    },
                ],
            },
            {
                id       : 'sale',
                title    : 'ការលក់',
                translate: 'NAV.Sale',
                type     : 'item',
                icon     : 'shopping_cart',
                url      : '/cp/sales',
                //permission: 'order-list',
                children : [],
            },

            {
                id       : 'member',
                title    : 'សមាជិក',
                translate: 'NAV.Member',
                type     : 'collapsable',
                icon     : 'group',
                // url      : '/member',
                permission: 'setup-list',
                children : [

                    {
                        id       : 'member-info',
                        title    : 'Member-info',
                        translate: 'ពត៌មានសមាជិក',
                        type     : 'item',
                        url      : '/cp/members/all',
                    },
                    {
                        id       : 'ranks',
                        title    : 'Ranks',
                        translate: 'តំណែង',
                        type     : 'item',
                        url      : '/cp/members/ranks',
                    },
                ],
            },
          
            {
                id       : 'finance',
                title    : 'ហិរញ្ញវត្ថុ',
                translate: 'NAV.Finance',
                type     : 'collapsable',
                icon     : 'monetization_on',
                permission: 'setup-list',
                children : [
                    {
                        id       : 'admin-topup-request',
                        title    : 'Admin-topup-request',
                        translate: 'សំណើរដាក់ប្រាក់',
                        type     : 'item',
                        url      : '/cp/finance/top-up'
                    },
                    {
                        id       : 'admin-withdraw-request',
                        title    : 'Admin-withdraw-request',
                        translate: 'សំណើរដកប្រាក់',
                        type     : 'item',
                        url      : '/cp/finance/withdraw'
                    },
                    
                    
                    
                ],
            },
            {
                id       : 'user',
                title    : 'អ្នកប្រើប្រាស់',
                translate: 'NAV.User',
                type     : 'item',
                icon     : 'person',
                url      : '/cp/users',
                permission: 'user-list',
                children : [],
            },

            {
                id       : 'setting',
                title    : 'ការកំណត់',
                translate: 'NAV.Setting',
                type     : 'collapsable',
                icon     : 'settings',
                permission: 'setup-list',
                children : [
                  
                    {
                        id       : 'sitting-title',
                        title    : 'Bank',
                        translate: 'ធនាគារ',
                        type     : 'item',
                        url      : '/cp/banks',
                    }
                ],
            },

            {
                id       : 'my-profile',
                title    : 'My Profile',
                translate: 'NAV.PROFILE',
                type     : 'item',
                icon     : 'person',
                url      : '/my-profile',
                permission: ''
            },
        ],
    },
    
];
