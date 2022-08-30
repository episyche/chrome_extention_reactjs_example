import "./App.css";

function App() {
  return (

    <div className="App">
      {chrome.tabs.update({ url: "https://www.episyche.com/" })}
    </div>
  
  );
}

export default App;
