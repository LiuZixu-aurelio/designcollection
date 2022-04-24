var shejiziyuanRouter ={
    template:'<shejiziyuan></shejiziyuan>'

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
    <h3>内容贡献者：缪缪</h3>
    `
}

var router = new VueRouter({
    routes:[
        {path:'/shejiziyuan', component: shejiziyuanRouter},
        {path:'/shejixitong' ,component: shejixitongRouter},
        {path:'/sandxiangguang' ,component: sandxiangguanRouter},
        {path:'/jingpinfenxi' ,component: jingpinfenxiRouter},
        {path:'/wenzhang' ,component: wenzhangRouter},
        {path:'/sucaicankao' ,component: sucaicankaoRouter},
        {path:'/support' , component: support},
        {path:'/', redirect:'/shejiziyuan'}

    ],
/*     mode:'history' */
})


var vm = new Vue({
    el:"#app",
    router:router
}) 

