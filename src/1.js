/* var shejiziyuanRouter ={
    template:'<shejiziyuan></shejiziyuan>'

} */

const wrapComponent = (tagName) => ({
    template: `<${tagName}></${tagName}>`
});

const shejiziyuanRouter = {
    template: `
    <div>
        <nav class="sub-nav" aria-label="设计资源分类导航">
            <router-link to="/shejiziyuan/ziti" class="topb2">字体</router-link>
            <router-link to="/shejiziyuan/tubiao" class="topb2">图标</router-link>
            <router-link to="/shejiziyuan/tupian" class="topb2">图片</router-link>
            <router-link to="/shejiziyuan/dongxiao" class="topb2">动效</router-link>
            <router-link to="/shejiziyuan/peise" class="topb2">配色</router-link>
            <router-link to="/shejiziyuan/chahua" class="topb2">插画</router-link>
            <router-link to="/shejiziyuan/yangji" class="topb2">样机</router-link>
            <router-link to="/shejiziyuan/aigc" class="topb2">AIGC</router-link>
            <router-link to="/shejiziyuan/wendang" class="topb2">文档</router-link>
        </nav>
        <router-view></router-view>
    </div>
    `
};

const support = {
    template: `
    <div>
        <h2>内容贡献者：</h2>
    </div>
    `
};

const router = new VueRouter({
    routes: [
        {
            path: '/shejiziyuan',
            component: shejiziyuanRouter,
            children: [
                { path: '', redirect: 'ziti' },
                { path: 'ziti', component: wrapComponent('ziti') },
                { path: 'tubiao', component: wrapComponent('tubiao') },
                { path: 'dongxiao', component: wrapComponent('dongxiao') },
                { path: 'chahua', component: wrapComponent('chahua') },
                { path: 'yangji', component: wrapComponent('yangji') },
                { path: 'aigc', component: wrapComponent('aigc') },
                { path: 'peise', component: wrapComponent('peise') },
                { path: 'wendang', component: wrapComponent('wendang') },
                { path: 'tupian', component: wrapComponent('tupian') }
            ]
        },
        { path: '/shejixitong', component: wrapComponent('shejixitong') },
        { path: '/sandxiangguang', component: wrapComponent('sandxiangguan') },
        { path: '/jingpinfenxi', component: wrapComponent('jingpinfenxi') },
        { path: '/wenzhang', component: wrapComponent('wenzhang') },
        { path: '/sucaicankao', component: wrapComponent('sucaicankao') },
        { path: '/support', component: support },
        { path: '/', redirect: '/shejiziyuan/ziti' }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
    /* mode:'history' */
});

router.afterEach(function () {
    if (typeof window.__annotateResourceLinks === 'function') {
        setTimeout(window.__annotateResourceLinks, 0);
        setTimeout(window.__annotateResourceLinks, 60);
    }
});

new Vue({
    el: '#app',
    router,
    mounted() {
        if (typeof window.__annotateResourceLinks === 'function') {
            this.$nextTick(function () {
                window.__annotateResourceLinks();
            });
        }
    }
});
