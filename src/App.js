import TopRanking from "./components/TopRanking/TopRanking";
import RankingList from "./components/Ranking/RankingList";
import "./index.scss"

function App() {
  return (
    <div className="App">
      <TopRanking userName="김한울" userId="gimhanul" gitRank="1" ordNumber="th" commits={1222}/>
    </div>
  );
}

export default App;
