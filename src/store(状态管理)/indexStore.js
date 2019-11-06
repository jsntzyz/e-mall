import Vuex from 'vuex'
import Vue from 'vue'


//1.通过Vue.use(插件)，安装插件
Vue.use(Vuex)

//2.创建store对象
export default new Vuex.Store({
    state: {
        counter: 1000
    },
    mutations: {
        //方法
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
})


// 3.将router对象传入到Vue实例
// export const store