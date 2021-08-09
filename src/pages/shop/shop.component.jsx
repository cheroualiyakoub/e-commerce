import React from 'react'

import SHOP_DATA from './2.2 shop.data';

import ColleciionPreview from '../../components/collection-preview/collection-preview.components';


class ShopPage extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        collections : SHOP_DATA,
    }
}

render(){
    const {collections} = this.state;
    return (
        <div className='shop-page'> 
           {
             collections.map(({id, ...otherProps} )=> (
              
                    <ColleciionPreview key={id} {...otherProps}/>

               ))
           } 
        </div>
    )
}
    
}

export default ShopPage;