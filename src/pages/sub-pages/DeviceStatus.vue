<template>
 <div>
     <codeView :htmlCode="htmlCode" :jsCode="jsCode" :cssCode="cssCode"></codeView>
 </div>
</template>
<script>
import codeView from '@/components/CodeView'

let htmlCode = `
<ul class="DeviceMinBlock device-warp">
    <li :class="device [offline ? offline : online] close-door">
        <div class="media">
            <div class="media-body">
                <div class="media-heading">
                    <h4 class="media-heading-title">{{title}}</h4>
                    <div class="status">
                        <span class="status-icon icon-pixel-eighteen icon-pc"></span>
                        <span class="status-icon icon-pixel-eighteen icon-wifi"></span>
                    </div>
                </div>
                <p class="media-sub-title">SN:<span>{{number}}</span></p>
                <p class="media-sub-title">IP:<span>{{number}}</span></p>
            </div>
            <div class="media-right">
                <div class="state-bg">
                    <!--button-->
                    <a href="3" class="door-box">
                        <span class="icon icon-door"></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="bottom-item">
            <div class="bottom-item-info">
                <span class="icon font-pixel-twenty icon-keep-open"></span>常开
            </div>
            <div class="bottom-item-info">
                <span class="icon font-pixel-twenty icon-keep-close"></span>常闭
            </div>
            <div class="bottom-item-info">
                <span class="icon font-pixel-twenty icon-door"></span>普通
            </div>
        </div>
    </li>
</ul>
`;

let cssCode = `
@charset 'utf-8';
.device-warp{
    display: flex;
    flex-wrap: wrap;
    .device{
        margin: 4px;
        border: 0;
        padding-bottom: 0;
        width: calc(50% - 8px);
        height: auto;
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
            padding: 1em;
            cursor: pointer;
            a{
                width: 64px;
                height: 64px;
                display: block;
                text-align: center;
                z-index: 1;
                position: relative;
            }
            &:hover{
                .media-heading-title,
                .media-sub-title{
                    color: $ac-color;
                }
            }
        }
        .media-heading{
            align-items: center;
            justify-content: flex-start;
            flex-wrap: nowrap;
            .media-sub-title{
                padding-left: 0 !important;
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
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: calc(100% / 3);
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


.door-loading-bg{
    z-index: 99;
    background: rgba($color-ff,.8);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    cursor: pointer;
    .circle-process{
        position: relative;
        width: 100%;
        height : 100%;
        .wrapper{
            width: 32px;
            height: 64px;
            position: absolute;
            top:0;
            overflow: hidden;
        }
        .right{
            right:0;
        }
        .left{
            left:0;
        }
        .circle{
            width: 64px;
            height: 64px;
            border:2px solid transparent;
            border-radius: 50%;
            position: absolute;
            top:0;
            opacity: .9;
            transform : rotate(-135deg);
        }
        .rightcircle{
            border-top:2px solid $ac-color;
            border-right:2px solid $ac-color;
            right:0;
            -webkit-animation: circle_right 5s linear infinite;
        }
        .leftcircle{
            border-bottom:2px solid $ac-color;
            border-left:2px solid $ac-color;
            left:0;
            -webkit-animation: circle_left 5s linear infinite;
        }
    }
    @-webkit-keyframes circle_right{
        0%{
            -webkit-transform: rotate(-135deg);
            opacity: .9;
        }
        50%,100%{
            -webkit-transform: rotate(45deg);
            opacity: 1;
        }
    }
    @-webkit-keyframes circle_left{
        0%,50%{
            -webkit-transform: rotate(-135deg);
            opacity: .9;
        }
        100%{
            -webkit-transform: rotate(45deg);
            opacity: 1;
        }
    }
}

.online{
    opacity: 1;
    transition: $transition-base;
    position: relative;
    .door-loading-bg{
        @extend .door-loading-bg;
    }
    .status{
        display: flex;
        margin-left: 1em;
        flex-wrap: nowrap;
        .icon-pc{
            font-family: 'icon';
            font-size: 14px;
            color: $color-success;
            font-weight: 400;
            display: inline-block;
            &:before{
                content: "\e940";
            }
        }
    }
    .bottom-item-info{
        color: $font-sub;
        .icon-door{
            font-family: 'icon';
            font-size: 20px;
            color: $font-sub;
            &:before{
                content: "\e93a";
            }
        }
        &:hover{
            .icon,
            .bottom-item-info{
                color: $ac-color;
            }
        }
    }
    .icon-door{
        color: $ac-color;
    }
    .active{
        background: $ac-color;
        color: $color-ff;
        opacity: 1;
        .icon,.bottom-item-info{
            color:$color-ff;
        }
        &:hover{
            opacity: .9;
            .icon,.bottom-item-info{
                color:$color-ff;
            }
        }
    }
    &:hover{
        .icon-door{
            color: $color-ff !important;
        }
    }
}

.offline{
    opacity: .3;
    transition: $transition-base;
    position: relative;
    .door-loading-bg{
        @extend .door-loading-bg;
    }
    .state-bg{
        background: $color-danger !important;
        border-radius: 50%;
        .icon-door{
            font-size: 40px;
            line-height: 64px;
            color: $color-ff;
            &:hover{
                opacity: .8;
            }
        }
    }
    .status{
        display: none;
    }
    .bottom-item-info{
        .icon-door{
            font-family: 'icon';
            font-size: 20px;
            color: $font-sub;
            &:before{
                content: "\e93a";
            }
        }
        &:hover{
            .icon,
            .bottom-item-info{
                color: $font-sub;
            }
        }
    }
    .active{
        background: $color-ff;
        color: $font-sub;
        opacity: 1;
        .icon{
            color: $font-sub;
        }
        &:hover{
            .icon{
                color: $font-sub !important;
            }
        }
    }
    .door-face{
        background: $color-aa !important;
    }
    &:hover{
        .media-heading-title{
            color: $color-b1 !important;
        }
        p,.icon{
            color: $font-sub !important;
        }
        .state-bg{
            .icon-door{
                color: $color-ff !important;
            }
        }
    }
}
.open-door{
    .state-bg{
        background: $color-danger !important;
        border-radius: 50%;
        .icon-door{
            font-family: 'icon';
            font-size: 40px;
            line-height: 64px;
            color: $color-ff;
            &:before{
                content: "\e93a";
            }
        }
        &:hover{
            opacity: .8;
            .icon-door{
                color: $color-ff;
            }
        }
    }
}


.close-door{
    .state-bg{
        background: $color-success !important;
        border-radius: 50%;
        .icon-door{
            font-family: 'icon';
            font-size: 40px;
            line-height: 64px;
            color: $color-ff;
            &:before{
                content: "\e93b";
            }
        }
        &:hover{
            opacity: .8;
            .icon-door{
                color: $color-ff;
            }
        }
    }
}


.filter-item.online{
    .status{
        position: absolute;
        right: 10px;
        top: 10px;
    }
}
.filter-active{
    .status-icon{
        color:$color-ff;
    }
}

@keyframes lightning{
    0% {
        opacity: .3;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: .3;
    }
}

.details{
    margin: 0;
    transition: $transition-base;
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
