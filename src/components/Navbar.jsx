import YouTubeLogo from "./YoutubeLogo";
export default function Navbar() {
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3 w-full"> 
            <div className="flex flex-row items-center gap-[0.3rem] pl=[1rem]">
                <YouTubeLogo height="1.8rem" width="3rem" />
                <span>YouTube</span>
            </div>
            <div className="grid items-center">
                <input type="text" placeholder="Search" className="w-[90%] py-[0.5rem] px-[1rem] rounded bg-transparent border"/>
            </div>
            <div id="user" className="flex items-center content-end pr-[1rem]">
                <img src="https://api.dicebear.com/8.x/identicon/svg?seed=Charlie" alt="user" className="w-[1rem] h-auto rounded-full"/>
            </div>
        </nav>
        );
}