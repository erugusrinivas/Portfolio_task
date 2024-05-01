function func(){
    console.log('alpha');
   setTimeout(() => {
    console.log('beta');
   }, 0);
    console.log('gamma');
}
func();