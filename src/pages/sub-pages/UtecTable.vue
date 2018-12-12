<template>
    <div>
        <codeView :htmlCode="htmlCode" :jsCode="jsCode" :cssCode="cssCode"></codeView>
    </div>
</template>
<script>
import codeView from '@/components/CodeView'
export default {
    data(){
        return {
            htmlCode:
`
//1列1行
div.warp>h1+h3+p+div.table-warp>(div.table-title>ul.title-list>li.title-item)+(div.table-content>ul.param-list>li.param-item>img+p)
//3列11行
(ul.param-list>(li.param-item>img*2+p)+li.param-item*10)*3
//6列20行
(ul.param-list>(li.param-item>img*2+p)+li.param-item*20)*6
                -
                -
//适用于6列，左1列不动
<div class="warp">
    <h1>Compare Ultralog models</h1>
    <h3>Find the Ultralog that's right for you</h3>
    <p>Every door in your house can go smart.</p>
    <div class="table-warp">
        //自适应手机时，这块不动
        <div class="table-title">
            <ul class="title-list">
                <li class="title-item"></li>
                <li class="title-item"></li>
            </ul>
        </div>
        //自适应手机时，这块滚动
        <div class="table-content">
            <ul class="param-list">
                <li class="param-item">
                    <img src="" alt="" />
                    <p></p>
                </li>
                <li class="param-item">
            </ul>
            <ul class="param-list">
                <li class="param-item">
            </ul>
        </div>
    </div>
</div>

//适用于多列，左1列不动
<div class="warp">
    //增加 responsive special 突出显示第1列
    <div class="table-warp responsive special">
        //自适应手机时，这块不动
        <div class="table-title">
            <ul class="title-list">
                <li class="title-item"></li>
                <li class="title-item"></li>
            </ul>
        </div>
        //自适应手机时，这块滚动
        <div class="table-content">
            <ul class="param-list">
                <li class="param-item">
                    <img src="" alt="" />
                    <p></p>
                </li>
                <li class="param-item">
            </ul>
            <ul class="param-list">
                <li class="param-item">
            </ul>
        </div>
    </div>
</div>

//Yes icon
<li class="param-item"><span class="icon-utec-yes icon-yes"></span></li>

//No icon
<li class="param-item"><span class="icon-utec-no icon-no"></span></li>

//All yes+all
<li class="param-item"><span class="icon-ok-all"></span></li>

//文字
<li class="param-item"><span>Under Review</span></li>
`,
            jsCode:`no`,
            cssCode:
            `/*table模块*/
.warp{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    position: relative;
    text-align: center;
    p{
        max-width: 60%;
        margin: auto;
    }
    .table-warp{
        width: 100%;
        max-width: 90%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 3em auto;
        overflow: hidden;
        @media (max-width: 850px) {
            max-width: 94%;
        }
        .table-title{
            width: calc(100% / 6);
            min-width: 200px;
            height: auto;
            flex: 1;
            @media (max-width: 850px) {
                min-width: 170px;
            }
            .title-item{
                width: 100%;
                color: $color-black;
                font-weight: $font-weight-big;
            }
        }
        .table-content{
            width: 100%;
            height: auto;
            flex: 3;
            display: flex;
            @media (max-width: 850px) {
                width: 100%;
                overflow-x: auto;
                overflow-y: hidden;
            }
            .param-item{
                width: 100%;
                span{
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                }
            }
        }
        .title-list,
        .param-list{
            margin: 0;
        }
        .table-th{
            font-family: initial;
            font-weight: $font-weight-big;
            background: #d4d8d8 !important;
        }
        .title-item,
        .param-item{
            font-size: 16px;
            color: $color-aa;
            height: 60px;
            text-align: left;
            line-height: 1;
            border-bottom: 1px solid $color-ee;
            border-right: 1px solid $color-ee;
            white-space: pre-wrap;
            margin: 0;
            padding: 0 10px;
            display: flex;
            align-items: center;
            transition: all .3s;
            overflow: hidden;
            &:nth-of-type(odd){
                background: $color-ff;
            }
            &:nth-of-type(even){
                background: #f8f9f9;
            }
            &:hover{
                opacity: .9;
                color: #09c;
            }
        }
        .param-list{
            width: calc(100% / 5);
            min-width: 200px;
        }
        .param-list{
            .param-item{
                &:first-child{
                    height: auto;
                    min-height: calc(192px + 40px);
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                }
            }
        }
        .title-list{
            .title-item{
                border-left: 1px solid $color-ee;
               &:first-child{
                   height: auto;
                   min-height: calc(192px + 40px);
                   display: flex;
                   flex-direction: column;
                } 
            }
            @media (max-width: 850px) {
                .title-item{
                    background: #fff !important;
                }
            }
        }
    }
    //自适应
    .responsive{
        .table-title,
        .table-content,
        .param-list{
            width: 100%;
        }
    }
    //突出显示第一列
    .special{
        .table-content{
            .param-list{
                &:first-child{
                    .param-item{
                        background: #f0f8fb;
                        color: #29343a;
                    }
                }
            }
        }
    }
}
.warp-top{
    padding-top: 80px;
}
            `
        }
    },
    components:{
        codeView
    }
}
</script>
