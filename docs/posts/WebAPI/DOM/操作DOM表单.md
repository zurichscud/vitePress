# 操作DOM表单

## Select



```ts
const options=document.querySelectorAll('#fruit option')

const res=[]
options.forEach(option=>{
   if (option.selected) {
    res.push(option.value)
   }
})
console.log(res)
```

