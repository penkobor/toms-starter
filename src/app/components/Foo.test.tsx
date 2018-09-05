import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Foo } from './Foo'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Foo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
