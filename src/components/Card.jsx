import Icon from "./Icon"
export default function Card(){
    const info = [
        {    
            video: "https://picsum.photos/400/200", 
            profilePic: "https://api.dicebear.com/8.x/identicon/svg?seed=Charlie", 
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            username: 'midudev', 
            visits: '32 k', 
            time: '3 dias' },
        { 
            video: "https://picsum.photos/400/200", 
            profilePic: "https://api.dicebear.com/8.x/identicon/svg?seed=Charlie", 
            title: 'Lorem ipsum dolor sit amet, consectetur.',
            username: 'mikaelc', 
            visits: '200 k', 
            time: '1 dia'
        },
        { 
            video: "https://picsum.photos/400/200", 
            profilePic: "https://api.dicebear.com/8.x/identicon/svg?seed=Charlie", 
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicin.',
            username: 'holamundo', 
            visits: '10 k',
            time: '2 dias'
        }
    ]
    return(
        <section className="flex gap-10 flex-wrap pt-5">
            {info.map((item) => {
                return( 
                    <div key={`menu-item-${item.username}`} className="w-[400px] flex flex-col rounded overflow-hidden">
                    <img src={item.video} alt="" />
                    <div className="grid grid-cols-[10%,1fr,10%] bg-transparent w-full py-2">
                        <img src={item.profilePic} alt="user" className="w-6 justify-self-center place-self-start" />
                        <div className="flex flex-col">
                            <h2 className="font-bold mb-1" >{item.title}</h2>
                            <span>{item.username}</span>
                            <p className="flex"><span className="mr-1">{item.visits}</span> de visitas * hace {item.time}</p>
                        </div>
                        <Icon />
                    </div>
                </div>
                )
            })     
            }
        </section>
    )
}