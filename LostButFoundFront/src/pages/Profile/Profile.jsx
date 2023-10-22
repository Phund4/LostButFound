import '../../styles/profile/profile.sass'

function Profile() {
    return <>
        <div className="profile-container">
            <div className="profile-leftbox">
                <nav>
                    <a id="profile-profile" className="active"><i className="profile-fa profile-fa-user"></i></a>
                    <a id="profile-payment"><i className="profile-fa profile-fa-credit-card"></i></a>
                    <a id="profile-subscription"><i className="profile-fa profile-fa-tv"></i></a>
                    <a id="profile-privacy"><i className="profile-fa profile-fa-tasks"></i></a>
                    <a id="profile-settings"><i className="profile-fa profile-fa-cog"></i></a>
                </nav>
            </div>
            <div className="profile-rightbox">
                <div className="profile-profile">
                    <h1>Personal Info</h1>
                    <ul>
                        <li>
                            <div className="profile-block">
                                <p>Julie Park <button className="profile-btn">update</button></p>
                                <h2>Full Name</h2>
                            </div>
                        </li>
                        <li>
                            <div className="profile-block">
                                <p>July 21</p>
                                <h2>Birthday</h2>
                            </div>
                        </li>
                        <li>
                            <div className="profile-block">
                                <p>Female</p>
                                <h2>Gender</h2>
                            </div>
                        </li>
                        <li>
                            <div className="profile-block">
                                <p>example@example.com <button className="profile-btn">update</button></p>
                                <h2>Email</h2>
                            </div>
                        </li>
                        <li>
                            <div className="profile-block">
                                <p>••••••• <button className="profile-btn">Change</button></p>
                                <h2>Password </h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Profile;