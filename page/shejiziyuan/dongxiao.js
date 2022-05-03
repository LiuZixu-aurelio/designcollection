var aa3 =        `
<DT><H3 ADD_DATE="1628933329" LAST_MODIFIED="1628933329">动效</H3>
            <DL><p>
                <DT><A HREF="https://uimovement.com/" >UI动效 - UI Movement - The best UI design inspiration, every day</A>
                <DT><A HREF="https://app-ealing.com/" >UI动效 - Appealing | Mobile UI Animations</A>
                <DT><A HREF="http://www.mixkit.com/">特效（声音、图片、视频、模板）大全www.mixkit.com</A>
                <DT><A HREF="https://uiiiuiii.com/aftereffects/12121562.html" >AE入门！No .1 简单的按钮动效 - 优优教程网 - UiiiUiii.com</A>
            </DL><p>
`

var tiao = /<A.+>/g

var inputa3 = aa3.match(tiao)


Vue.component('dongxiao',{
    data:function(){
        return {inputa3}
    },
    template:
        `
        <div>
            <h2>动效</h2>
            <div class='a-link' v-for='item in inputa3' v-html='item'></div>
        </div>

        `,
})