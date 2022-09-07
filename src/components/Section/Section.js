import RankingList from "../Ranking/RankingList";
import TopRankingArticle from "../TopRanking/TopRankingArticle";
import RankingData from "../data/RankingData.json"

import "./section.scss"
import { useEffect } from "react";

function Section() {
    useEffect(() => {
        console.log(RankingData)
    }, [])

    return (
        <div className="section-box">
            <TopRankingArticle userName="김한울" userId="gimhanul" gitRank="1" ordNumber="th" commits={1222} />
            <div className="ranking-ul">
                <RankingList
                    gitRanking={4}
                    userName={"김석진"}
                    gitId={"SEOKKAMONI"}
                    numberOfCommit={294}
                    profileImg={"https://avatars.githubusercontent.com/u/102217654?v=4"}
                />
                <RankingList
                    gitRanking={5}
                    userName={"김석진"}
                    gitId={"SEOKKAMONI"}
                    numberOfCommit={294}
                    profileImg={"https://avatars.githubusercontent.com/u/102217654?v=4"}
                />
                <RankingList
                    gitRanking={6}
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