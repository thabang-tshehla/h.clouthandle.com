"use client"
import { useAppContext } from "@/contexts/AppContext";
import UploadNewProfilePicButton from "./UploadNewProfilePicButton";

const AdminBioProfilePicture = () => {

    const { user } = useAppContext()

    return (

        <div className="flex flex-col justify-center gap-3">
            <div className="flex justify-center overflow-hidden">
                <img className="w-32 h-32 rounded-full" src={user?.profilePictureUrl[256]} alt="" />
            </div>
            <UploadNewProfilePicButton />
        </div>

    )
}

export default AdminBioProfilePicture;

