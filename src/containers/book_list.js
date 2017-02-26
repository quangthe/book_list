import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  _renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
            className="list-group-item"
            onClick={() => this.props.selectBook2(book)}>
          {book.title}
        </li>
      );
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this._renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned from here will show up as props inside of BookList
  return {
    books: state.books
  };
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all reducers
  // key will map to prop
  return bindActionCreators({selectBook2: selectBook}, dispatch);
}

// promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);