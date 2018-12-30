class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
        Hello World! I'm just a no-good component!
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src="/images/products/image-aqua.png"></img>
        </div>
        <div className="middle aligned content">
          <div className="description">
            <a>Fort Night</a>
          </div>
        </div>
      </div>
    )

// ReactDOM.render([WHAT], [WHERE])
ReactDOM.render(<ProductList />, document.getElementById("content"));
ReactDOM.render(<Product />, Document.getElementById("content"));
