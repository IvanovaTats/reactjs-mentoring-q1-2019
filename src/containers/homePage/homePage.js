import React from 'react';

import { Redirect } from "react-router-dom";

import SearchField from '../../components/search';
import SearchButtons from '../../components/searchButtons';
import Error from '../errorPages/somethingWentWrong'

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: '',
      filter: 'title',
      redirect: false
    };
  }

  static getDerivedStateFromError(e) {
    this.setState({
      hasError: true,
      error: e,
    });
  }

  handleFilterChange({ filt }) {
    if (this.state.filter !== filt) {
      this.setState({
        filter: filt
      });
    }
  };

  setRedirect(props) {
    this.setState({
      redirect: props
    })
  }

  renderRedirect() {
    if (this.state.redirect) {
      this.setRedirect(false);
      return <Redirect to='/search' />
    }
  };

  render() {
    if (this.state.hasError) {
      return <Error e={this.state.error} />
    }
    return (
      <>
        {this.renderRedirect()}
        <form className="main-menu-form" >
          <SearchField />
          <SearchButtons
            onSubmit={() => this.setRedirect(true)}
            onFilterChangeToTitle={() => this.handleFilterChange('title')}
            onFilterChangeToGenre={() => this.handleFilterChange('genre')}
          />
        </form>
      </ >
    );
  }
}

export default HomePage;
