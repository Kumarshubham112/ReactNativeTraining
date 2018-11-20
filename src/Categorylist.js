import React, { Component } from 'react'
import { View } from 'react-native'
import axios from 'axios'
import CategoryDetail from './CategoryDetail'

class CategoryList extends Component {
  state={categories:[]};
  componentWillMount(){
    axios.get("http://dev.justmyroots.com/api/jmr/getCategories/1")
    .then(response=> this.setState({categories:response.data}));
  }

  renderCategories(){
   return this.state.categories.map(categories=>
   <CategoryDetail key={categories.id} data={categories} />
    )
  }

  render() {
    console.log(this.state)
    return (
      <View>
        {this.renderCategories()}
      </View>
    )
  }
}

export default CategoryList;