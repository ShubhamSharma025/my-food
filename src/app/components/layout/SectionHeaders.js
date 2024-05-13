export default function SectionHeaders({subHeader,mainHeader}) {
    return (
        <>
        <h3 className="font-semibold leading-4 text-gray-600 uppercase">
            {subHeader}
            </h3>
<h2 className="text-4xl italic font-bold text-primary">
    {mainHeader}
    </h2>

        </>
    )
}