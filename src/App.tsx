import './App.css'
// @ts-ignore
import Core from './3D/core.js'


function App() {
  new Core(document.querySelector('canvas.webgl'));

  return (
    <>
      <div className="w-full h-full">
      </div>
    </>
  )
}

export default App
