<script type="text/javascript">
             //获取加号按钮
		 var addBtn = document.getElementById('add');
 
             //为按钮添加点击方法
             addBtn.onclick = function(){
                 var a = document.getElementById('num1').value;
                 var b = document.getElementById('num2').value;
                 var a_int = parseInt(a, 10);
                 var b_int = parseInt(b, 10);
                 //调用加法
                 var result = addition(a_int,b_int);
                 console.log(result);
                 }
            
             //构造函数
             function addition(x, y){
                 return x + y;
             }
         </script>