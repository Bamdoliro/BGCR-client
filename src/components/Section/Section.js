import Header from "../Header/Header";
import TopRanking from "../TopRanking/TopRanking";
import RankingList from "../Ranking/RankingList";

import "./section.scss"

function Section() {
    return (
        <div>
            <Header />
            <TopRanking userName="김한울" userId="gimhanul" gitRank="1" ordNumber="th" commits={1222} />
            <RankingList
                gitRanking={1}
                userName={"김석진"}
                gitId={"SEOKKAMONI"}
                numberOfCommit={294}
                profileImg={"https://avatars.githubusercontent.com/u/102217654?v=4"}
            />
        </div>
    )
}

export default Section