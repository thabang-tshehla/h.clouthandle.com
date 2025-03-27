export default function BioTitle ({title}: {title: string}) {

    return(
        <div className="w-full flex justify-center">
            <h3><strong>{title}</strong></h3>
        </div>
    )
}