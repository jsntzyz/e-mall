import VueRouter from 'vue-router'
import Vue from 'vue'


// import home from '../components(公共组件)/home'
// import About from '../components(公共组件)/About'
// import User from '../components(公共组件)/User'

//路由懒加载  效率更高
const Home = () => import('../components/content/home')
const HomeMessage = () => import('../components/content/HomeMessage')
const HomeNews = () => import('../components/content/HomeNews')
const About = () => import('../components/content/About')
const User = () => import('../components/content/User')
const Profile = () => import('../components/content/profile')




//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [{
        path: '/',
        //redirect重定向：重新定义方向（默认跳转位置）
        redirect: '/home'
    }, {
        //协议头://host/query
        path: '/home',
        component: Home,
        children: [{
                path: '/',
                //redirect重定向：重新定义方向（默认跳转位置）
                redirect: '/home/message'
            }, {
                path: 'message',
                component: HomeMessage
            },
            {
                path: 'news',
                component: HomeNews
            },

        ]
    }, {
        path: '/About',
        component: About
    },
    {
        path: '/User/:userId',
        component: User
    }, {
        path: '/profile',
        component: Profile
    }
]


const router = new VueRouter({
    //配置路由和组件之间的应用关系
    routes,
    //不想传哈希值，传history模式
    mode: 'history'
})

// 3.将router对象传入到Vue实例
export default router