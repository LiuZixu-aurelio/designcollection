var aa7 =        `
<DT><H3 ADD_DATE="1628933329" LAST_MODIFIED="1628933329">样机</H3>
<DL><p>
    <DT><A HREF="https://www.adobe.com/cn/products/xd/resources.html#panel-3" >免费的 UI 设计套件、图标和插件 | Adobe XD 官方资源</A>
    <DT><A HREF="https://www.ls.graphics/free-mockups">免费的样机和设计工具[PSD，Sketch，Figma]</A>
    <DT><A HREF="https://themockup.club/mockup-category/devices/">设备| 样机俱乐部</A>
    <DT><A HREF="https://malli.graphics/" ADD_DATE="1585830574">免费高质量PSD样机 | Malli Graphics - </A>
    <DT><A HREF="https://www.uistore.design/?ref=bookmarks.design" >手机样机 -  Page 2 of 36 | Mockup World</A>
    <DT><A HREF="https://www.shapefest.com/expansions/3000-hands">3d样机 - Shapefest™ | 3,000 Hands 3D Shape Pack</A>
    <DT><A HREF="https://freebiesui.com/" ADD_DATE="1597929361">免费精选ui资源 - Free hand-picked UI resources for designers - FreebiesUI</A>
    <DT><A HREF="https://www.mockupworld.co/all-mockups/">免费样机大全 - All Free Mockups | Mockup World</A>
</DL><p>
`

var tiao = /<A.+>/g

var inputa7 = aa7.match(tiao)

Vue.component('yangji',{
    data:function(){
        return {inputa7}
    },
    template:
        `
        <div>
            <h2>样机</h2>
            <div class='a-link' v-for='item in inputa7' v-html='item'></div>
        </div>

        `,
})