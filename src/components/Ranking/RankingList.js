import "./rankingList.scss";

function RankingList( {ranking, user_name, git_id, commit} ) {
    return (
        <li className="ranking-list">
            <div className="front-info ">
                <div className="rank-info">
                    <span className="rank-number">
                        {ranking}
                    </span>
                </div>
                <div className="profile">
                    <img className="profile_img" src="https://avatars.githubusercontent.com/u/102217654?v=4" />
                    <div className="info">
                        <div className="git-id">{git_id}</div>
                        <div className="user-name">{user_name}</div>
                    </div>
                </div>
            </div>
            <div className="commit_info">
                <span className="commit-number">
                    <span>{commit} </span>COMMIT
                </span>
            </div>
        </li>
    )
}

export default RankingList;