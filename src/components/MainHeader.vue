<template>
    <div>
        <div class="content-header">
            <h2 class="content-title">Code Block</h2>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    $border-default: 1px solid rgba(#000,.1);
    $color-ff: rgba(#fff,1);
    $ac-color: rgba(#2aa75a,1);
    $color-aa: rgba(#aaa,1);
    $transition-base:   all .2s ease-in-out !default;


    .hover-transition{
        transition: $transition-base;
    } 
    button{
        background: transparent;
        outline: none;
        
    }
    .content-header{
        width: 100%;
        height: 84px;
        padding: 0 1em !important;
        line-height: 84px;
        display: block;
        border-bottom: $border-default;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        background: $color-ff;
        .btn-left,
        .btn-right{
            width: 50px;
            transition: $transition-base;
            &:hover,&:active,&:visited{
                border-color: transparent;
                background: $color-ff;
                .icon{
                    color: $ac-color;
                }
            }
            .icon{
                font-size: 24px;
                color: $color-aa;
            }
            .icon-rote45{
                transform: rotate(45deg);
            }
        }
        .btn-left{
            float: left;
            @media (max-width: 849px){
                display: none;
            }
        }
        .btn-right{
            float: right;
        }
        .content-title{
            font-size: 24px;
            font-weight: 400;
            line-height: 84px;
            text-align: center;
            padding: 0;
            margin: 0;
            display: inline-block;
            width: 100%;
            @extend .hover-transition;
        }
        .logo {
            display: flex;
            align-items: center;
        }
    }
</style>

