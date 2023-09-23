import { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <label className={css.filter}>
        Find contacts by name
        <input type="text" name="filter" onChange={this.props.handleChange} />
      </label>
    );
  }
}

export default Filter;
