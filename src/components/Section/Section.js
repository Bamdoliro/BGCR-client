import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import RankingList from "../Ranking/RankingList";
import TopRankingArticle from "../TopRanking/TopRankingArticle";
import RankingData from "../data/RankingData.json"

import "./section.scss"
import { useEffect, useState } from "react";

function Section() {
    const { isDark } = useContext(ThemeContext);
    const [rankingData, setRankingData] = useState([]);

    useEffect(() => {
        setRankingData(RankingData.row)
    }, [])

    return (
        <div className={"section-box".concat(isDark ? " section-dark" : "")}>
            <TopRankingArticle userName="김한울" userId="gimhanul" gitRank="1" ordNumber="th" commits={1222} />
            <div className="ranking-ul">
                {
                    rankingData.map(function(gitData, index) {
                        if(index <= 2) {
                            return (
                                <RankingList
                                    key={index}
                                    gitRanking={index+4}
                                    userName={gitData.USER_NAME}
                                    gitId={gitData.GIT_ID}
                                    numberOfCommit={gitData.COMMIT}
                                    profileImg={gitData.PROFILE_IMG}
                                />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Section