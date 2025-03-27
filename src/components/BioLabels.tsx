import { LabelType } from "@/types"

export default function BioLabels({ labels }: { labels: LabelType[] }) {

    return (
        <div className="flex w-full justify-center">
            {labels.map(({ id, name }) => (
                <div className="bg-gray-100 rounded-full text-xs px-2 py-1 text-gray-500" key={id}>{name}</div>
            ))}
        </div>
    )
}