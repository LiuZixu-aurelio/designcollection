var aa4 =        `
<DT><H3 ADD_DATE="1628933329" LAST_MODIFIED="1628933329">配色</H3>
            <DL><p>
                <DT><A HREF="http://www.paletton.com/" >配色方案生成器 - Paletton - The Color Scheme Designer</A>
                <DT><A HREF="http://khroma.co/">AI根据你喜欢的颜色配色 - Khroma - The AI color tool for designers</A>
                <DT><A HREF="https://webgradients.com/">好看的渐变配色 - Fresh Background Gradients | WebGradients.com 💎</A>
                <DT><A HREF="https://uigradients.com/#MegaTron" >uiGradients-美丽的彩色渐变</A>
                <DT><A HREF="https://www.grabient.com/" ADD_DATE="1576499921" >渐变配色 - Grabient</A>
                <DT><A HREF="https://webkul.github.io/coolhue/">配色大全 - Gradient Colors Collection Palette - CoolHue 2.0</A>
                <DT><A HREF="https://color.adobe.com/zh/create" >色輪、調色盤產生器 | Adobe Color</A>
                <DT><A HREF="https://mycolor.space/" >配色生成并展示应用图 - ColorSpace - Color Palettes Generator and Color Gradient Tool</A>
                <DT><A HREF="http://labs.tineye.com/">颜色匹配当颜色的照片TinEye Labs</A>
                <DT><A HREF="https://www.materialui.co/" >Material Design Color, Flat Colors, Icons, Color Palette | Material UI</A>
                <DT><A HREF="https://coolors.co/242933-36acdb-655fa8-f26d3c-269b7c" >配色生成具有对比功能 - Generate - Coolors.co</A>
                <DT><A HREF="http://brandcolors.net/" >各大品牌配色 - BrandColors - official brand color hex codes</A>
                <DT><A HREF="https://duotone.shapefactory.co/" >调试照片高光阴影色 - Duotone by ShapeFactory | Create Beautiful Free Duotones</A>
                <DT><A HREF="https://www.opendoodles.com/" >打开涂鸦-免费的粗略插图</A>
                <DT><A HREF="https://www.materialpalette.com/colors" >品牌官方配色 - BrandColors - official brand color hex codes</A>
            </DL><p>
`

var tiao = /<A.+>/g

var inputa4 = aa4.match(tiao)


Vue.component('peise',{
    data:function(){
        return {inputa4}
    },
    template:
        `
        <div>
            <h2>配色</h2>
            <div class='a-link' v-for='item in inputa4' v-html='item'></div>
        </div>

        `,
})