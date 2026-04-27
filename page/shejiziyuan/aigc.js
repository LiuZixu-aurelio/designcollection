var aaAigc = `
<DT><H3>AIGC</H3>
<DL><p>
    <DT><A HREF="https://chat.openai.com/">ChatGPT（文本/图像能力）</A>
    <DT><A HREF="https://gemini.google.com/">Google Gemini（多模态助手）</A>
    <DT><A HREF="https://claude.ai/">Claude（长文本与创作）</A>
    <DT><A HREF="https://www.midjourney.com/">Midjourney（AI 生图）</A>
    <DT><A HREF="https://www.bing.com/images/create">Microsoft Designer / Bing Image Creator（AI 生图）</A>
    <DT><A HREF="https://stability.ai/">Stability AI（Stable Diffusion）</A>
    <DT><A HREF="https://leonardo.ai/">Leonardo AI（AI 生图）</A>
    <DT><A HREF="https://www.krea.ai/">Krea（实时生图/增强）</A>
    <DT><A HREF="https://www.canva.com/magic-media/">Canva Magic Media（图像/视频生成）</A>
    <DT><A HREF="https://runwayml.com/">Runway（AI 视频）</A>
    <DT><A HREF="https://pika.art/">Pika（AI 视频）</A>
    <DT><A HREF="https://www.luma.ai/">Luma Dream Machine（AI 视频）</A>
    <DT><A HREF="https://www.heygen.com/">HeyGen（数字人视频）</A>
    <DT><A HREF="https://www.capcut.com/">剪映 CapCut（AI 剪辑/特效）</A>
</DL><p>
`;

var tiao = /<A.+>/g;

var inputaAigc = aaAigc.match(tiao);

Vue.component('aigc',{
    data:function(){
        return {inputaAigc};
    },
    template:
        `
        <div>
            <h2>AIGC</h2>
            <div class='a-link' v-for='item in inputaAigc' v-html='item'></div>
        </div>

        `,
});
