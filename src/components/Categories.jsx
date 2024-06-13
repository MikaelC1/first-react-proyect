
export default function Categories(){
    const categories = [
        "All",
        "Music",
        "Gaming",
        "Code",
        "Programming",
        "Life Style",
        "Sports"
    ]
    return (
        <div id="categories-list" className="flex flex-row gap-[1rem]">
            {
                categories.map((category) => {
                    return (
                        <span key={`category-${category}`} className="category p-[0.5rem] rounded-[10px] bg-[#282828] bold font-[14px] hover:bg-[#3F3F3F] cursor-pointer transition duration-200">
                            {category}
                        </span>
                    )
                })
            }
        </div>
    )
}