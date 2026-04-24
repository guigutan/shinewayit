<template>
  <div class="panel">
    <div class="left">
      <div class="title" >查询条件</div>
      <div> <button>查询</button><button>清空</button> </div>
      <ul> 
        <li><label>机台编号：</label><input type="text" name="MachineNO" id="MachineNO"></li>
        <li><label>机台名称：</label><input type="text" name="MachineNO" id="MachineNO"></li>
        <li><label>IP地址：</label><input type="text" name="MachineNO" id="MachineNO"></li>
        <li><label>品牌：</label><input type="text" name="MachineNO" id="MachineNO"></li>
        <li><label>类型：</label><input type="text" name="MachineNO" id="MachineNO"></li>
        <li><label>所在楼层：</label><input type="text" name="MachineNO" id="MachineNO"></li>
        <li><label>机台编号：</label><input type="text" name="MachineNO" id="MachineNO"></li>
      </ul>

    </div>

    <div class="right">
       <div> <button>查询</button><button>清空</button> </div>


    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

  .panel{   
    display: flex;
    height: 100%
  }
  .left{
    background-color: white;
    margin: 5px;   
    border: 1px solid #ccc; 
  }
  .left .title{ color: rgb(49, 110, 202); padding: 5px;  }
  .left div {width: 100%;border-bottom: 1px solid #ccc;}
  .left div button{margin: 1px 10px; padding: 3px 15px; background-color: white; border: 1px solid #ccc;}
  .left div button:hover {background-color: rgb(200, 235, 241);border: 1px solid rgb(49, 195, 221);}
  .left ul {  list-style: none;padding: 10px;}
  .left ul li{  list-style: none;padding: 3px 0;display: flex; justify-content:flex-end ;}
  .left ul input{  height: 25px; width: 120px;}

  .right{background-color: white;margin: 5px;    border: 1px solid #ccc; }
   .right div {width: 100%;border-bottom: 1px solid #ccc;}
   .right div button{margin: 1px 10px; padding: 3px 15px; background-color: white; border: 1px solid #ccc;}
    
    
   
  



    
   
    



  .right{
    background-color: white;
    margin: 5px;
    flex: 1;
    border: 1px solid #ccc;
  }



</style>