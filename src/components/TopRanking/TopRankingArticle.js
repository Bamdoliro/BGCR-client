import "./TopRanking.scss";
import TopRanking from "./TopRanking";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TabContext } from "../../context/TabContext";

function TopRankingArticle() {
    const { isDark } = useContext(ThemeContext);
    const { radioValue } = useContext(TabContext);

    // 예시 데이터 백엔드 오면 싹다 갈거임
    if(radioValue === "ALL" || radioValue === "GRADE_TWO") {
        return (
            <ul className={"Top-user".concat(isDark ? " Top-ranking-dark" : "")}>
                <TopRanking userName="이규진" userId="leekyujin" gitRank="2" ordNumber="nd" commits={1404} imgSrc="https://avatars.githubusercontent.com/u/86875273?v=4"/>
                <TopRanking userName="김한울" userId="gimhanul" gitRank="1" ordNumber="th" commits={1222} imgSrc="https://avatars.githubusercontent.com/u/80656733?v=4"/>
                <TopRanking userName="진유림" userId="yulim2" gitRank="3" ordNumber="rd" commits={941} imgSrc="https://avatars.githubusercontent.com/u/80025122?v=4"/>
            </ul>
        )
    }
    else if(radioValue === "GRADE_ONE") {
        return (
            <ul className={"Top-user".concat(isDark ? " Top-ranking-dark" : "")}>
                <TopRanking userName="김석진" userId="SEOKKAMONI" gitRank="2" ordNumber="rd" commits={331} imgSrc="https://avatars.githubusercontent.com/u/102217654?v=4"/>
                <TopRanking userName="이명재" userId="arkk200" gitRank="1" ordNumber="th" commits={485} imgSrc="https://avatars.githubusercontent.com/u/102217839?v=4"/>
                <TopRanking userName="원설아" userId="seola1ne" gitRank="3" ordNumber="rd" commits={204} imgSrc="https://avatars.githubusercontent.com/u/89336471?v=4"/>
            </ul>
        )
    }
}

export default TopRankingArticle;