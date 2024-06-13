import Icon from "./Icon"
import clsx from "clsx"


// export default function Video(props){
    
//     return(
//             <article key={`menu${props.username}`} className="w-[400px] flex flex-col rounded overflow-hidden">
//                 <img src={props.video} alt="" className="w-full object-cover rounded-xl"/>
//                 <footer className="grid grid-cols-[10%,1fr,10%] bg-transparent w-full py-2">
//                     <img src={props.profilePic} alt="user" className="w-6 justify-self-center place-self-start" />
//                     <div className="flex flex-col">
//                         <h2 className="font-bold mb-1" >{props.title}</h2>
//                         <span>{props.username}</span>
//                         <p className="flex"><span className="mr-1">{props.visits}</span> de visitas * hace {props.time}</p>
//                     </div>
//                     <Icon />
//                 </footer>
//             </article>
//     )
// }

// export default function Video(props){

//     const {video, profilePic, title, username, visits, time} = props;

//     return(
//             <article key={`menu${username}`} className="w-[400px] flex flex-col rounded overflow-hidden">
//                 <img src={video} alt="" className="w-full object-cover rounded-xl"/>
//                 <footer className="grid grid-cols-[10%,1fr,10%] bg-transparent w-full py-2">
//                     <img src={profilePic} alt="user" className="w-6 justify-self-center place-self-start" />
//                     <div className="flex flex-col">
//                         <h2 className="font-bold mb-1" >{title}</h2>
//                         <span>{username}</span>
//                         <p className="flex"><span className="mr-1">{visits}</span> de visitas * hace {time}</p>
//                     </div>
//                     <Icon />
//                 </footer>
//             </article>
//     )
// }

export default function Video({video,  title, username, visits, time}){

    // const articleClassnames = 
    // "video-card" + channel === "Marques Brownlee" ? " special" : ""

    // let articleClassnames = ["video-card"]

    // if(channel == "Marques Brownlee"){
    //     articleClassnames.push('special')
    // }

    return(
        // <article className={}{articleClassnames.join}></article>
        <article 
            className={
                clsx('video-card w-[350px] flex flex-col rounded overflow-hidden ', { 
                    "border": username === "Marques Brownlee" }
                    )}>

             {/* <article className="w-[350px] flex flex-col rounded overflow-hidden"> */}
                <img src={`https://picsum.photos/id/${video}/400/200`} alt="" className="w-full object-cover rounded-xl"/>
                <footer className="grid grid-cols-[10%,1fr,10%] bg-transparent w-full py-2">
                    {/* {
                        channel && (
                            <img src={`https://api.dicebear.com/8.x/identicon/svg?seed=${username}`} alt="user" className="w-6 justify-self-center place-self-start rounded-full" />
                        )
                    }
                    {!channel && (<span>😵</span>)} */}
                    {
                        username ? (
                            <img src={`https://api.dicebear.com/8.x/identicon/svg?seed=${username}`} alt="user" className="w-6 justify-self-center place-self-start rounded-full" />
                        ) : (
                            <span>😵</span>
                        )
                    } 
                    <div className="flex flex-col">
                        <h2 className="font-bold mb-1" >{title}</h2>
                        <span>{username}</span>
                        <p className="flex"><span className="mr-1">{visits}</span> de visitas * hace {time}</p>
                    </div>
                    <Icon />
                </footer>
            </article>
    )
}