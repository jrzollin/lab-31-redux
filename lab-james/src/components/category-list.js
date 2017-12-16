import React from 'react';

import CategoryItem from './category-item.js';

class CategoryList extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {
          this.props.categories.map( (category, i) => (
            <CategoryItem key={category.id} category={category} />
          ))
        }
      </div>
    )
  }
}

export default CategoryList;