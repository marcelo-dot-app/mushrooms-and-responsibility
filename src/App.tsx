import './App.css'
// @ts-ignore
import Core from './3D/core.js'
import Article from "./article/Article.tsx";


function App() {
  new Core(document.querySelector('canvas.webgl'));

  return (<Article/>);
}

export default App
