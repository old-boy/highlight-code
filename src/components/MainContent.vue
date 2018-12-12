<template>
    <div class="content">
        <mainHeader></mainHeader>
        <mainBox></mainBox>
    </div>
</template>
<script>
    import mainHeader from '@/components/MainHeader'
    import mainBox from '@/components/MainBox'
    export default {
        components:{
            mainHeader,
            mainBox
        }
    }
</script>
<style lang="scss" scoped>
    $color-ff:          rgba(#fff,1);
    $px-twentyfour:     24px;
    $transition-base:   all .2s ease-in-out !default;

    .hover-transition{
        transition: $transition-base;
    } 
    .content{
        width: calc(100% - 260px);
        max-width: 1440px;
        height: 100%;
        float: right;
        z-index: 1;
        @media (max-width: 850px) {
            width: calc(100vw - 50px);
            section{
                display: flex;
                flex-direction: column;
            }
        }
        &::-webkit-selection{
            background: rgba($color-ff,.1);
        }
        &::-moz-selection{
            background: rgba($color-ff,.1);
        }
        &::selection{
            background: rgba($color-ff,.1);
        }
        //右侧区域，顶部 
        // Header.scss
        //右侧区域，内容 .box
    }
</style>


