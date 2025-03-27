export default function BioCountries({countries}: {countries: string[]}){
    
    return(
        <div className="w-full flex justify-center">
            {countries.map(country => (
                <div>{country}</div>
            ))}
        </div>
    )
}