import "./TopRanking.scss";
import TopRanking from "./TopRanking";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function TopRankingArticle() {
    const { isDark } = useContext(ThemeContext);

    return (
        <ul className={"Top-user".concat(isDark ? " Top-ranking-dark" : "")}>
            <TopRanking userName="이규진" userId="leekyujin" gitRank="2" ordNumber="nd" commits={1404} imgSrc="https://avatars.githubusercontent.com/u/86875273?v=4"/>
            <TopRanking userName="김한울" userId="gimhanul" gitRank="1" ordNumber="th" commits={1222} imgSrc="https://avatars.githubusercontent.com/u/80656733?v=4"/>
            <TopRanking userName="진유림" userId="yulim2" gitRank="3" ordNumber="rd" commits={941} imgSrc="https://avatars.githubusercontent.com/u/80025122?v=4"/>
        </ul>
    );
}

export default TopRankingArticle;