//Ascending order and descending order....

var arr=[10,20,30,4,9,2,1];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
document.write("Acending order of an elements:"+arr);

//Descending order elements....
 var arr=[10,20,30,4,9,2,1];
 for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;

        }
    }
 }
document.write("To sort the elements in Descending order:"+arr);


//TO find the maximum number.

var arr_num=[10,20,30,4,9,2,1];
var max=arr_num[0];
for(i=0;i<arr_num.length;i++){
    if(arr_num[i]>max){
        max=arr_num[i];
        
    }
}
document.write("To get the maximum number:"+max);



//minimum number

var arr_num=[10,20,30,9];
var min=arr_num[0];
for(i=0;i<arr_num.length;i++){
    if(arr_num[i]<min){
        min=arr_num[i];
    }
}
document.write("To get the min number:"+min);


//pallindrome

var str_name="abagjsgdg";
var str_len=str_name.length;
var ispal=true;
for(var i=0;i<str_len/2;i++){
    if(str_name[i]!=str_name[str_len-i-1]){
        ispal=false;
         
    }
}
 document.write(ispal);


 var string="hello";
 var stringreverse="";
 for(i=string.length-1;i>=0;i--){
    stringreverse+=string[i];
 }
 document.writeln(stringreverse);


 var arr=[10,20,30,40,50];
 sum=arr[0];
 for(i=0;i<arr.length;i++){
    sum+=arr[i];
    avg=sum/arr.length;
 } 
 document.writeln(avg);



 //removing duplicate elements,and finding the heighst repeated value.....

 var arr=[a,b,a,c,b,c];
final_count=0;
final_var;
new_arr=[];
for(i=0;i<arr.length;i++){
    if(new_arr.indexOf(arr[i]==-1)){
        count=0;
    }
    for(j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++;
        }
        if(count>final_count)
        final_count=count;
        final_var=arr[i];
  }
  new_arr.push(arr[i]);

}
console.log(`${final_var}`);