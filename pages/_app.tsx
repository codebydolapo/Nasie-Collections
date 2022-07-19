import "../styles/globals.css";
import type { AppProps } from "next/app";
import {createStore} from 'redux'
import allReducers from '../components/reducers/reducers'
import {Provider} from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {

  const store = createStore(allReducers)
  return (
    <Provider store = {store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
