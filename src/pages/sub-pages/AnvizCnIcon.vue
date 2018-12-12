<template>
 <DIV>
   <pre v-highlightjs><code class="javascript">
       $(document).ready(function() {
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        });
       </code></pre>
 </DIV>
</template>
<script>
export default {
    data() {
    return { 
        
    };
  }
}
</script>
