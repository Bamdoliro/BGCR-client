import RankingList from "./RankingList";
import "./ranking.scss"

function Ranking() {
    return (
        <div className="RankingContent">
            <ul className="RankingUl">
                <RankingList />
                <RankingList />
                <RankingList />
                <RankingList />
                <RankingList />
            </ul>
        </div>
    )
}

export default Ranking;