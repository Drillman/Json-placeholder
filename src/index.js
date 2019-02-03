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
  doQuery(link){
    return new Promise((resolve, reject)=>{
      fetch(link)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err=> reject(err))
    })
  }
  Users(userId){
    let link ="https://jsonplaceholder.typicode.com/users"
    const possibleArgs = ['comments','posts','albums', 'todos']
    if(this.verifyValidInput(userId)){link+= '/'+userId}
    return this.doQuery(link)
  }
  Comments(commentId){
    let link ="https://jsonplaceholder.typicode.com/comments/4"
    if(this.verifyValidInput(commentId)){link+= '/'+commentId}
    return this.doQuery(link)
  }
  Albums(albumId){
    let link ="https://jsonplaceholder.typicode.com/albums"
    if(this.verifyValidInput(albumId)){link+= '/'+albumId}
    return this.doQuery(link)
  }
  Photos(photoId){
    let link ="https://jsonplaceholder.typicode.com/photos"
    if(this.verifyValidInput(photoId)){link+= '/'+photoId}
    return this.doQuery(link)
  }
  Todos(todoId){
    let link ="https://jsonplaceholder.typicode.com/todos"
    if(this.verifyValidInput(todoId)){link+= '/'+todoId}
    return this.doQuery(link)
  }
  Posts(postId){
    let link ="https://jsonplaceholder.typicode.com/users"
    if(this.verifyValidInput(postId)){link+= '/'+postId}
    return this.doQuery(link)
  }
}
