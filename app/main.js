//main.js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// 0. 动态路由匹配
const User = {
    template: '<div>User {{ $route.params.username }} </div>'
}
const User_post = {
    template: '<div>User {{ $route.params.username }} and Post {{$route.params.post_id}}</div>'
}
const fullpath = {
    template: '<div>{{ $route.fullPath }}</div>'
}

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/user/:username', component: User},
    { path: '/user/:username/post/:post_id', component: User_post},
    { path: '/user/:username/post/:post_id/test', component: fullpath}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app')

// 现在，应用已经启动了！
