import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let Book = ({title, image, author}) => {
  return (
    // <h1>jfed{console.log(props.props.title)}</h1>
    <div className={"Book"}>
      <h1 className={"Title"}>{title}</h1>
      <img className={"Image"} src={image}/>
      <p className={"Author"}>{author}</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <div className={"BookList"}>
      <Book title="Stuff" image="https://images-na.ssl-images-amazon.com/images/I/51Cj8es7jmL._SX329_BO1,204,203,200_.jpg" author="Stuff"/>
      <Book title="Stuff" image="https://images-na.ssl-images-amazon.com/images/I/51Cj8es7jmL._SX329_BO1,204,203,200_.jpg" author="Stuff"/>
      <Book title="Stuff" image="https://images-na.ssl-images-amazon.com/images/I/51Cj8es7jmL._SX329_BO1,204,203,200_.jpg" author="Stuff"/>
      <Book title="Stuff" image="https://images-na.ssl-images-amazon.com/images/I/51Cj8es7jmL._SX329_BO1,204,203,200_.jpg" author="Stuff"/>
      <Book title="Stuff" image="https://images-na.ssl-images-amazon.com/images/I/51Cj8es7jmL._SX329_BO1,204,203,200_.jpg" author="Stuff"/>
      <Book title="Stuff" image="https://images-na.ssl-images-amazon.com/images/I/51Cj8es7jmL._SX329_BO1,204,203,200_.jpg" author="Stuff"/>
      <Book title="Stuff" image="https://images-na.ssl-images-amazon.com/images/I/51Cj8es7jmL._SX329_BO1,204,203,200_.jpg" author="Stuff"/>
      <Book title="Stuff" image="https://images-na.ssl-images-amazon.com/images/I/51Cj8es7jmL._SX329_BO1,204,203,200_.jpg" author="Stuff"/>
      <Book title="Stuff" image="https://images-na.ssl-images-amazon.com/images/I/51Cj8es7jmL._SX329_BO1,204,203,200_.jpg" author="Stuff"/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);