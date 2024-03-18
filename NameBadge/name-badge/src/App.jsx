import "./App.css";
import React, {useState} from "react";
import BadgeForm from "./BadgeForm";
import BadgeList from "./BadgeList";

function App() {
  const [badges, setBadges] = useState([]);

  function addBadge(badge) {
    setBadges([...badges, badge]);
  }
  return (
    <div className="App">
      <BadgeForm addBadge={addBadge} />
      <BadgeList badges={badges} />
    </div>
  );
}

export default App;
