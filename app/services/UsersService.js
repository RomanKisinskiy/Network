app.factory("US",function(){
    return {
      getUsers:function(){
        return arr;
      },
      getNumber:function(){
          return number;
      },
      changePhoto:function(n,url){
       arr[n].photourl=url;   
      },  
    }
});

var arr=[
    {
    name:"Roman",
    sname:"Kisinskiy",
    password:32,
    phonenumber:80634436788,
    country:"Ukraine",
    city:"Lviv",
    skype:"RK",
    github:"None",
    description:"Yoooo",
    photourl:"image/1.jpg",
    chat:[],
    friends:[],    
    },
     {
    name:"Taras",
    sname:"KUG",
    password:3,
    phonenumber:8056746788,
    country:"USA",
    city:"NewYork",
    skype:"EEE",
    github:"Yes",
    description:"Hello",
    photourl:"image/2.jpg",
    chat:[],
    friends:[],      
    },
     {
    name:"Igor",
    sname:"LKF",
    password:2,
    phonenumber:877776788,
    country:"China",
    city:"Shengen",
    skype:"China mobile",
    github:"China",
    description:"Hello my name is Igor",
    photourl:"image/3.jpg",
    chat:[],
    friends:[],      
    },
];
var number;
