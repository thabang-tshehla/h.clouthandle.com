'use client'

export default function BioProfilePicture({user}){
    
    return(
        <div className="w-full flex justify-center my-5">
            <img  className="rounded-full h-40 w-40 " src={user?.profilePictureUrl[256]} alt="" />
        </div>
    )
}