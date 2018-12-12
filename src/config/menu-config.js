//外层的数组代表一级菜单，内层sub数组代表二级菜单。
module.exports = [{
    name: 'Anviz Module',
    id:'anviz',
    sub: [{
        name: 'layout 布局',
        componentName: 'AnvizLayout'
        }, {
        name: 'container 布局容器',
        componentName: 'AnvizContainer'
    }]
},{
    name: 'U-tec Module',
    id: 'utec',
    sub: [{
            name: 'details',
            componentName: 'UtecProductCard'
        }, {
            name: 'table',
            componentName: 'UtecTable'
    }]
},{
    name: 'cc-Box Module',
    id:'crossChexBox',
    sub: [{
        name: 'device 状态',
        componentName: 'DeviceStatus'
    }, {
        name: 'user 状态',
        componentName: 'UserStatus'
    }]
},{
    name: 'websiteIcon Module',
    id:'icon',
    sub:[{
        name: 'anviz cn-icon',
        componentName:'AnvizCnIcon'
    }, {
        name: 'anviz en-icon',
        componentName: 'AnvizEnIcon'
    }, {
        name: 'u-tec icon',
        componentName: 'UtecEnIcon'
    }, {
        name: 'box icon',
        componentName: 'BoxEnIcon'
    }, {
        name: '云考勤 icon',
        componentName:'CCEnIcon'
    }]
}]