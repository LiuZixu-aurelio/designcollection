var aa2 =        `
<div class='cont'>
<DT><H3 ADD_DATE="1628933329" LAST_MODIFIED="1635323531">图标</H3>
            <DL><p>
                <DT><A HREF="https://www.iconfinder.com/" >海量矢量图标 - 4,675,000+ free and premium vector icons in SVG, PNG, CSH and AI format.</A>
                <DT><A HREF="https://iconwerk.com/">海外大公司的图标 - iconwerk</A>
                <DT><A HREF="https://icomoon.io/app/#/select" >多个格式图标 - IcoMoon App - Icon Font, SVG, PDF &amp; PNG Generator</A>
                <DT><A HREF="https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2"> Iconfont-阿里巴巴矢量图标库</A>
                <DT><A HREF="https://fontawesome.bootstrapcheatsheets.com/">组件库开发端 - Font Awesome v.4.7.0 | Bootstrap Cheat Sheets</A>
                <DT><A HREF="https://iconhub.io/?style=line" >组件库SVG - iconhub</A>
                <DT><A HREF="https://www.iconshock.com/3d-icons/?ref=producthunt">3d Icons</A>
                <DT><A HREF="https://www.handz.design/?ref=producthunt">矢量gif图标 - Vector icon speed runs - GIFs - Imgur</A>
                <DT><A HREF="https://igoutu.cn/animated-icons">动态图标——900+高质量动态图标</A>
                <DT><A HREF="https://experience-japan.info/en">日系图标 - EXPERIENCE JAPAN PICTOGRAMS</A>
                <DT><A HREF="https://remixicon.com/" >高质量免费svg图标 - Tabler Icons - 800+ Highly customizable free SVG icons</A>
                <DT><A HREF="https://arco.design/iconbox/libs">国内各大厂组件库 - IconBox</A>
            </DL><p>
`

var tiao = /<A.+>/g

var inputa2 = aa2.match(tiao)


Vue.component('tubiao',{
    data:function(){
        return {inputa2}
    },
    template:
        `
        <div>
            <h2>图标</h2>
            <div class='a-link' v-for='item in inputa2' v-html='item'></div>
        </div>

        `,
})