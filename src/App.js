import "./index.scss"
import TopRankingArticle from "./components/TopRanking/TopRankingArticle";
import Section from "./components/Section/Section"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <TopRankingArticle />
      <Header />
      <Section />
    </div>
  );
}

export default App;
