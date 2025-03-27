"use client"


import AdminBioProfilePicture from "@/components/AdminBioProfilePicture";
import { useAppContext } from "@/contexts/AppContext";
import UploadNewProfilePicButton from "@/components/UploadNewProfilePicButton";
import ImageResizer from "@/components/ImageResizer";
import ImageCropper from "@/components/ImageUploader";
import AdminLabels from "@/components/AdminLabels";
import AddLabel from "@/components/AddLabel";
import React, { useState, createContext, useContext } from "react";
import AddSectionDevider from "@/components/admin/AddSectionDevider";
import Dialog from "@/components/Dialog";
import DraggableBioSection from "@/components/DraggableBioSection";



interface AdminBioContextType {
    dialogComponent: React.ReactNode;
    setDialogComponent: (value: React.ReactNode) => void;
}
const defaultAdminBioContext = {

    dialogComponent: null,
    setDialogComponent: () => { }

}

const AdminBioContext = createContext<AdminBioContextType>(defaultAdminBioContext)


export const useAdminBioContext = () => {

    const context = useContext(AdminBioContext)

    if (!context) {
        throw new Error("useContext must be used within a ContextProvider");
    }
    return context;

}
export default function Bio() {

    const { user } = useAppContext()

    const [dialogComponent, setDialogComponent] = useState<React.ReactNode | null>(null)

    return (

        <AdminBioContext.Provider value={{dialogComponent, setDialogComponent}}>
            <div className="flex flex-col gap-4">

                <AdminBioProfilePicture />
                <div className="flex flex-col">
                    <label htmlFor="">Name</label>
                    <input onChange={() => { }} value={user?.name} type="text" placeholder="Name" className="p-2 bg-gray-100" />
                </div>

                <AdminLabels />

                <div className="flex flex-col">
                    <label htmlFor="">Bio</label>
                    <textarea
                        className="p-2 bg-gray-100"
                        name="" id="" placeholder="Bio" ></textarea>
                </div>
                <DraggableBioSection />
                <AddSectionDevider />
                {dialogComponent && <Dialog >{dialogComponent}</Dialog>}

            </div>
        </AdminBioContext.Provider>
    )
}