import React, {Component} from 'react'
import {connect } from 'react-redux'
// import {fetchCategories, setSorting, setCommentSorting} from '../actions'
// import {Link} from 'react-router-dom'
// import '../styles/app.css'

class Category extends Component {

  render(){
    return [
      <p key='1'>Home</p>,
      <p key='2'>This is the Category page</p>
    ]
  }
 }



const mapStateToProps = state => ({
  posts: state.getPosts
})

export default connect(mapStateToProps)(Category)