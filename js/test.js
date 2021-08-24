var arr = [1, 2, 3, 2, 1, 3, 4, 2,2, 5];
for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; i < arr.length; j++)
    {
        if(arr[j] == arr[i]){
            arr.splice(j,1);
        }
    }
}
print(arr);