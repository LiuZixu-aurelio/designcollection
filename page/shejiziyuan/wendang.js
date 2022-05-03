var aa8 =        `
<DT><H3 ADD_DATE="1628933329" LAST_MODIFIED="1628933329">文档</H3>
<DL><p>
    <DT><A HREF="https://www.notion.so/SaaS-86f4028f8c994cbf9bbe7b6ca52d087b" >SaaS产品设计</A>
    <DT><A HREF="https://tob.design/#/home" >Tob Design - 超实用B端及可视化产品设计师平台</A>
    <DT><A HREF="https://www.pmcaff.com/">PMCAFF产品经理社区 - 产品经理人气组织，产品爱好者学习交流社区，专注互联网产品研究</A>
</DL><p>
`

var tiao = /<A.+>/g

var inputa8 = aa8.match(tiao)

Vue.component('wendang',{
    data:function(){
        return {inputa8}
    },
    template:
        `
        <div>
            <h2>文档</h2>
            <div class='a-link' v-for='item in inputa8' v-html='item'></div>
        </div>

        `,
})