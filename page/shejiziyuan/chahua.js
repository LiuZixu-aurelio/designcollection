var aa5 =        `
<DT><H3 ADD_DATE="1628933329" LAST_MODIFIED="1637199993">插画</H3>
<DL><p>
    <DT><A HREF="https://blush.design/?ref=producthunt" >运营风插画元素大全 - Blush: Illustrations for everyone</A>
    <DT><A HREF="https://undraw.co/illustrations">运营风插画可调整色调 - Illustrations | unDraw</A>
    <DT><A HREF="https://www.drawkit.io/" >多风格插画 - DrawKit - Beautiful free illustrations</A>
    <DT><A HREF="https://www.pixeltrue.com/free-illustrations">免费矢量插画 - Free Vector Illustrations</A>
    <DT><A HREF="https://www.shapefest.com/" ADD_DATE="1608598663">3D图形插画 - Shapefest™ - A massive library of free 3D shapes</A>
    <DT><A HREF="https://tabbied.com/select-artwork" >几何风插画 - Tabbied</A>
    <DT><A HREF="https://freeillustrations.xyz/" >免费矢量插画 - Free illustrations - Free to use illustrations &amp; vectors</A>
    <DT><A HREF="https://3ddd.casa/" >3D插画</A>
    <DT><A HREF="https://storyset.com/" >等距免费矢量下载超过1000个图形资源-Isoflat.com</A>
    <DT><A HREF="https://delesign.com/free-designs/graphics/https://www.manypixels.co/gallery">运营风插画可调整色调 - Gallery | Delesign</A>
    <DT><A HREF="https://isoflat.com/free-vectors-and-graphic-resources/page/2/?orderby=date%20%20%20%20" > 海量免费矢量插画 - Isometric Free Vector Download Over 1000 graphic resources - Isoflat.com</A>
</DL><p>
`

var tiao = /<A.+>/g

var inputa5 = aa5.match(tiao)


Vue.component('chahua',{
    data:function(){
        return {inputa5}
    },
    template:
        `
        <div>
            <h2>插画</h2>
            <div class='a-link' v-for='item in inputa5' v-html='item'></div>
        </div>

        `,
})