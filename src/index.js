import "isomorphic-fetch"
import { isNull } from "util";
export class JsonPlaceholder{
  constructor(){}
  verifyValidInput(input){
    if(typeof input == "string"){
      return /^[0-9]{1,4}$/g.test(input)
    }else if(typeof input == "number"){
      return (input >= 0 && input <= 5000)
    }else{
      return false;
    }
  }
  Users(userId){
    let link ="https://jsonplaceholder.typicode.com/users"
    if(this.verifyValidInput(userId)){link+= '/'+userId}
    return new Promise((resolve, reject)=>{
      fetch(link)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err=> reject(err))
    })
  }
}
