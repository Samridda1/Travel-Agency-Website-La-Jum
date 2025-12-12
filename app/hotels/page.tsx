import Link from "next/link"

const Hotels = () => {
    return (
        <div>
            Hotels page
            <Link href={"/transfers"} >
            Go to transfers page
            </Link>
        </div>
    )
}

export default Hotels