'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let Seattle = {
    storeName : 'Seattle',
    coustomerNum : [],
    cookiesNum:[],
    cookiesPerHour:[],
    min : 23,
    max : 65,
    avg : 6.3,
    total:0,
        calCust : function(min , max ){
            for(let i =0;i<hours.length;i++){
                this.coustomerNum.push(randomNum(min,max));
            }
            return this;
            },

        calcookie : function(){
            for(let x =0;x<hours.length;x++){
                let p = Math.floor(((this.coustomerNum[x])*(this.avg)));
                this.cookiesNum.push(p)   
                this.total=this.total+p;
            }
            return this;
            },
            fillData:function (){
                for(let x =0;x<hours.length;x++){
                    this.cookiesPerHour.push(`${hours[x]} : ${this.cookiesNum[x]} cookies`);
                }
                this.cookiesPerHour.push(`Total  :  ${this.total}`);
            },

        getAll : function(){
            this.fillData();
             return this.cookiesPerHour; 
            },
        
        render : function(){

            let divEl = document.getElementById('cookies1');
            let ulEl = document.createElement('ul');
            divEl.appendChild(ulEl);
            let liEl=document.createElement('li');
            liEl.textContent="StoreName : "+ this.storeName ;
            ulEl.appendChild(liEl);
            for(let i =0 ;i <=hours.length;i++){
                let liEl=document.createElement('li');
                liEl.textContent=this.cookiesPerHour[i];
            ulEl.appendChild(liEl);
            
        }
        
        }




    }

        
    console.log(Seattle.calCust(Seattle.min,Seattle.max));
    console.log(Seattle.calcookie());
    console.log(Seattle.getAll())
    Seattle.render();
    

    
let Tokyo = {
    storeName : 'Tokyo',
    coustomerNum : [],
    cookiesNum:[],
    cookiesPerHour:[],
    min : 3,
    max : 24,
    avg : 1.2,
    total:0,
        calCust : function(min , max ){
            for(let i =0;i<hours.length;i++){
                this.coustomerNum.push(randomNum(min,max));
            }
            return this;
            },

        calcookie : function(){
            for(let x =0;x<hours.length;x++){
                let p = Math.floor(((this.coustomerNum[x])*(this.avg)));
                this.cookiesNum.push(p)   
                this.total=this.total+p;
            }
            return this;
            },
            fillData:function (){
                for(let x =0;x<hours.length;x++){
                    this.cookiesPerHour.push(`${hours[x]} : ${this.cookiesNum[x]} cookies`);
                }
                this.cookiesPerHour.push(`Total  :  ${this.total}`);
            },

        getAll : function(){
            this.fillData();
             return this.cookiesPerHour; 
            },
        
        render : function(){

            let divEl = document.getElementById('cookies1');
            let ulEl = document.createElement('ul');
            divEl.appendChild(ulEl);
            let liEl=document.createElement('li');
            liEl.textContent="StoreName : "+ this.storeName ;
            ulEl.appendChild(liEl);
            for(let i =0 ;i <=hours.length;i++){
                let liEl=document.createElement('li');
                liEl.textContent=this.cookiesPerHour[i];
            ulEl.appendChild(liEl);
            
        }
        
        }




    }

        
    console.log(Tokyo.calCust(Tokyo.min,Tokyo.max));
    console.log(Tokyo.calcookie());
    console.log(Tokyo.getAll())
    Tokyo.render();








    
let Dubai = {
    storeName : 'Dubai',
    coustomerNum : [],
    cookiesNum:[],
    cookiesPerHour:[],
    min : 11,
    max : 38,
    avg : 3.7,
    total:0,
        calCust : function(min , max ){
            for(let i =0;i<hours.length;i++){
                this.coustomerNum.push(randomNum(min,max));
            }
            return this;
            },

        calcookie : function(){
            for(let x =0;x<hours.length;x++){
                let p = Math.floor(((this.coustomerNum[x])*(this.avg)));
                this.cookiesNum.push(p)   
                this.total=this.total+p;
            }
            return this;
            },
            fillData:function (){
                for(let x =0;x<hours.length;x++){
                    this.cookiesPerHour.push(`${hours[x]} : ${this.cookiesNum[x]} cookies`);
                }
                this.cookiesPerHour.push(`Total  :  ${this.total}`);
            },

        getAll : function(){
            this.fillData();
             return this.cookiesPerHour; 
            },
        
        render : function(){

            let divEl = document.getElementById('cookies1');
            let ulEl = document.createElement('ul');
            divEl.appendChild(ulEl);
            let liEl=document.createElement('li');
            liEl.textContent="StoreName : "+ this.storeName ;
            ulEl.appendChild(liEl);
            for(let i =0 ;i <=hours.length;i++){
                let liEl=document.createElement('li');
                liEl.textContent=this.cookiesPerHour[i];
            ulEl.appendChild(liEl);
            
        }
        
        }




    }

        
    console.log(Dubai.calCust(Dubai.min,Dubai.max));
    console.log(Dubai.calcookie());
    console.log(Dubai.getAll())
    Dubai.render();









    
