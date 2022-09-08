import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import RankingList from "../Ranking/RankingList";
import TopRankingArticle from "../TopRanking/TopRankingArticle";

import "./section.scss"

function Section() {
    const { isDark } = useContext(ThemeContext);

    return (
        <div className={"section-box".concat(isDark ? " section-dark" : "")}>
            <TopRankingArticle userName="김한울" userId="gimhanul" gitRank="1" ordNumber="th" commits={1222} />
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
            </div>
        </div>
    )
}

export default Section