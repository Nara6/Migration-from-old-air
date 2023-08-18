import { FuseNavigation } from '@fuse/types';


export const memberNavigation: FuseNavigation[] = [
    
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
                id       : 'network',
                title    : 'បណ្តាញ',
                translate: 'បណ្តាញ',
                type     : 'collapsable',
                icon     : 'group',
                children : [

                    {
                        id       : 'network-node',
                        title    : 'Finance-member-e-point',
                        translate: 'Graph',
                        type     : 'item',
                        url      : '/network/graph'
                    },
              
                    {
                        id       : 'network-referral',
                        title    : 'ណែនាំផ្ទាល់',
                        translate: 'ណែនាំផ្ទាល់',
                        type     : 'item',
                        url      : '/network/referral'
                    }
                ],
            },

            {
                id       : 'finance',
                title    : 'ហិរញ្ញវត្ថុ',
                translate: 'NAV.Finance',
                type     : 'collapsable',
                icon     : 'monetization_on',
                children : [

                    {
                        id       : 'finance-member-e-point',
                        title    : 'Finance-member-e-point',
                        translate: 'USD',
                        type     : 'item',
                        url      : '/finance/usd'
                    },
              
                    {
                        id       : 'finance-member-pv',
                        title    : 'Finance-member-pv',
                        translate: 'GCF Coin',
                        type     : 'item',
                        url      : '/finance/gcf'
                    },
                    {
                        id       : 'withdraw-request',
                        title    : 'សំណើរដកប្រាក់',
                        translate: 'សំណើរដកប្រាក់',
                        type     : 'item',
                    },
                    // {
                    //     id       : 'topup-request',
                    //     title    : 'សំណើរដាក់ប្រាក់',
                    //     translate: 'សំណើរដាក់ប្រាក់',
                    //     type     : 'item',
                    //     url      : '/finance/topup-request'
                    // },
                    
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
