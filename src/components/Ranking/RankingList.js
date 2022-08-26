import "./rankingList.scss";

function RankingList( {gitRanking, userName, gitId, numberOfCommit} ) {
    return (
        <li className="ranking-list">
            <div className="front-info ">
                <div className="rank-info">
                    <span className="rank-number">
                        {gitRanking}
                    </span>
                </div>
                <div className="profile">
                    <img className="profile_img" src="https://avatars.githubusercontent.com/u/102217654?v=4" />
                    <div className="info">
                        <div className="git-id">{gitId}</div>
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