class ProductList extends React.Component {
  render() {
    const product = Seed.products[0];
    return (
      <div className="ui unstackable items">
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          vote={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
        />
      </div>
    );
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
            <a>Fort Night</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src="images/avatars/daniel.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render([WHAT], [WHERE])
ReactDOM.render(<ProductList />, document.getElementById("content"));
ReactDOM.render(<Product />, Document.getElementById("content"));
