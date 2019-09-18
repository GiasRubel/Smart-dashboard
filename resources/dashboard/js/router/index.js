import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '../containers/Full'

// Views
import Dashboard from '../views/Dashboard'

// Views - Users
import Users from '../views/users/Users'

// import NewUser from '../views/users/user/NewUser'
import CreateUser from '../views/users/user/CreateUser'
import EditUser from '../views/users/user/EditUser'
import ShowUser from '../views/users/user/ShowUser'
import UserListByAdmin from '../views/users/user/UserListByAdmin'
import UserListByMember from '../views/users/user/UserListByMember'
import Roles from '../views/users/Roles'
import CreateRole from '../views/users/CreateRole'
import EditRole from '../views/users/EditRole'
import Permissions from '../views/users/Permissions'
import UserRoles from '../views/users/UserRoles'
import GroupList from '../views/users/GroupList'
import CreateGroup from '../views/users/CreateGroup'

//View - Settings
import AdminMenuList from '../views/settings/AdminMenuList'
import CreateAdminMenu from '../views/settings/CreateAdminMenu'
import StatusList from '../views/settings/StatusList'
import CreateStatus from '../views/settings/CreateStatus'
import FinancialReport from '../views/settings/FinancialReport'
import FeedBackList from '../views/settings/FeedBackList'

//Views - Template
import EmailTemplate from '../views/template/EmailTemplate'
import CreateEmailTemplate from '../views/template/CreateEmailTemplate'
import SmsTemplateList from '../views/template/SmsTemplateList'
import CreateSmsTEmplate from '../views/template/CreateSmsTEmplate'
import NotificationTypeList from '../views/template/NotificationTypeList'
import CreateNotificationType from '../views/template/CreateNotificationType'

// Views - Pages
import Page404 from '../views/pages/Page404'
import Page500 from '../views/pages/Page500'
import Login from '../views/pages/Login'
import Register from '../views/pages/Register'

// Views - shipping
import ShippingRate from '../views/shipping/ShippingRate'
import CreateShipment from '../views/shipping/CreateShipment'
import Showshipment from '../views/shipping/Showshipment'

//Views - Product-setting
import Product_measurment_list from '../views/products-setting/Product_measurment_list'
import ApprovedMeasurment from '../views/products-setting/ApprovedMeasurment'
import NotApprovedMeasurment from '../views/products-setting/NotApprovedMeasurment'
import CreateProductMeasurment from '../views/products-setting/CreateProductMeasurment'
import StoreList from '../views/products-setting/StoreList'
import CreateStore from '../views/products-setting/CreateStore'
import ProhibitedList from '../views/products-setting/ProhibitedList'
import CreateProhibited from '../views/products-setting/CreateProhibited'

//Views Tax
import TaxZoneRates from '../views/tax/TaxZoneRates'
import TaxZoneCreate from '../views/tax/TaxZoneCreate'
import TaxRulesList from '../views/tax/TaxRulesList'
import TaxRulesCreate from '../views/tax/TaxRulesCreate'

//Views Payment
import PaymentList from '../views/payment/PaymentList'
import CreatePaymentMethod from '../views/payment/CreatePaymentMethod'
import PaymentByCardList from '../views/payment/PaymentByCardList'
import CreatePaymentByCard from '../views/payment/CreatePaymentByCard'

//Views Banner
import BannerList from '../views/Banner/BannerList'
import CreateBanner from '../views/Banner/CreateBanner'

//views order
import OrderList from '../views/order/OrderList'
import ShowOrderList from '../views/order/ShowOrderList'
import MakeOrder from '../views/order/make_order/MakeOrder'
import GenerateShippingCost from '../views/order/make_order/GenerateShippingCost'

//Views order -> pending
import PendinReviewList from '../views/order/pending/PendinReviewList'
import showPendingReview from '../views/order/pending/showPendingReview'

//Views Order > rady-for-purchase
import RadyForPurchaseList from '../views/order/ready-for-purchase/RadyForPurchaseList'
import CashPaymentList from '../views/order/ready-for-purchase/CashPaymentList'
import ReviewCompleted from '../views/order/ready-for-purchase/ReviewCompleted'

//Views items
import CartList from '../views/items/CartList'
import ShowCartList from '../views/items/ShowCartList'
import EditCartList from '../views/items/EditCartList'
import CartReviewList from '../views/items/CartReviewList'

