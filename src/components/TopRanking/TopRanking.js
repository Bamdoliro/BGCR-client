import "./TopRanking.scss";

function TopRanking({imgSrc, gitRank, ordNumber, userId, userName, commits}){
    return (
        <li id="Top-user">
            <div className="user-info">
                <div className="profile">
                    <div>
                        <img className="profile-img" src={imgSrc}/>
                        <span className="rank-index">
                            {gitRank}{ordNumber}
                        </span>
                    </div>
                    <div className="profile-info">
                        <div className="userId"><a href={`https://github.com/${userId}`} target="_blank">{userId}</a></div>
                        <div className="userName">{userName}</div>
                        <div className="Commits">{commits} COMMIT</div>
                    </div>
                </div>
            </div>
        </li>
    );
}

TopRanking.defaultProps = {
    userName : "이름이 없습니다."
};

export default TopRanking;