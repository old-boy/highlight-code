<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="html" name="first">
                <prism-editor :code="htmlCode" language="html" class="my-editor"></prism-editor>
            </el-tab-pane>
            <el-tab-pane label="css" name="second">
                <pre><code class="language-css">{{cssCode}}</code></pre>
            </el-tab-pane>
            <el-tab-pane label="js" name="third">
                <prism-editor :code="jsCode" language="js" class="my-editor"></prism-editor>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import PrismEditor from "vue-prism-editor";
export default {
    data(){
        return {
            activeName: 'first',
            lineNumbers:true
        }
    },
    props:['htmlCode','jsCode','cssCode'],
    components:{
        PrismEditor
    },
    methods:{
        handleClick(tab,event){
            console.log(tab,event);
        }
    }
}
</script>