//Views region
import CountryList from '../views/region/CountryList'
import CreateCountry from '../views/region/CreateCountry'
import StateList from '../views/region/StateList'
import CreateState from '../views/region/CreateState'
import DistrictList from '../views/region/DistrictList'
import CreateDistrict from '../views/region/CreateDistrict'
import CurrencyList from '../views/region/CurrencyList'
import CreateCurrency from '../views/region/CreateCurrency'
import Configuration from '../views/settings/Configuration'
import CreateConfiguration from '../views/settings/CreateConfiguration'

//store settings
import StoreSettings from '../views/settings/StoreSettings'
import CreateSettings from '../views/settings/CreateSettings'

//Product measurement category
import CreateProductMeasureMentCategory from '../views/products-setting/CreateProductMeasureMentCategory'
import ProductMeasurementCategory from '../views/products-setting/ProductMeasurementCategory'
import UsOnHand from '../views/order/component/UsOnHand'
import ChangePassword from '../views/users/user/ChangePassword'

//logger
import LoggerList from '../views/logger/LoggerList'
import LoggerListShow from '../views/logger/LoggerListShow'

/*dicount item list*/
import DiscounntItems from '../views/items/DiscounntItems'

//cancel reason
import ReasonList from '../views/Reason/ReasonList'
import CreateReason from '../views/Reason/CreateReason'

Vue.use(Router);

