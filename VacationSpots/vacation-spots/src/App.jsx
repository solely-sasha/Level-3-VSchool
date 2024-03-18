import "./App.css";
import data from "./data";
import Cards from "./components/Cards";

export default function App() {
  const cards = data.map((card) => {
    return <Cards key={card.id} card={card} />;
  });

  return (
    <div className="App">
      <h1>Vacation Spots</h1>

      <div className="cards-div">{cards}</div>
    </div>
  );
}
