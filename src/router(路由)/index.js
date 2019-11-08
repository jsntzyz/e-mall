import Vue from 'vue'
import Router from 'vue-router'



// import home from '../components(公共组件)/home'
// import About from '../components(公共组件)/About'
// import User from '../components(公共组件)/User'

//路由懒加载  效率更高
const Home = () => import('../components/content/home/Home')
const Classify = () => import('../components/content/classify/Classify')
// const pag1 = () => import('../components/content/classify/pag1')
const ShoppingTrolley = () => import('../components/content/shopping trolley/ShoppingTrolley')
const User = () => import('../components/content/mine/User')
const Commodity = () => import('../components/content/commodity/commodity')





//1.通过Vue.use(插件)，安装插件
Vue.use(Router)

//2.创建VueRouter对象
// const routes = 


export default new Router({
    //不想传哈希值，传history模式
    mode: 'hash',
    //配置路由和组件之间的应用关系
    routes: [{
        path: '/',
        redirect: {
            path: '/home'
        },
        component: () => import('../components/MainTabBar.vue'),
        children: [{
                //协议头://host/query
                path: '/home',
                component: Home,
                // children: [{
                //         path: '/',
                //         //redirect重定向：重新定义方向（默认跳转位置）
                //         redirect: '/home/message'
                //     }, {
                //         path: 'message',
                //         component: HomeMessage
                //     },
                //     {
                //         path: 'news',
                //         component: HomeNews
                //     },

                // ]
            }, {

                path: '/Classify',
                component: Classify,
                // children: [{
                //         path: 'pag1',
                //         component:pag1
                //     }
                // ]
            },
            {
                path: '/ShoppingTrolley',
                component: ShoppingTrolley
            }, {

                path: '/User',
                component: User
            },
            {
                path: '/Commodity',
                component: Commodity
            }
            
        ]
    }, ]
    // routes:[{
    //         path: '/',
    //         //redirect重定向：重新定义方向（默认跳转位置）
    //         redirect: '/home'
    //     }, {
    //         //协议头://host/query
    //         path: '/home',
    //         component: Home,
    //         // children: [{
    //         //         path: '/',
    //         //         //redirect重定向：重新定义方向（默认跳转位置）
    //         //         redirect: '/home/message'
    //         //     }, {
    //         //         path: 'message',
    //         //         component: HomeMessage
    //         //     },
    //         //     {
    //         //         path: 'news',
    //         //         component: HomeNews
    //         //     },

    //         // ]
    //     }, {

    //         path: '/Classify',
    //         component: Classify
    //     },
    //     {
    //         path: '/ShoppingTrolley',
    //         component: ShoppingTrolley
    //     }, {

    //         path: '/User',
    //         component: User
    //     }
    // ]
})

// // 3.将router对象传入到Vue实例
// export default router