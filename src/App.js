import RankingList from "./components/Ranking/RankingList";
import "./index.scss"

function App() {
  return (
    <div className="App">
      <RankingList 
        ranking={4}
        user_name={"김석진"}
        git_id={"SEOKKAMONI"}
        commit={144}
      />
    </div>
  );
}

export default App;