let Paris = {
    storeName : 'Paris',
    coustomerNum : [],
    cookiesNum:[],
    cookiesPerHour:[],
    min : 20,
    max : 38,
    avg : 2.3,
    total:0,
        calCust : function(min , max ){
            for(let i =0;i<hours.length;i++){
                this.coustomerNum.push(randomNum(min,max));
            }
            return this;
            },

        calcookie : function(){
            for(let x =0;x<hours.length;x++){
                let p = Math.floor(((this.coustomerNum[x])*(this.avg)));
                this.cookiesNum.push(p)   
                this.total=this.total+p;
            }
            return this;
            },
            fillData:function (){
                for(let x =0;x<hours.length;x++){
                    this.cookiesPerHour.push(`${hours[x]} : ${this.cookiesNum[x]} cookies`);
                }
                this.cookiesPerHour.push(`Total  :  ${this.total}`);
            },

        getAll : function(){
            this.fillData();
             return this.cookiesPerHour; 
            },
        
        render : function(){

            let divEl = document.getElementById('cookies1');
            let ulEl = document.createElement('ul');
            divEl.appendChild(ulEl);
            let liEl=document.createElement('li');
            liEl.textContent="StoreName : "+ this.storeName ;
            ulEl.appendChild(liEl);
            for(let i =0 ;i <=hours.length;i++){
                let liEl=document.createElement('li');
                liEl.textContent=this.cookiesPerHour[i];
            ulEl.appendChild(liEl);
            
        }
        
        }




    }

        
    console.log(Paris.calCust(Paris.min,Paris.max));
    console.log(Paris.calcookie());
    console.log(Paris.getAll())
    Paris.render();









    
let Lima = {
    storeName : 'Lima',
    coustomerNum : [],
    cookiesNum:[],
    cookiesPerHour:[],
    min : 2,
    max : 16,
    avg : 4.6,
    total:0,
        calCust : function(min , max ){
            for(let i =0;i<hours.length;i++){
                this.coustomerNum.push(randomNum(min,max));
            }
            return this;
            },

        calcookie : function(){
            for(let x =0;x<hours.length;x++){
                let p = Math.floor(((this.coustomerNum[x])*(this.avg)));
                this.cookiesNum.push(p)   
                this.total=this.total+p;
            }
            return this;
            },
            fillData:function (){
                for(let x =0;x<hours.length;x++){
                    this.cookiesPerHour.push(`${hours[x]} : ${this.cookiesNum[x]} cookies`);
                }
                this.cookiesPerHour.push(`Total  :  ${this.total}`);
            },

        getAll : function(){
            this.fillData();
             return this.cookiesPerHour; 
            },
        
        render : function(){

            let divEl = document.getElementById('cookies1');
            let ulEl = document.createElement('ul');
            divEl.appendChild(ulEl);
            let liEl=document.createElement('li');
            liEl.textContent="StoreName : "+ this.storeName ;
            ulEl.appendChild(liEl);
            for(let i =0 ;i <=hours.length;i++){
                let liEl=document.createElement('li');
                liEl.textContent=this.cookiesPerHour[i];
            ulEl.appendChild(liEl);
            
        }
        
        }




    }

        
    console.log(Lima.calCust(Lima.min,Lima.max));
    console.log(Lima.calcookie());
    console.log(Lima.getAll())
    Lima.render();









    
    function randomNum(min , max){
        return Math.floor(Math.random() * (max - min + 1) + min);
        }