
var kdata=0     // just to store x value in show fuction  it is like temporary var
var sym=''  //arithmetic operator storing
   
function show(x)
{           
    if(((x!='+')&&(x!='-'))&&((x!='*')&&(x!='/'))&&((x!='%')&&(x!='**'))&&(x!='c'))
    {           
        x=(kdata*10)+x
        document.getElementById('input').innerHTML=`${x}`
        kdata=x
    }
    else
    {
        storeData(kdata)
        sym+=x 
    
        document.getElementById('input').innerHTML=`${kdata}`
        kdata=0        
    }


    if(x=='c')
    {  
        kdata=0
       // data[0]=null
        document.getElementById('input').innerHTML=`0`
      //  console.log(x)
       // console.log(kdata)
       x=0
       sym=''
        //console.log(data[0])
    }

}

let data=[]  // used store data what accepted
var m=0  //m for data=[]d
function storeData(d)
{   
    data[m]=d  

  // console.log('store')   
} 
function result()
{   // console.log('result entry'+sym)
    if(sym=='+')
    { 
        document.getElementById('input').innerHTML=`${data[0]+kdata} = ${kdata} + ${data[0]}`
        sym=''
    }
    if(sym=='-')
    {    
        if((data[0]-kdata)<0)
        {
            document.getElementById('input').innerHTML=`${-(data[0]-kdata)} - = ${kdata} - ${data[0]}`    
        }
        document.getElementById('input').innerHTML=`${data[0]-kdata} = ${kdata} - ${data[0]}`
        sym=''
    }
    if(sym=='*')
    { 
        document.getElementById('input').innerHTML=`${data[0]*kdata} = ${kdata} * ${data[0]}`
        sym=''
    }
    if(sym=='/')
    { 
        document.getElementById('input').innerHTML=`${data[0]/kdata} = ${kdata} / ${data[0]}`
        sym=''
    }
    
    console.log(sym+'sym')
    data[0]=0
    kdata=0
    x=0
}