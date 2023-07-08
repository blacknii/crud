import "./App.css";

const DUMMY_DATA = {
  "-NZkqrFwF2Fxa7Gn10GB": { count: "725", name: "Google" },
  "-NZkr28GUL5lpft2uOcX": { count: "225", name: "Facebook" },
  "-NZkr54Oo6LvOMlviL5H": { count: "15", name: "Instagram" },
  "-NZkumvK0uwreJhCGGTB": { count: "30", name: "Twitter" },
  "-NZkurMjazqOcTZVEGqz": { count: "45", name: "LinkedIn" },
};

const transformedArray = Object.entries(DUMMY_DATA).map(([key, value]) => {
  return {
    key,
    count: value.count,
    name: value.name,
  };
});

console.log(transformedArray);

function App() {
  return (
    <>
      <p>test</p>
    </>
  );
}

export default App;
