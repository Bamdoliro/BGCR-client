import Header from "./components/Header/Header";
import TopRanking from "./components/TopRanking/TopRanking";
import RankingList from "./components/Ranking/RankingList";
import "./index.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <TopRanking userName="김한울" userId="gimhanul" gitRank="1" ordNumber="th" commits={1222}/>
      <RankingList />
    </div>
  );
}

export default App;
