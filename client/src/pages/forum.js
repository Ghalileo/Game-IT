import React from "react"

function Forum() {
    return (
        <h1>Forum</h1>

        /*
Forum - stateful component (similar to Dropdown)
state will have two key/value pairs:
(1) forums: []
(2) isTextBoxOpen: false

addComment => simiar to onClick={this.handlePosts}
 -> open up text box / form
 -> onClick -> setState isTextBoxOpen: true
 -> after writing , submit (handleSubmit)
 -> after handleSubmit, closeTextBox
 -> isTextBoxOpen: true

 getAllThreads
 -> componentDidMount() {
   handleAPIrequest here
 } OR use React Hooks (handleFormSubmit in form.js for example)

 -> get all the threads
 -> setState forums: dataFetched


 render() {

  //example of JS destructuring
  const {isTextBoxOpen, forums} = this.state

  return (
    <div>
    Forum Page
    <button> Add Comment</button>
  {
  isTextBoxOpen === true &&
    <form>
        //look up how ot create textbook

    </form>
  }

  //example of JS arrow functions
  {
    forums.map( forum => {
      <div>
        <p>{forum.username}</p>
         <p>{forum.topicName}</p>

      <div>
    } )
  }



    </div>
  )
 }
*/

    )
}

export default Forum;