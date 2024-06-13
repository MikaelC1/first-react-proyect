import Categories from "./Categories"
import Video from "./Video"

export default function Content(){
    const videos = [
        {    
            video: "120",  
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            username: 'Marques Brownlee', 
            visits: '32 k', 
            time: '3 dias' },
        { 
            video: "125",  
            title: 'Lorem ipsum dolor sit amet, consectetur.',
            username: 'mikaelc', 
            visits: '200 k', 
            time: '1 dia'
        },
        { 
            video: "130",  
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicin.',
            username: 'holamundo', 
            visits: '10 k',
            time: '2 dias'
        },
        { 
            video: "142",  
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicin.',
            username: 'holamundo', 
            visits: '10 k',
            time: '2 dias'
        }
    ]

    return (
    <section id='section col-start-2 col-end-3 row-start-2 row-end-3'>
        <Categories />
        <section className="grid grid-cols-4 gap-[1rem] pt-5">
            {
                videos.map((video) => {
                    return (
                        <Video 
                        key={`video-${video.title}`}
                        video={video.video}
                        title={video.title}
                        username={video.username}
                        visits={video.visits}
                        time={video.time}/>
                    )    
                })
            }
        </section>
    </section>)

}