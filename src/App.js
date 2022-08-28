import './App.css';

function App() {
  return (
   <>
      <h1>Hello World</h1>
      <p>Message: {process.env.REACT_APP_MESSAGE}</p>
   </>
  );
}

export default App;
