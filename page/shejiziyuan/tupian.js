var aa6 =        `
<div class='cont'>
<DT><H3 ADD_DATE="1628933329" LAST_MODIFIED="1628933329">图片</H3>
<DL><p>
    <DT><A HREF="https://huaban.com/">花瓣网_陪你做生活的设计师（创意灵感天堂，搜索、发现设计灵感、设计素材）</A>
    <DT><A HREF="http://www.51yuansu.com/" >觅元素_设计元素的免费下载网站_免抠素材51yuansu.com</A>
    <DT><A HREF="https://wangyasai.github.io/designtools.html" >在线特效设计工具</A>
    <DT><A HREF="http://pngimg.com/search" >搜索png照片 - Search PNG images</A>
    <DT><A HREF="https://unsplash.com/" >免费照片 - Beautiful Free Images &amp; Pictures | Unsplash</A>
    <DT><A HREF="https://api.mapbox.com/styles/v1/mapbox/light-v10.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#13.52/47.50887/19.08254">地图照片 - Mapbox Light | Mapbox</A>
    <DT><A HREF="https://500px.com/popular" >高水平质量照片 - Most Popular Photos / 500px</A>
    <DT><A HREF="https://uifaces.co/?from_age=18&to_age=40&hairColor%5B%5D=brown" ">UI Faces – Avatars for design mockups</A>
</DL><p>
`

var tiao = /<A.+>/g

var inputa6 = aa6.match(tiao)


Vue.component('tupian',{
    data:function(){
        return {inputa6}
    },
    template:
        `
        <div>
            <h2>图片</h2>
            <div class='a-link' v-for='item in inputa6' v-html='item'></div>
        </div>

        `,
})