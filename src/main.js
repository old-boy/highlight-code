// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
/**
 * 语法高亮 html/css/js
 *  1. prismjs  html/css
 *  2. vue-prism-editor  html/css
 */

import "prismjs";

import 'element-ui/lib/theme-chalk/index.css'
import "prismjs/themes/prism-solarizedlight.css";
import "vue-prism-editor/dist/VuePrismEditor.css";

Vue.config.productionTip = false
Vue.use(ElementUI)


/**
 * 自定义指令 v-showCode
 * 将 vue-highlightjs 定义为指令可以这样使用:
 *  <pre v-showCode><code class="javascript">{{ sourcecode }}</code></pre>
 * 
 *  当前这个插件有两个指令，分别是：v-highlightjs / v-showCode
 */
Vue.directive('showCode', {
  deep: true,
  bind: function (el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      VueHighlightJS.highlightBlock(target)
    })
  },
  componentUpdated: function (el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
        VueHighlightJS.highlightBlock(target)
      }
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

