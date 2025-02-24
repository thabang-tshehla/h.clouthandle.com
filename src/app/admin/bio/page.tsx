export default function Bio(){
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" className="p-2 bg-gray-100"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Bio</label>
                <textarea
                    className="p-2 bg-gray-100"
                    name="" id="" placeholder="Bio" ></textarea>
            </div>
        </div>
    )
}