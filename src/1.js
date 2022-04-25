/* var shejiziyuanRouter ={
    template:'<shejiziyuan></shejiziyuan>'

} */

var shejiziyuanRouter ={
    template:`
    <div>
        <router-link to="/shejiziyuan/ziti" class="topb2">
            <div class="topb2">字体</div>
        </router-link>
        <router-link to="/shejiziyuan/tubiao" class="topb2">
            <div class="topb2">图标</div>
        </router-link>
        <router-link to="/shejiziyuan/dongxiao" class="topb2">
        <div class="topb2">动效</div>
        </router-link>
        <router-link to="/shejiziyuan/peise" class="topb2">
            <div class="topb2">配色</div>
        </router-link>
        <router-link to="/shejiziyuan/chahua" class="topb2">
            <div class="topb2">插画</div>
        </router-link>
        <router-link to="/shejiziyuan/yangji" class="topb2">
            <div class="topb2">样机</div>
        </router-link>
        <router-link to="/shejiziyuan/wendang" class="topb2">
        <div class="topb2">文档</div>
    </router-link>
        <router-view></router-view>
    </div>
    `

}
var shejiziyuanRouter2 ={
    template:`<shejiziyuan></shejiziyuan>`
}
var shejixitongRouter ={
    template:`<shejixitong></shejixitong>`
}

var sandxiangguanRouter ={
    template:`<sandxiangguan></sandxiangguan>`
}

var jingpinfenxiRouter ={
    template:`<jingpinfenxi></jingpinfenxi>`
}

var wenzhangRouter ={
    template:`<wenzhang></wenzhang>`
}

var sucaicankaoRouter ={
    template:`<sucaicankao></sucaicankao>`
}


var support = {
    template:
    `
    <div>
    <h2>内容贡献者：缪缪</h2>
    <h2>作者: Aurelio</h2>
    </div>
    `
}

var zitiRouter ={
    template:`<ziti></ziti>`
}
var tubiaoRouter ={
    template:`<tubiao></tubiao>`
}
var dongxiaoRouter ={
    template:`<dongxiao></dongxiao>`
}
var peiseRouter ={
    template:`<peise></peise>`
}
var chahuaRouter ={
    template:`<chahua></chahua>`
}
var yangjiRouter ={
    template:`<yangji></yangji>`
}
var wendangRouter ={
    template:`<wendang></wendang>`
}
var router = new VueRouter({
    routes:[
        {path:'/shejiziyuan', component: shejiziyuanRouter,children:[
            {path:'/shejiziyuan' ,component: shejiziyuanRouter2},
            {path:'/shejiziyuan/ziti' ,component: zitiRouter},
            {path:'/shejiziyuan/tubiao' ,component: tubiaoRouter},
            {path:'/shejiziyuan/dongxiao' ,component: dongxiaoRouter},
            {path:'/shejiziyuan/chahua' ,component: chahuaRouter},
            {path:'/shejiziyuan/yangji' ,component: yangjiRouter},
            {path:'/shejiziyuan/peise' ,component: peiseRouter},
            {path:'/shejiziyuan/wendang' ,component: wendangRouter},
        ]},
        {path:'/shejixitong' ,component: shejixitongRouter},
        {path:'/sandxiangguang' ,component: sandxiangguanRouter},
        {path:'/jingpinfenxi' ,component: jingpinfenxiRouter},
        {path:'/wenzhang' ,component: wenzhangRouter},
        {path:'/sucaicankao' ,component: sucaicankaoRouter},
        {path:'/support' , component: support},
        {path:'/', redirect:'/shejiziyuan/ziti'}

    ],
/*     mode:'history' */
})


var vm = new Vue({
    el:"#app",
    router:router
}) 

