import React, {Component} from 'react';

class ProducgtRow extends Component {
  render() {
    let name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{ color:'red'}}>
        {this.props.product.name}
      </span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }  
}

class ProductCategoryRow extends Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>
  }
}

class ProductTable extends Component {
  render() {
    let rows = [];
    let lastCategory = null;
    this.props.products.forEach((product) => {
      if(product.name.indexOf(this.props.filterText) === -1 || (this.props.inStockedOnly && !product.stocked)){
        return;
      }
      if(product.category !== lastCategory){
        rows.push(<ProductCategoryRow key={product.category} category={product.category}/>)
        
      }
      rows.push(<ProducgtRow product={product} key={product.name}/>);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterInputChange = this.handleFilterInputChange.bind(this);
    this.handleStockInputChange = this.handleStockInputChange.bind(this);
  }

  handleFilterInputChange(e) {
    this.props.onFilterInput(e.target.value);
  }

  handleStockInputChange(e){
    this.props.onStockInput(e.target.checked);
  }

  render() {
    return (
      <from>
        <input type="test" placeholder="Search..." onChange={this.handleFilterInputChange} value={this.props.filterText}/>
        <p>
          <input type="checkbox" checked={this.props.inStockedOnly} onChange={this.handleStockInputChange}/>
          {' '}
          Only show products in stock
        </p>
      </from>
    );
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockedOnly: false
    }
    this.handleFilterInput = this.handleFilterInput.bind(this);
    this.handleStockInput = this.handleStockInput.bind(this);
  }

  handleFilterInput(filterText) {
    this.setState({filterText});
  }

  handleStockInput(inStockedOnly){
    this.setState({inStockedOnly});
  }

  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockedOnly={this.state.inStockedOnly}
          onFilterInput={this.handleFilterInput}
          onStockInput={this.handleStockInput}/>
        <ProductTable products={PRODUCTS}
          filterText={this.state.filterText}
          inStockedOnly={this.state.inStockedOnly}/>
      </div>
    );
  }
}

let PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default FilterableProductTable;