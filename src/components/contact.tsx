import Image from "next/image"
import Link from "next/link"

const Contact = () => {
    return (
        <div className="w-full grid justify-center bg-gray-100 p-10">
            <h1 className="text-3xl mb-10 text-gray-950 text-center font-semibold">Hubungi Kami</h1>
            <div className="space-y-5 py-5 max-lg:px-5">
                <div className="flex items-center space-x-2">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722171907/instagram_hjhrll.png"
                        width={30}
                        height={30}
                        alt="icon"
                    />
                    <h1 className="text-gray-950 text-md">UD Kinan Putra</h1>
                </div>
                <div className="flex items-center space-x-2">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722171909/facebook_a7t9hd.png"
                        width={30}
                        height={30}
                        alt="icon"
                    />
                    <h1 className="text-gray-950 text-md">UD Kinan Putra</h1>
                </div>
                <div className="flex items-center space-x-2">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722171905/gmail_hl5hb2.png"
                        width={30}
                        height={30}
                        alt="icon"
                    />
                    <h1 className="text-gray-950 text-md">putrakinan993@gmail.com</h1>
                </div>
                <div className="flex items-center space-x-2">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722171905/maps-and-flags_vjjvru.png"
                        width={30}
                        height={30}
                        alt="icon"
                    />
                    <h1 className="text-gray-950 text-md">Jl. Raya Jasinga Tenjo, Bojong, Kec. Tenjo, Kabupaten Bogor, Jawa Barat, Indonesia</h1>
                </div>
                <div className="flex items-center space-x-2">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722173527/call_mnjque.png"
                        width={30}
                        height={30}
                        alt="icon"
                    />
                    <h1 className="text-gray-950 text-md">+62 857-1777-0537</h1>
                </div>
                <Link href="https://wa.me/6285717770537" className="btn bg-green-500 text-white font-semibold">WhatsApp</Link>
            </div>
            <div className="p-4 rounded-lg lg:my-5 justify-center flex bg-white">
                <iframe className="w-80" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.0728446065323!2d106.43982507499167!3d-6.384599993605793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjMnMDQuNiJTIDEwNsKwMjYnMzIuNiJF!5e0!3m2!1sen!2sid!4v1722172385019!5m2!1sen!2sid" width="400" height="300" loading="lazy"></iframe>
            </div>
        </div>
    )
}
export default Contact