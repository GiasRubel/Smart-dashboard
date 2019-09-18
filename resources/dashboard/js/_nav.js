export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'primary',
                text: 'NEW'
            }
        },
        {
            name: 'Order',
            url: '/orders',
            icon: 'far fa-clone',
            children: [
                {
                    name: "Order's",
                    url: '/dashboard/orders/list',
                    icon: 'fa fa-list'
                },
                {
                    name: "Make Order",
                    url: "/dashboard/orders/make-order",
                    icon: 'fa fa-dollar'
                },
                {
                    name: "Pending For Review",
                    url: '/dashboard/orders/pending-review',
                    icon: 'fas fa-restroom'
                },
                {
                    name: "Completed Review",
                    url: '/dashboard/orders/completed-review',
                    icon: 'fas fa-check-circle'
                },
                {
                    name: "Ready For purchase",
                    url: '/dashboard/orders/ready-purchase',
                    icon: 'far fa-thumbs-up'
                },
                {
                    name: "Cash Payment",
                    url: '/dashboard/orders/cashpayment',
                    icon: 'fa fa-dollar'
                },



            ]
        },
        {
            name: 'Items',
            url: '/items',
            icon: 'fa fa-list',
            children: [
                {
                    name: 'Cart Items',
                    url: '/dashboard/items/cart-item',
                    icon: 'fas fa-shopping-cart'
                },

                {
                    name: 'Cart Review Item',
                    url: '/dashboard/items/cart-review-item',
                    icon: 'fas fa-eye'
                },
                {
                    name: 'Discount item lists',
                    url: '/dashboard/items/cart-item/discounts',
                    icon: 'fas fa-gift'
                }
            ]
        },
        {
            name: 'Users',
            url: '/users',
            icon: 'icon-user',
            children: [
                {
                    name: 'Users',
                    url: '/dashboard/users',
                    icon: 'icon-layers',
                },
                {
                    name: 'Admin User',
                    url: '/dashboard/users/admins',
                    icon: 'fas fa-unlock-alt',
                },
                // {
                //     name: 'Member',
                //     url: '/dashboard/users/member',
                //     icon: 'icon-layers',
                // },
                {
                    name: 'Roles',
                    url: '/dashboard/users/roles',
                    icon: 'fas fa-user-tie'
                },
                {
                    name: 'Permissions',
                    url: '/dashboard/users/permissions',
                    icon: 'icon-user-following'
                },
                {
                    name: 'UserRoles',
                    url: '/dashboard/users/user-roles',
                    icon: 'icon-energy'
                },
                {
                    name: 'Groups',
                    url: '/dashboard/users/groups',
                    icon: 'icon-layers'

                },
            ]
        },


        /*{
            name: 'Order',
            url: '/components',
            icon: 'icon-puzzle',
            badge: {
                variant: 'danger',
                text: 'NEW'
            },
            children: [
                {
                    name: 'Buttons',
                    url: '/dashboard/components/buttons',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Social Buttons',
                    url: '/dashboard/components/social-buttons',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Cards',
                    url: '/dashboard/components/cards',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Forms',
                    url: '/dashboard/components/forms',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Modals',
                    url: '/dashboard/components/modals',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Switches',
                    url: '/dashboard/components/switches',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Tables',
                    url: '/dashboard/components/tables',
                    icon: 'icon-puzzle'
                }
            ]
        },*/

        {
            name: 'Region',
            url: '/region',
            icon: 'icon-star',
            children: [
                {
                    name: 'Country',
                    url: '/dashboard/region/country',
                    icon: 'fas fa-flag'
                },
                {
                    name: 'State',
                    url: '/dashboard/region/state',
                    icon: 'fas fa-flag-usa'
                },
                {
                    name: 'District',
                    url: '/dashboard/region/district',
                    icon: 'fas fa-flag-usa'
                },
                {
                    name: 'Currency',
                    url: '/dashboard/region/currency',
                    icon: 'fa fa-dollar'
                }
            ]
        },

        {
            name: 'Payment',
            url: '/payment',
            icon: 'far fa-credit-card',
            children: [
                {
                    name: 'Payment Method',
                    url: '/dashboard/payment-method/',
                    icon: 'fa fa-dollar'
                },
                {
                    name: 'Payment By Card',
                    url: '/dashboard/payment/by-card/',
                    icon: 'far fa-credit-card'
                },
            ]
        },
        {
            name: 'Banners',
            url: '/banners',
            icon: 'fa fa-list',
            children: [
                {
                    name: 'Baners List',
                    url: '/dashboard/banners',
                    icon: 'fas fa-shopping-cart'
                },
            ]
        },
        {
            name: 'Shipping',
            url: '/shipping',
            icon: 'icon-calculator',
            children: [
                {
                    name: 'Shipping Rates',
                    url: '/dashboard/shipping/',
                    icon: 'fa fa-dollar'
                },


            ]
        },
        {
            name: 'Products Setting',
            url: '/products',
            icon: 'icon-settings',
            children: [
                {
                    name: 'Measurement',
                    url: '/dashboard/products/products-measurment/',
                    icon: 'fas fa-ruler-vertical'
                },
                {
                    name: 'Approved Msrmnt',
                    url: '/dashboard/products/approved-products-measurment/',
                    icon: 'fas fa-check'
                },
                {
                    name: 'No Approved Msrmnt',
                    url: '/dashboard/products/notapproved-products-measurment/',
                    icon: 'fas fa-times'
                },
                {
                    name: 'Store',
                    url: '/dashboard/products/store',
                    icon: 'fas fa-database'
                },
                {
                    name: 'Prohibited',
                    url: '/dashboard/products/prohibited',
                    icon: 'fas fa-exclamation-triangle'
                },
                {
                    name: 'Category',
                    url: '/dashboard/products/measurement-category',
                    icon: 'fas fa-database'
                }
            ]
        },
        {
            name: 'Tax',
            url: '/icons',
            icon: 'fas fa-money-check-alt',
            children: [
                {
                    name: 'Tax Zone Rate',
                    url: '/dashboard/icons/tax-zone',
                    icon: 'fa fa-dollar'
                },

                {
                    name: 'Tax Rules',
                    url: '/dashboard/icons/tax-rules',
                    icon: 'fa fa-dollar'
                },
            ]
        },
        {
            name: 'Notifications',
            url: '/notification',
            icon: 'far fa-bell',
            children: [
                {
                    name: 'Email Template',
                    url: '/dashboard/notification/email-template',
                    icon: 'fas fa-envelope'

                },
                {
                    name: 'Sms Template',
                    url: '/dashboard/notification/sms-template',
                    icon: 'fas fa-comment'

                },
                {
                    name: 'Notification Type',
                    url: '/dashboard/notification/notification-type',
                    icon: 'icon-layers'

                },
            ]
        },
        {
            name: 'Settings',
            url: '/settings',
            icon: 'icon-settings',
            children: [
                {
                    name: 'Admin Menu',
                    url: '/dashboard/settings/admin-menu',
                    icon: 'fas fa-unlock-alt'
                },
                {
                    name: 'Status',
                    url: '/dashboard/settings/status',
                    icon: 'icon-star'
                },
                {
                    name: 'Configuration',
                    url: '/dashboard/settings/configurations',
                    icon: 'icon-wrench'
                },
                {
                    name: 'Store settings',
                    url: '/dashboard/settings/store',
                    icon: 'icon-briefcase'
                },
                {
                    name: 'Reasons',
                    url: '/dashboard/reasons/reason/lists',
                    icon: 'icon-star'
                },
                {
                    name: 'Financial report',
                    url: '/dashboard/report/financial',
                    icon: 'fa fa-money'
                },
                {
                    name: 'User feedback',
                    url: '/dashboard/feedback/list',
                    icon: 'fa fa-comments-o'
                },
            ]
        },
        {
            name: 'Logs',
            url: '/logs',
            icon: 'fas fa-history',
            children: [
                {
                    name: 'Log List',
                    url: '/dashboard/logs/list',
                    icon: 'fa fa-list'
                },
            ]
        },

        // {
        //     name: 'Payment',
        //     url: '/dashboard/charts',
        //     icon: 'icon-pie-chart'
        // },
        // {
        //     divider: true
        // },
        // {
        //     title: true,
        //     name: 'Setting'
        // },
        // {
        //     name: 'Pages',
        //     url: '/pages',
        //     icon: 'icon-star',
        //     children: [
        //         {
        //             name: 'Login',
        //             url: '/pages/login',
        //             icon: 'icon-star'
        //         },
        //         {
        //             name: 'Register',
        //             url: '/pages/register',
        //             icon: 'icon-star'
        //         },
        //         {
        //             name: 'Error 404',
        //             url: '/pages/404',
        //             icon: 'icon-star'
        //         },
        //         {
        //             name: 'Error 500',
        //             url: '/pages/500',
        //             icon: 'icon-star'
        //         }
        //     ]
        // }
    ]
}
