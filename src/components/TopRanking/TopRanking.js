import "./TopRanking.scss";

function TopRanking(props){
    return (
        <li id="Top1-user">
            <div className="user-info">
                <div className="profile">   
                    <img className="profile-img" src={props.imgSrc}/>
                        <span className="rank-index">
                            {props.gitRank}{props.ordNumber}
                        </span>
                    <div className="profile-info">
                        <div className="userId">{props.userId}</div>
                        <div className="props.userName">{props.userName}</div>
                        <span className="Commits">{props.commits} COMMIT</span>
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