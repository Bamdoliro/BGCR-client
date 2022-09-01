import TopRanking from "../TopRanking/TopRanking";
import RankingList from "../Ranking/RankingList";

import "./section.scss"

function Section() {
    return (
        <div className="section-box">
            <TopRanking userName="김한울" userId="gimhanul" gitRank="1" ordNumber="th" commits={1222} />
            <div className="ranking-ul">
                <RankingList
                    gitRanking={1}
                    userName={"김석진"}
                    gitId={"SEOKKAMONI"}
                    numberOfCommit={294}
                    profileImg={"https://avatars.githubusercontent.com/u/102217654?v=4"}
                />
                <RankingList
                    gitRanking={1}
                    userName={"김석진"}
                    gitId={"SEOKKAMONI"}
                    numberOfCommit={294}
                    profileImg={"https://avatars.githubusercontent.com/u/102217654?v=4"}
                />
                <RankingList
                    gitRanking={1}
                    userName={"김석진"}
                    gitId={"SEOKKAMONI"}
                    numberOfCommit={294}
                    profileImg={"https://avatars.githubusercontent.com/u/102217654?v=4"}
                />
                <RankingList
                    gitRanking={1}
                    userName={"김석진"}
                    gitId={"SEOKKAMONI"}
                    numberOfCommit={294}
                    profileImg={"https://avatars.githubusercontent.com/u/102217654?v=4"}
                />
            </div>
        </div>
    )
}

export default Section