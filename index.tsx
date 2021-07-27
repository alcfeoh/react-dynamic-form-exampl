import React, { Component } from 'react';
import { render } from 'react-dom';
import { Form } from './Form';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

function App(props: AppProps) {
  return (
    <div>
      <Form />
    </div>
  );
}

render(<App name="test" />, document.getElementById('root'));
