<template>
    <div>
        <codeView :htmlCode="htmlCode" :jsCode="jsCode" :cssCode="cssCode"></codeView>
    </div>
</template>
<script>
import codeView from '@/components/CodeView'

let htmlCode = 
`
<ul class="record-warp">
    <li class="record">
        <div class="media">
            <div class="media-body">
                <div class="media-heading">
                    <h4 class="media-heading-title">{{name]}}</h4>
                    <span class="media-sub-title">{{title}}</span>
                </div>
            </div>
            <div class="media-right">
                <a href="">
                    <img src="" alt="" class="media-object"/>
                </a>
            </div>
        </div>
        <div class="bottom-item">
            <div class="bottom-item-info">
                <div class="item-info icon">
                    <span class="icon font-pixel-twenty icon-fingerprint icon-active"></span>
                </div>
                <div class="item-info time">
                    <span>20181204</span>
                </div>
            </div>
        </div>
    </li>
</ul>
`
let cssCode = 
`
/*指纹记录*/
.record-warp{
    .record{
        position: relative;
        display: block;
        padding: 10px 15px;
        margin: 4px;
        border: 0;
        padding-bottom: 0;
        width: calc(50% - 8px);
        height: 100%;
        float: left;
        transform: scale(0);
        background: rgba($ac-color,.3);
        transition: all .1s ease .2s;
        animation: newRecord .5s both,changeBg 2s both;
        @media (max-width: 850px){
            width: 100%;
        }
        @media (min-width: 851px) and (max-width: 1330px){
            width: calc(100% - 8px);
        }
        @media (min-width: 320px) and (max-width: 1330px){
            width: 100%;
            .media{
                margin-bottom: 0;
            }
        }
        
        
        .media{
            padding-bottom: 10px;
            border-bottom: 1px solid #f1f1f1;
            cursor: pointer;
            a{
                width: 64px;
                height: 64px;
                border-radius: 50%;
                display: flex;
                overflow: hidden;
                text-decoration: none;
                text-align: center;
                z-index: 1;
                background: $color-dd;
                position: relative;
                cursor: pointer;
                .media-object{
                    display: block;
                    max-width: 100%;
                    max-height: calc(100% * 160/64);
                    background: transparent;
                    z-index: 1;
                    margin: auto;
                }
            }
            &:hover{
                .media-heading-title,
                .media-sub-title{
                    color: $ac-color;
                }
            }
        }
        .bottom-item{
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: nowrap;
            cursor: pointer;
            .bottom-item-info{
                flex: 1;
                line-height: 40px;
                display: flex;
                justify-content: center;
                @media (min-width: 320px) and (max-width: 1330px){
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
        .bottom-item-info{
            line-height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
            border-bottom: 1px solid #f1f1f1;
            @media (min-width: 851px) and (max-width: 1330px){
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .item-info{
                flex: 1;
                @media (min-width: 851px) and (max-width: 1330px){
                    width: 100%;
                }
                .icon{
                    font-size: $px-twentyfour;
                    line-height: 40px;
                    padding: 0 4px;
                    cursor: pointer;
                }
                .icon-active{
                    color: $ac-color;
                    font-weight: $font-weight-mid;
                    &:hover{
                        color: $ac-color;
                    }
                }
            }
            .time{
                span{
                    padding-right: 10px;
                }
                text-align: right;
                color: $ac-color;
                @media (min-width: 851px) and (max-width: 1330px){
                    text-align: right;
                }
            }
        }
        .media-heading{
            display: flex;
            .media-sub-title{
                font-size: 14px;
                color: $color-aa;
                padding-left: 1em;
            }
        }
        .media-heading-title{
            font-family: inherit;
            font-weight: 500;
            line-height: 1.1;
            color: $color-b1;
            font-size: 18px;
        }
    }
}

`

export default {
    data(){
        return {
            htmlCode:htmlCode,
            jsCode:`no`,
            cssCode:cssCode
        }
    },
    components:{
        codeView
    }
}
</script>
