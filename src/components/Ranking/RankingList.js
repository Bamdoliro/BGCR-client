import "./rankingList.scss";

function RankingList() {
    return (
        <li className="RankingList">
            <div className="FrontInfo">
                <div className="RankInfo">
                    <span className="RankNumber">
                        4
                    </span>
                </div>
                <div className="Profile">
                    <img className="profileImg" src="https://avatars.githubusercontent.com/u/102217654?v=4" />
                    <div className="Info">
                        <div className="Git_Id">SEOKKAMONI</div>
                        <div className="UserName">김석진</div>
                    </div>
                </div>
            </div>
            <div className="CommitInfo">
                <span className="CommitNumber">
                    <span>144 </span>COMMIT
                </span>
            </div>
        </li>
    )
}

export default RankingList;