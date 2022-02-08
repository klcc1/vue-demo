import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:() => import("@/page/home"),
            redirect: '/mind',
            children:[
                {
                    path:'/mind',
                    component:() => import("@/page/mind")
                },
                {
                    path:'/back',
                    component:() => import("@/page/back")
                },
                {
                    path:'/user',
                    component:() => import("@/page/user")
                },
            ]

        },
        
    ]
})