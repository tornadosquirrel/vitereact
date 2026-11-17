import "./App.css";
import ReflectiveCard from "./components/ReflectiveCard.jsx";
import FlipCard from "./components/FlipCard.jsx";

function App() {
  return (
    <FlipCard>
      <ReflectiveCard warp={0}>
        <div>Frog</div>
      </ReflectiveCard>
    </FlipCard>
  );
}

export default App;