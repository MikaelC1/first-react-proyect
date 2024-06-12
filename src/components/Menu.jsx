
export default function Menu(){
    // list rendering

    const menutItems = [
        { icon: '🏠', text: 'HOME' },
        { icon: '🩳', text: 'Shorts'},
        { icon: '⏰', text: 'Subscriptions'}
    ]
    return (
    <aside id='menu'>{
            menutItems.map((item) => {
                return (
                    <div key={`menu-item-${item.text}`} className="menu-item">
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                    </div>
                )
            })
        }
    </aside>
    )
}