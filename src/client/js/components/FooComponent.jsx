import React from 'https://dev.jspm.io/react';

export default class FooComponent extends React.Component {
  constructor() {
    super();
 
    this.state = {
      foo: 'bar'
    }
  }
 
  render(props) {
    return <div>foo <a href="#">{this.state.foo}</a> component</div>
  }
}
 
