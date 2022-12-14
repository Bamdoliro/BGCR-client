import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./rankingList.scss";

function RankingList( {gitRanking, userName, gitId, numberOfCommit, profileImg} ) {
    const { isDark } = useContext(ThemeContext);

    return (
        <li className={"ranking-list".concat(isDark ? " ranking-dark" : "")}>
            <div className="front-info ">
                <div className="rank-info">
                    <span className="rank-number">
                        {gitRanking}
                    </span>
                </div>
                <div className="profile">
                    <img className="profile_img" src={profileImg} alt="profile" />
                    <div className="info">
                        <div className="git-id"><a href={`https://github.com/${gitId}`} target="_blank">{gitId}</a></div>
                        <div className="user-name">{userName}</div>
                    </div>
                </div>
            </div>
            <div className="commit-info">
                <span className="commit-number">
                    <span>{numberOfCommit} </span>COMMIT
                </span>
            </div>
        </li>
    )
}

export default RankingList;