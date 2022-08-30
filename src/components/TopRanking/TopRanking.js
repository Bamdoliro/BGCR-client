import "./TopRanking.scss";

function TopRanking({userName, userId, gitRank, ordNumber, commits}) {
    return (
        <ul classname="Top-user">

            <li id="Top1-user">
                <div classname="user-info">
                    <div classname="profile">   
<<<<<<< HEAD
                        <img id="profile-img" src="https://avatars.githubusercontent.com/u/80656733?v=4"/>
                            <span id="rank-index">
                                {gitRank}{ordNumber}
                            </span>
                        <div classname="profile-info">
                            <div id="userId">{userId}</div>
                            <div id="userName">{userName}</div>
                            <span id="commits">{commits} COMMIT</span>
=======
                        <img classname="profile-img" src="https://avatars.githubusercontent.com/u/80656733?v=4"/>
                            <span classname="rank-index">
                                {gitRank}{ordNumber}
                            </span>
                        <div classname="profile-info">
                            <div classname="userId">{userId}</div>
                            <div classname="userName">{userName}</div>
                            <span classname="commits">{commits} </span>COMMIT
>>>>>>> 2bdb25c68df7ab212291e6079925440565c24859
                        </div>
                    </div>
                </div>
            </li>

            <li id="Top2-user">
                <div classname="user-info">
                    <div classname="profile">   
<<<<<<< HEAD
                        <img id="profile-img" src="https://avatars.githubusercontent.com/u/80656733?v=4"/>
                            <span id="rank-index">
                                {gitRank}{ordNumber}
                            </span>
                        <div classname="profile-info">
                            <div id="userId">{userId}</div>
                            <div id="userName">{userName}</div>
                            <span id="commits">{commits} COMMIT</span>
=======
                        <img classname="profile-img" src="https://avatars.githubusercontent.com/u/80656733?v=4"/>
                            <span classname="rank-index">
                                {gitRank}{ordNumber}
                            </span>
                        <div classname="profile-info">
                            <div classname="userId">{userId}</div>
                            <div classname="userName">{userName}</div>
                            <span classname="commits">{commits} </span>COMMIT
>>>>>>> 2bdb25c68df7ab212291e6079925440565c24859
                        </div>
                    </div>
                </div>
            </li>

            <li id="Top3-user">
                <div classname="user-info">
                    <div classname="profile">   
<<<<<<< HEAD
                        <img id="profile-img" src="https://avatars.githubusercontent.com/u/80656733?v=4"/>
                            <span id="rank-index">
                                {gitRank}{ordNumber}
                            </span>
                        <div classname="profile-info">
                            <div id="userId">{userId}</div>
                            <div id="userName">{userName}</div>
                            <span id="commits">{commits} COMMIT</span>
=======
                        <img classname="profile-img" src="https://avatars.githubusercontent.com/u/80656733?v=4"/>
                            <span classname="rank-index">
                                {gitRank}{ordNumber}
                            </span>
                        <div classname="profile-info">
                            <div classname="userId">{userId}</div>
                            <div classname="userName">{userName}</div>
                            <span classname="commits">{commits} </span>COMMIT
>>>>>>> 2bdb25c68df7ab212291e6079925440565c24859
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    );
}

export default TopRanking;