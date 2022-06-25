import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DataWrapper } from "../components/StateProvider";
import reducer, { initialState } from "../components/reducer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
	<DataWrapper reducer = {reducer} initialState = {initialState}>
		<Component {...pageProps} />
	</DataWrapper>
  )
}

export default MyApp
