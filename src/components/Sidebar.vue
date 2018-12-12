<template>
    <div>
        <el-row class="tac sidebar sidebar-bg">
            <div class="logo">
                <span class="icon icon-rem-thirtysix ac-logo-color icon-anviz-logo"></span>
            </div>
            <el-col>
                <el-menu
                    :default-active="this.$router.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    unique-opened
                    router
                    background-color="#303030"
                    text-color="#fff"
                    :class="activeTextColor"
                    >
                        <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
                        <template slot="title">
                            <i class="icon icon-rem-twentyfour icon-dashbord"></i>
                            <span v-text="item.name"></span>
                        </template>
                        <div class="normal-padding" v-for="sub in item.sub" :key="sub.componentName">
                            <el-menu-item :index="sub.componentName" v-text="sub.name"></el-menu-item>
                        </div>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import {Menu,MenuItemGroup,Submenu,MenuItem,Icon} from 'element-ui'
    import menu from '@/config/menu-config'

    export default {
        data(){
            return {
                activeTextColor: 'active-text-color',
                menu: menu
            }
        },
        methods:{
            handleOpen:function(key,keypath){
                console.log(key,keypath)
            },
            handleClose:function(key,keypath){
                console.log(key,keypath)
            }
        }
    }
</script>
<style lang="scss" scoped>
    $body-bg:                     rgba(#f8fafc,1);
    $px-fourteen:                 14px !default;
    $color-wu:                    rgba(#555,1);
    $font-family-base:            -apple-system, BlinkMacSystemFont,Arial,sans-serif !default;
    $transition-base:             all .2s ease-in-out !default;
    $rem-thirtysix:               4.25rem !default;
    $ac-color:                    rgba(#2aa75a,1);
    $rem-twenty:                  2.25rem !default;
    $rem-twentyfour:              1.5rem !default;
    $logo:                        rgba(#FF6701,1) !default;

    .main{
        width: 100vw;
        height: 100vh;
        display: flex;
        overflow: hidden;
        @media (max-width: 768px){
            max-width: 768px;
        }
    }
    .el-menu{
        border-right: 0;
    }
    .active-text-color{
        background-color: linear-gradient(to right, #2aa75a, #258c4a, #1f723b);
        color: $ac-color;
    }
    .el-menu-item.is-active{
        color: $ac-color;
    }
    .el-menu-item-group__title{
        padding: 0 !important;
    }
    .hover-transition{
        transition: $transition-base;
    }  
    .el-submenu__title i{
        color: #f1f1f1;
    }
    .sidebar-bg{
        background: #303030;
    }
    .sidebar {
        width: 260px;
        height: 100vh;
        min-height: 1vh;
        overflow-x: hidden;
        overflow-y: auto;
        float: left;
        box-shadow: -30px 0 50px rgba(#000,.12) inset;
        padding-bottom: 40px;
        position: relative;
        .title,
        .menu-icon
        {
            color: #f1f1f1;
        }
        .el-submenu,
        .el-menu-item{
            text-align: left;
        }
        .el-menu-item, 
        .el-submenu__title{
            width: 100%;
        }
        .el-menu-item{
            background-color: #111 !important;
        }
        .el-submenu__title i{
            color: #f1f1f1;
        }
        .icon{
            margin-right: 10px;
        }
        .icon-rem-twentyfour{
            font-size: $rem-twentyfour;
        }
        .icon-rem-thirtysix{
            font-size: $rem-thirtysix;
        }
        .ac-logo-color{
            color: $ac-color;
        }
        .icon-rem-twenty{
            font-size: $rem-twenty;
        }
        @extend .hover-transition;
        @media (max-width: 850px) {
            min-width: 50px;
            width: 1vw;
            transition: $transition-base;
            .menu-info {
                display: none;
            }
        }
        .item-sidebar {
            padding: 0 1em;
            @media (max-width: 850px) {
                padding: 0;
                min-width: 50px;
                height: auto;
                display: flex;
                justify-content: center;
                flex-direction: column-reverse;
            }
        }
        .logo {
            height: 10vh;
            min-height: 100px;
            line-height: 10vh;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #224a0e;
            @media (max-width: 850px) {
                padding-top: 3em;
            }
            span {
                @media (max-width: 850px) {
                    &:first-child {
                        font-size: 50px;
                    }
                    &:last-child {
                        display: none;
                    }
                }
            }
        }
    }
</style>
