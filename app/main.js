//main.js
import Vue from 'vue';
import VueRouter from 'vue-router';
// import User1 from '../views/user_component.js';
// import UserProfile from '../views/user_profile_component.js';
// import UserPosts from '../views/user_posts_component.js'
import User from '../views/user.vue';
import UserProfile from '../views/userprofile.vue';
import UserPosts from '../views/userposts.vue';

Vue.use(VueRouter)
console.log(User)


//嵌套路由
// 1. 定义（路由）组件。
// 已经从其他文件 import 进来


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {
        path: '/user/:id', component: { render: User.render },
        children: [
            {
                // 当/user/:id/profile 匹配成功
                // UserProfile 会被渲染在User 的<router-view>中
                path: 'profile',
                component: { render: UserProfile.render }
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'posts',
                component: { render: UserPosts.render }
            }
        ]
    },
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
// const app = new Vue({
//     el: "#app",
//     router,
//     render: h => h({User})
// })

// 现在，应用已经启动了！
