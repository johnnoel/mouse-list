import ReactDOMServer from 'react-dom/server';
import App from './components/App';

const a = ReactDOMServer.renderToString(<App />);
console.log(a);