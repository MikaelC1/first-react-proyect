import YouTubeLogo from "./YoutubeLogo";
export default function Navbar() {
    return (
        <nav id='nav'> 
            <div id="logo">
                <YouTubeLogo height="1.8rem" width="3rem" />
                <span>YouTube</span>
            </div>
            <div id="search">
                <input type="text" placeholder="Search" />
            </div>
            <div id="user">
                <img src="https://api.dicebear.com/8.x/identicon/svg?seed=Charlie" alt="user" />
            </div>
        </nav>
        );
}