export default new Router({
    mode: 'history', // Demo is living in GitHub.io, so required!
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/dashboard',
            name: 'Home',
            component: Full,
            children: [
                {
                    path: '/',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: 'users',
                    name: 'Users',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            name: 'Users',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '',
                                    name: 'List',
                                    component: Users,
                                },
                                {
                                    path: 'create',
                                    name: 'Create User',
                                    component: CreateUser,
                                },

                                {
                                    path: 'edit/:id?/:adminid?',
                                    name: 'Edit User',
                                    component: EditUser,
                                },

                                {
                                    path: 'show/:id',
                                    name: 'Individual User',
                                    component: ShowUser,
                                },
                                {
                                    path: 'change-password',
                                    name: 'Change password',
                                    component: ChangePassword
                                }
                            ]
                        },

                        {
                            path: 'admins',
                            name: 'Admin User',
                            component: UserListByAdmin,

                        },

                        // {
                        //     path: 'member',
                        //     name: 'Member',
                        //     component: UserListByMember,
                        //
                        // },

                        {
                            path: 'roles',
                            name: 'Roles',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },

                            children: [
                                {
                                    path: '/',
                                    name: 'Role List',
                                    component: Roles,
                                },
                                {
                                    path: 'create',
                                    name: 'CreateRole',
                                    component: CreateRole,
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Role',
                                    component: EditRole,
                                }
                            ],
                        },

                        {
                            path: 'permissions',
                            name: 'Permissions',
                            component: Permissions
                        },
                        {
                            path: 'user-roles',
                            name: 'UserRoles',
                            component: UserRoles
                        },
                        {
                            path: 'groups',
                            name: 'Groups',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },

                            children: [
                                {
                                    path: '/',
                                    name: 'Group List',
                                    component: GroupList,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Group',
                                    component: CreateGroup,
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Group',
                                    component: CreateGroup,
                                }
                            ],
                        },

                    ]
                },
                {
                    path: 'reasons',
                    name: 'Reasons',
                    component: {
                        render(c) {
                            return c('router-view');
                        }
                    },
                    children: [
                        {
                            path: 'reason',
                            name: 'Reasons',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: 'lists',
                                    name: 'Reason list',
                                    component: ReasonList
                                },
                                {
                                    path: 'create-reason',
                                    name: 'Create-reason',
                                    component: CreateReason
                                },
                                {
                                    path: 'update-reason/:id',
                                    name: 'Update-reason',
                                    component: CreateReason
                                }
                            ]
                        }
                    ]
                },
                {
                    path: 'notification',
                    name: 'Notifications',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [

                        {
                            path: 'email-template',
                            name: 'Email Template',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },

                            children: [
                                {
                                    path: '/',
                                    name: 'Email Template List',
                                    component: EmailTemplate,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Email Template',
                                    component: CreateEmailTemplate,
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Email Template',
                                    component: CreateEmailTemplate,
                                }
                            ],
                        },
                        {
                            path: 'sms-template',
                            name: 'Sms Template',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },

                            children: [
                                {
                                    path: '/',
                                    name: 'Sms Template List',
                                    component: SmsTemplateList,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Sms Template',
                                    component: CreateSmsTEmplate,
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Sms Template',
                                    component: CreateSmsTEmplate,
                                }
                            ],
                        },
                        {
                            path: 'notification-type',
                            name: 'Notification Type',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },

                            children: [
                                {
                                    path: '/',
                                    name: 'Notification Type List',
                                    component: NotificationTypeList,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Notification Type',
                                    component: CreateNotificationType,
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Notification Type',
                                    component: CreateNotificationType,
                                }
                            ],
                        },
                    ]
                },
                {
                    path: 'settings',
                    name: 'Settings',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'admin-menu',
                            name: 'Admin Menu',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },

                            children: [
                                {
                                    path: '/',
                                    name: 'Admin Menu List',
                                    component: AdminMenuList,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Admin Menu',
                                    component: CreateAdminMenu,
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Admin Menu',
                                    component: CreateAdminMenu,
                                }
                            ],
                        },
                        {
                            path: 'status',
                            name: 'Status List',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Status List',
                                    component: StatusList
                                },
                                {
                                    path: 'create',
                                    name: 'Create Status',
                                    component: CreateStatus
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Status',
                                    component: CreateStatus
                                },
                            ]
                        },
                        {
                            path: 'configurations',
                            name: 'Configurations',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Configuration List',
                                    component: Configuration
                                },
                                {
                                    path: 'create',
                                    component: CreateConfiguration,
                                    name: 'Create Configuration'
                                },
                                {
                                    path: 'edit/:id',
                                    component: CreateConfiguration,
                                    name: 'Update Configuration'
                                }
                            ]
                        },
                        {
                            path: 'store',
                            name: 'Store settings',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'List of settings',
                                    component: StoreSettings
                                },
                                {
                                    path: '/dashboard/settings/store/create',
                                    component: CreateSettings,
                                    name: 'Create settings'
                                },
                                {
                                    path: '/dashboard/settings/store/edit/:id',
                                    component: CreateSettings,
                                    name: 'Update settings'
                                }
                            ]
                        },
                        {
                            path: '/dashboard/report/financial',
                            component: FinancialReport,
                            name: 'Financial-Report'
                        },
                        {
                            path: '/dashboard/feedback/list',
                            name: 'Feedback list',
                            component:FeedBackList,
                        }
                    ]
                },
                // {
                //     path: 'charts',
                //     name: 'Charts',
                //     component: Charts
                // },
                // {
                //     path: 'widgets',
                //     name: 'Widgets',
                //     component: Widgets
                // },
                // {
                //     path: 'components',
                //     name: 'Components',
                //     component: {
                //         render(c) {
                //             return c('router-view')
                //         }
                //     },
                //     children: [
                //         {
                //             path: 'buttons',
                //             name: 'Buttons',
                //             component: Buttons
                //         },
                //         {
                //             path: 'social-buttons',
                //             name: 'Social Buttons',
                //             component: SocialButtons
                //         },
                //         {
                //             path: 'cards',
                //             name: 'Cards',
                //             component: Cards
                //         },
                //         {
                //             path: 'forms',
                //             name: 'Forms',
                //             component: Forms
                //         },
                //         {
                //             path: 'modals',
                //             name: 'Modals',
                //             component: Modals
                //         },
                //         {
                //             path: 'switches',
                //             name: 'Switches',
                //             component: Switches
                //         },
                //         {
                //             path: 'tables',
                //             name: 'Tables',
                //             component: Tables
                //         }
                //     ]
                // },
                {
                    path: 'icons',
                    name: 'Icons',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'tax-zone',
                            name: 'Tax Zone Rate',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Tax Zone List',
                                    component: TaxZoneRates
                                },
                                {
                                    path: 'create',
                                    name: 'Tax Zone Create',
                                    component: TaxZoneCreate
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Tax Zone Edit',
                                    component: TaxZoneCreate
                                },
                            ]
                        },
                        {
                            path: 'tax-rules',
                            name: 'Tax Rules',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Tax Rules List',
                                    component: TaxRulesList
                                },
                                {
                                    path: 'create',
                                    name: 'Tax Rules Create',
                                    component: TaxRulesCreate
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Tax Rules Edit',
                                    component: TaxRulesCreate
                                },
                            ]
                        },

                    ]
                },
                {
                    path: 'region',
                    name: 'Region',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'country',
                            name: 'Country',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Country List',
                                    component: CountryList
                                },
                                {
                                    path: 'create',
                                    name: 'Create Country',
                                    component: CreateCountry
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Country',
                                    component: CreateCountry
                                },
                            ]
                        },
                        {
                            path: 'state',
                            name: 'State',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'State List',
                                    component: StateList
                                },
                                {
                                    path: 'create',
                                    name: 'Create State',
                                    component: CreateState
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit State',
                                    component: CreateState
                                },
                            ]
                        },
                        {
                            path: 'district',
                            name: 'District',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'District List',
                                    component: DistrictList
                                },
                                {
                                    path: 'create',
                                    name: 'Create District',
                                    component: CreateDistrict
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit District',
                                    component: CreateDistrict
                                },
                            ]
                        },
                        {
                            path: 'currency',
                            name: 'Currency',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Currency List',
                                    component: CurrencyList
                                },
                                {
                                    path: 'create',
                                    name: 'Create Currency',
                                    component: CreateCurrency
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Currency',
                                    component: CreateCurrency
                                },
                            ]
                        },

                    ]
                },
                {
                    path: 'orders',
                    name: 'Order',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'list',
                            name: 'Order List',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Order List',
                                    component: OrderList
                                },
                                {
                                    path: 'create',
                                    name: 'Create Order',
                                    component: TaxZoneCreate
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Order',
                                    component: TaxZoneCreate
                                },
                                {
                                    path: 'show/:id',
                                    name: 'Show Order',
                                    component: ShowOrderList
                                },
                                {
                                    path: 'measurement/:id/:status',
                                    name: 'Measurement',
                                    component: UsOnHand
                                }
                            ]
                        },
                        {
                            path: "make-order",
                            name: 'Make order',
                            component: MakeOrder
                        },
                        {
                            path: "generate-shipping-cost",
                            name: "Generate shipping cost",
                            component: GenerateShippingCost
                        },
                        {
                            path: 'pending-review',
                            name: 'Pending Review List',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Pending List',
                                    component: PendinReviewList
                                },

                                {
                                    path: 'show/:id',
                                    name: 'pending Order',
                                    component: showPendingReview
                                },
                            ]
                        },
                        {
                            path: 'ready-purchase',
                            name: 'Ready For purchase',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Redy purchase List',
                                    component: RadyForPurchaseList
                                },

                                {
                                    path: 'show/:id',
                                    name: 'Redy purchase show',
                                    component: ShowOrderList
                                },
                            ]
                        },
                        {
                            path: 'cashpayment',
                            name: 'Cash Payment',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Cash Payment List',
                                    component: CashPaymentList
                                },

                                {
                                    path: 'show/:id',
                                    name: 'Cash Payment show',
                                    component: ShowOrderList
                                },
                            ]
                        },
                        {
                            path: 'completed-review',
                            name: 'Completed Review',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Review Complete List',
                                    component: ReviewCompleted
                                },

                                {
                                    path: 'show/:id',
                                    name: 'Show Completed Review',
                                    component: ShowOrderList
                                },
                            ]
                        }

                    ]
                },
                {
                    path: 'items',
                    name: 'Items',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'cart-item',
                            name: 'Cart Items',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Cart Item List',
                                    component: CartList
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Cart Item',
                                    component: EditCartList
                                },
                                {
                                    path: 'show/:id',
                                    name: 'Show Cart Item',
                                    component: ShowCartList
                                },
                                {
                                    path: 'discounts',
                                    name: 'Discount item lists',
                                    component: DiscounntItems
                                }

                            ]
                        },
                        {
                            path: 'cart-review-item',
                            name: 'Cart Review Item',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Cart Review List',
                                    component: CartReviewList
                                },

                                {
                                    path: 'edit/:cid',
                                    name: 'Edit Cart Review Item',
                                    component: EditCartList
                                },

                                {
                                    path: 'show/:cid',
                                    name: 'Show Cart Review Item',
                                    component: ShowCartList
                                },

                            ]
                        },

                    ]
                },
                {
                    path: 'payment-method',
                    name: 'Payment',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '/',
                            name: 'Payment Method',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'payment List Method',
                                    component: PaymentList,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Payment Method',
                                    component: CreatePaymentMethod,
                                },

                                {
                                    path: 'edit/:id',
                                    name: 'Edit Payment Method',
                                    component: CreatePaymentMethod,
                                },

                            ]
                        },

                    ]
                },
                {
                    path: 'payment/by-card/',
                    name: 'Payment Option',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '/',
                            name: 'Payment By Card',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'payment By Card List',
                                    component: PaymentByCardList,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Payment By Card',
                                    component: CreatePaymentByCard,
                                },

                                {
                                    path: 'edit/:id',
                                    name: 'Edit Payment By Card',
                                    component: CreatePaymentByCard,
                                },

                            ]
                        },

                    ]
                },
                {
                    path: 'banners',
                    name: 'Banner',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '/',
                            name: 'Banners',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Banner Lists',
                                    component: BannerList,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Banner Lists',
                                    component: CreateBanner,
                                },

                                {
                                    path: 'edit/:id',
                                    name: 'Edit Banner Lists',
                                    component: CreateBanner,
                                },

                            ]
                        },

                    ]
                },
                {
                    path: 'shipping',
                    name: 'Shipping',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '/',
                            name: 'Shippings',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Shipping List',
                                    component: ShippingRate,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Shipment',
                                    component: CreateShipment,
                                },

                                {
                                    path: 'edit/:id',
                                    name: 'Edit shipment',
                                    component: CreateShipment,
                                },
                                // {
                                //     path: 'show/:id',
                                //     name: 'Show shipment',
                                //     component: Showshipment,
                                // },
                            ]
                        }
                    ]
                },
                {
                    path: 'logs',
                    name: 'Logs',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'list',
                            name: 'Log List',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Log Viewer List',
                                    component: LoggerList,
                                },
                                {
                                    path: 'show/:id',
                                    name: 'Log Viewer Show',
                                    component: LoggerListShow,
                                },
                            ]
                        }
                    ]
                },
                {
                    path: 'products',
                    name: 'Products Setting',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'products-measurment',
                            name: 'Measurement',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Product Measurment List',
                                    component: Product_measurment_list,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Product Measurment',
                                    component: CreateProductMeasurment,
                                },

                                {
                                    path: 'edit/:id',
                                    name: 'Edit Product Measurment',
                                    component: CreateProductMeasurment,
                                },
                            ]
                        },
                        {
                            path: 'approved-products-measurment',
                            name: 'Approved Measurement',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Approved Measurement List',
                                    component: ApprovedMeasurment,
                                },

                                {
                                    path: 'edit/:id',
                                    name: 'Edit Approved Measurment',
                                    component: CreateProductMeasurment,
                                },
                            ]
                        },

                        {
                            path: 'notapproved-products-measurment',
                            name: 'Not Approved Measurement',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Not Approved Measurement List',
                                    component: NotApprovedMeasurment,
                                },

                                {
                                    path: 'edit/:id',
                                    name: 'Edit Not Approved Measurment',
                                    component: CreateProductMeasurment,
                                },
                            ]
                        },

                        {
                            path: 'store',
                            name: 'Store Home',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Store List',
                                    component: StoreList,
                                },
                                {
                                    path: 'create',
                                    name: 'Create Store',
                                    component: CreateStore,
                                },

                                {
                                    path: 'edit/:id',
                                    name: 'Edit Store',
                                    component: CreateStore,
                                },
                            ]
                        },
                        {
                            path: 'prohibited',
                            name: 'Prohibited',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Prohibited List',
                                    component: ProhibitedList
                                },
                                {
                                    path: 'create',
                                    name: 'Create Prohibited',
                                    component: CreateProhibited
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Prohibited',
                                    component: CreateProhibited
                                },
                            ]
                        },
                        {
                            path: 'measurement-category',
                            name: 'Product measurement category',
                            component: {
                                render(c) {
                                    return c('router-view')
                                }
                            },
                            children: [
                                {
                                    path: '/',
                                    name: 'Products Measurement Lists',
                                    component: ProductMeasurementCategory
                                },
                                {
                                    path: 'create',
                                    name: 'Create category',
                                    component: CreateProductMeasureMentCategory
                                },
                                {
                                    path: 'edit/:id',
                                    name: 'Edit Category',
                                    component: CreateProductMeasureMentCategory
                                },
                            ]
                        },

                    ]
                },
            ]
        },
        {
            path: '/pages',
            name: 'Pages',
            component: {
                render(c) {
                    return c('router-view')
                }
            },
            children: [
                {
                    path: '404',
                    name: 'Page404',
                    component: Page404
                },
                {
                    path: '500',
                    name: 'Page500',
                    component: Page500
                },
                {
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
                {
                    path: 'register',
                    name: 'Register',
                    component: Register
                }
            ]
        }
    ]
})
