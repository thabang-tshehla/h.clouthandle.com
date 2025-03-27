import { useAppContext } from "@/contexts/AppContext"
import AddLabel from "./AddLabel"
import { useState } from "react"


const AdminLabel = ({label}: any) => {
    
    return(
        <div className="flex bg-gray-200 rounded-full py-1 px-4 items-center gap-2">
            <span className="text-sm text-gray-500">{label.name}</span>
            <div>&times;</div>
        </div>
    )
}

const AdminLabels = () => {

    const {user, setUser} = useAppContext()
    
    const [isAddLabel, setIsAddLabel ] = useState<boolean>(false)
    const labels = user?.labels
    
    if(labels?.length && labels?.length <= 0){
        return <div></div>
    }

    return (

        <div>
            <div className="flex gap-2 items-center">
                {labels?.map(label => (<AdminLabel key={label.name} label={label}/>))}
                <button
                    onClick={() => setIsAddLabel(true)}
                    className="bg-gray-200 flex items-center justify-center h-7 w-7 rounded-full">+</button>
            
            
            </div>
            {isAddLabel &&  <AddLabel setIsAddLabel = {setIsAddLabel}/>}
        </div>
        
    )
}
export default AdminLabels