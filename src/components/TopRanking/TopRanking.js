import "./TopRanking.scss";

function TopRanking(props){
    return (
        <li id="Top-user">
            <div className="user-info">
                <div className="profile">
                    <div>
                        <img className="profile-img" src={props.imgSrc}/>
                        <span className="rank-index">
                            {props.gitRank}{props.ordNumber}
                        </span>
                    </div>
                    <div className="profile-info">
                        <div className="userId">{props.userId}</div>
                        <div className="userName">{props.userName}</div>
                        <div className="Commits">{props.commits} COMMIT</div>
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