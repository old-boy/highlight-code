<template>
    <div>
       <codeView :htmlCode="htmlCode" :jsCode="jsCode" :cssCode="cssCode"></codeView>
    </div>
</template>
<script>
import codeView from '@/components/CodeView'
export default {
    data(){
        return{
            htmlCode:
`
//左图右字
div.product-details>(div.pro-pic[dir="ltr"]>img)+(div.pro-info>h2.h2-title+p.p-banner-des.dog)

<div class="product-details">
	<div class="pro-pic" dir="ltr">
		<img src="<?php echo Yii::app()->baseUrl;?>/images/ul1/new/ul1-works-alexa.jpg"/>
	</div>
	<div class="pro-info">
		<h2 class="h2-title">标题</h2>
		<p class="描述</p>
	</div>
</div>

//右图左字，需要添加 right 控制在移动端显示图在文字上方
div.product-details.right>(div.pro-info>h2.h2-title+p.p-banner-des.dog)+(div.pro-pic[dir="rtl"]>img)

<div class="product-details right">
	<div class="pro-info">
		<h2 class="h2-title">标题</h2>
		<p class="描述</p>
	</div>
	<div class="pro-pic" dir="rtl">
		<img src="<?php echo Yii::app()->baseUrl;?>/images/ul1/new/ul1-works-alexa.jpg"/>
	</div>
</div>
`,
            jsCode:
            `no`,
            cssCode:
            `
/*产品详情页模块*/
.product-details{
    width: 100%;
    min-height: 1vh;
    max-height: 100%;
    height: auto;
    position: relative;
    margin-bottom: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    @media (max-width: 850px) {
        flex-direction: column;
    }
    .pro-pic{
        width: calc(100%/2);
        height: 100%;
        max-height: 450px;
        min-height: 1vh;
        float: left;
        position: relative;
        overflow: hidden;
        @media (max-width: 850px) {
            width: 100%;
        }
    }
    .pro-info{
        padding: 1em;
        width: calc(100%/2);
        height: 100%;
        float: right;
        position: relative;
        text-align: left;
        @media (max-width: 850px) {
            width: 100%;
            text-align: center;
        }
        img{
            display: block;
            width: 100%;
            max-height: 100%;
            margin: 0;
        }
    }
}
.right{
    @media (min-width:320px) and (max-width: 1024px) {
        flex-direction: column-reverse;
    }
}
.bg-d8{
    background: $color-d8;
}
.play-link{
    display: flex;
    align-items: center;
    color: $color-ff;
}
.dog{
    margin-bottom: 10px;
}
            `
        }
    },
    components:{
        codeView
    }
}
</script>





