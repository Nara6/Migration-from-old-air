import { FuseNavigation } from '@fuse/types';


export const financeNavigation: FuseNavigation[] = [
    
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
                url      : '/dashboard',
                permission: 'dashboard-list',
                children : [],
            }, 
           
            {
                id       : 'stock',
                title    : 'គ្រប់គ្រងស្តុក',
                translate: 'គ្រប់គ្រងស្តុក',
                type     : 'item',
                icon     : 'store',
                url      : '/distributors/member-request',
                permission: 'distributor',
                children : [],
            }, 

            {
                id       : 'order',
                title    : 'ទិញផលិតផល',
                translate: 'NAV.Order',
                type     : 'item',
                icon     : 'shopping_cart',
                url      : '/order',
                permission: 'order-list',
                children : [],
            },

          
            {
                id       : 'network',
                title    : 'តំណរ',
                translate: 'កសាងបណ្តាញ',
                type     : 'item',
                icon     : 'group',
                url      : '/network',
                permission: 'network-list',
                children : [],
            },

            {
                id       : 'finance',
                title    : 'ហិរញ្ញវត្ថុ',
                translate: 'NAV.Finance',
                type     : 'collapsable',
                icon     : 'monetization_on',
                // url      : '/finance',
                permission: 'dashboard-list',
                children : [

                    {
                        id       : 'withdraw-request',
                        title    : 'សំណើរដកប្រាក់',
                        translate: 'សំណើរដកប្រាក់',
                        type     : 'item',
                        url      : '/finance/withdraw-request'
                    },
                    {
                        id       : 'topup-request',
                        title    : 'សំណើរដាក់ប្រាក់',
                        translate: 'សំណើរដាក់ប្រាក់',
                        type     : 'item',
                        url      : '/finance/topup-request'
                    },
                    {
                        id       : 'finance-member-e-point',
                        title    : 'Finance-member-e-point',
                        translate: 'E-Point',
                        type     : 'item',
                        url      : '/finance/finance-member-e-point'
                    },
                    {
                        id       : 'finance-member-e-cash',
                        title    : 'Finance-member-e-cash',
                        translate: 'E-Cash',
                        type     : 'item',
                        url      : '/finance/finance-member-e-cash'
                    },
                    {
                        id       : 'finance-member-pv',
                        title    : 'Finance-member-pv',
                        translate: 'PV',
                        type     : 'item',
                        url      : '/finance/finance-member-pv'
                    },

                   
                    
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
