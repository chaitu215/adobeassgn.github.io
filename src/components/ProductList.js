import React, { Component } from 'react';
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';

export default class ProductList extends Component {
    render() {
        return (
   
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                <ButtonContainer onClick={this.state = true}>
                    ASC
                </ButtonContainer> 
                    <Title name="our" title="products"/>
                       <div className="row"  >       
                                  
                         {/* {this.props.cont = true} */}
                         <ProductConsumer>         
                         
                               {value=>{
                                //value.products.sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? -1 : 0)); 
                                //value.products.sort((a,b) => (a.price > b.price) ? 0 : ((b.price > a.price) ? -1 : 0));
                                return value.products.map(product =>{
                                    console.log("productId",product);
                                   return <Product key={product.id} product={product} />;
                               });
                             }}
                         </ProductConsumer>
                       </div>
                       </div> 
                    </div>
            </React.Fragment>
        );
    }
}
