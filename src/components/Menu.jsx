
export default function Menu(){
    // list rendering

    const menutItems = [
        { icon: '🏠', text: 'HOME' },
        { icon: '🩳', text: 'Shorts'},
        { icon: '⏰', text: 'Subscriptions'}
    ]
    return (
    <aside id='menu' className="col-start-1 col-end-2 row-start-2 row-end-3 ">{
            menutItems.map((item) => {
                return (
                    <div key={`menu-item-${item.text}`} className="p-[1rem] rounded-[20px] flex flex-row gap-1 items-center hover:bg-[#282828;] cursor-pointer">
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                    </div>
                )
            })
        }
    </aside>
    )
}