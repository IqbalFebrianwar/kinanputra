import Image from "next/image"

const Galery = () => {
    return (
        <div className="w-full grid justify-center bg-white p-10">
            <h1 className="text-gray-950  text-center font-semibold text-3xl">Galeri</h1>
            <div className="grid lg:grid-cols-2 gap-10 py-10">
                <div className="max-w-md">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722155793/IMG-20240723-WA0018_wszhcq.jpg"
                        width={1000000}
                        height={5000000}
                        alt="image"
                        className="object-cover h-48 w-96"
                    />
                </div>
                <div className="max-w-md">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722155794/IMG-20240723-WA0024_ndc70d.jpg"
                        width={10000000}
                        height={500000}
                        alt="image"
                        className="object-cover h-48 w-96"
                    />
                </div>
                <div className="max-w-md">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722155794/IMG-20240723-WA0039_bvjlo7.jpg"
                        width={1000000000}
                        height={500000000}
                        alt="image"
                        className="object-cover h-48 w-96"
                    />
                </div>
                <div className="max-w-md">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722155793/IMG-20240723-WA0017_qnh2js.jpg"
                        width={10000}
                        height={500000}
                        alt="image"
                        className="object-cover h-48 w-96"
                    />
                </div>
                <div className="max-w-md">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722155793/IMG-20240723-WA0016_rptpqr.jpg"
                        width={10000}
                        height={500000}
                        alt="image"
                        className="object-cover h-48 w-96"
                    />
                </div>
                <div className="max-w-md">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722155793/IMG-20240723-WA0010_k1mcze.jpg"
                        width={10000}
                        height={500000}
                        alt="image"
                        className="object-cover h-48 w-96"
                    />
                </div>
                <div className="max-w-md">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722155792/IMG-20240723-WA0022_jpbsjx.jpg"
                        width={10000}
                        height={500000}
                        alt="image"
                        className="object-cover h-48 w-96"
                    />
                </div>
                <div className="max-w-md">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722155791/IMG-20240723-WA0012_tybhl3.jpg"
                        width={10000}
                        height={500000}
                        alt="image"
                        className="object-cover h-48 w-96"
                    />
                </div>
            </div>
        </div>
    )
}
export default Galery