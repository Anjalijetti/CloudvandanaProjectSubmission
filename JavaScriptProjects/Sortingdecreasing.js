var a=[1,8,5,2,3,7]
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]<a[j]){
            let temp=a[i]
            a[i]=a[j]
            a[j]=temp

        }
    }  
}
console.log(a)