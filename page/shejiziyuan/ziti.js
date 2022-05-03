var aa1 =        `
<div class='cont'>
<DT><H3 ADD_DATE="1628933329" LAST_MODIFIED="1628933329">设计资源</H3>
<DL><p>
    <DT><H3 ADD_DATE="1628933329" LAST_MODIFIED="1628933329">字体</H3>
    <DL><p>
        <DT><A HREF="https://www.dafont.com/themes.php" >字体分类很全 - Themes | dafont.com </A>
        <DT><A HREF="https://fontsinuse.com/" >艺术类的字体 - Fonts In Use – Type at work in the real world.</A>
        <DT><A HREF="https://www.designyourway.net/blog/graphic-design/wedding-fonts/" >婚礼字体</A>
        <DT><A HREF="http://www.qiuziti.com/">字体下载-求字体网提供中文和英文字体库下载、识别与预览服务，找字体的好帮手</A>
    </DL><p>
`

var tiao = /<A.+>/g

var inputa1 = aa1.match(tiao)


Vue.component('ziti',{
    data:function(){
        return {inputa1}
    },
    template:
        `
        <div>
            <h2>字体</h2>
            <div class='a-link' v-for='item in inputa1' v-html='item'></div>
        </div>

        `,
})