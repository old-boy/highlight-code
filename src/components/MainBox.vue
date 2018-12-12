<template>
    <div>
        <!-- 块内容 -->
        <div class="box analyze">
            <section>
                <!--router-view 是所有router菜单对应的内容， content内容区 -->
                <router-view></router-view>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    $color-ff:  rgba(#fff,1);
    $color-f9: rgba(#f9f9f9,1);
    $box-shadow: 0 1px 1px rgba(0,0,0,0.1);

    //右侧区域，内容
    .box{
        width: 100%;
        height: calc(100% - 84px);
        padding: 1em;
        background: $color-f9;
        section{
            margin: 1em;
            padding: 1em;
            width: calc(100% - 2em);
            height: auto;
            box-shadow: $box-shadow;
            position: relative;
            background:$color-ff; 
        }
    }
</style>

