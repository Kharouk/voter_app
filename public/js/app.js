class ProductList extends React.Component {
  render() {
    const productComponents = Seed.products.map((product, index) => (
      <Product
        key={`${product} - ${index}`}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
      />
    ));

    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a>
              <i className="large caret up icon" />
              {this.props.votes}
            </a>
          </div>
          <div className="description">
            <a>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              className="ui avatar image"
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render([WHAT], [WHERE])
ReactDOM.render(<ProductList />, document.getElementById("content"));
