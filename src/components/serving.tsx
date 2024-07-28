import Image from "next/image"

const Serving = () => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: "url(https://res.cloudinary.com/dehqnfmjw/image/upload/v1722155792/IMG-20240723-WA0014_y54s9m.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content lg:p-20 grid text-center">
                <h1 className="font-semibold text-3xl pb-10">Melayani</h1>
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="p-5 space-x-3 rounded-lg flex items-start bg-white">
                        <div className="p-5 rounded bg-red-600 items-center justify-center">
                            <Image
                                src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722168703/lumber_xsjtlq.png"
                                alt="kayu"
                                width={20}
                                height={20}
                                className="max-lg:w-40"
                            />
                        </div>
                        <div className="text-start max-w-80">
                            <h1 className="font-bold text-black">Kayu Kaso</h1>
                            <p className="text-gray-400">Kayu yang biasa digunakan dalam pembangunan rumah berfungsi sebagai penyangga plafon dan sebagai rangka dasar untuk mendukung proses pengecoran.</p>
                        </div>
                    </div>
                    <div className="p-5 space-x-3 rounded-lg flex items-start bg-white">
                        <div className="p-5 rounded bg-red-600 items-center justify-center">
                            <Image
                                src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722168703/wood_klyq66.png"
                                alt="kayu"
                                width={20}
                                className="max-lg:w-40"
                                height={20}
                            />
                        </div>
                        <div className="text-start max-w-80">
                            <h1 className="font-bold text-black">Kayu Dolkan</h1>
                            <p className="text-gray-400">Kayu yang sering dipakai dalam konstruksi rumah berperan sebagai penopang plafon dan rangka utama untuk mendukung proses pengecoran.</p>
                        </div>
                    </div>
                    <div className="p-5 space-x-3 rounded-lg flex items-start bg-white">
                        <div className="p-5 rounded bg-red-600 items-center justify-center">
                            <Image
                                src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722168705/bamboo_pskuad.png"
                                alt="bambu"
                                width={20}
                                height={20}
                                className="max-lg:w-20"
                            />
                        </div>
                        <div className="text-start max-w-80">
                            <h1 className="font-bold text-black">Bambu</h1>
                            <p className="text-gray-400">Bambu yang dipakai sebagai dasar penahan untuk menopang bangunan.</p>
                        </div>
                    </div>
                    <div className="p-5 space-x-3 rounded-lg flex items-start bg-white">
                        <div className="p-5 rounded bg-red-600 items-center justify-center">
                            <Image
                                src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722168703/wood_1_ueyg6c.png"
                                alt="bambu"
                                width={20}
                                height={20}
                                className="max-lg:w-40"
                            />
                        </div>
                        <div className="text-start max-w-80">
                            <h1 className="font-bold text-black">Balok Papancor</h1>
                            <p className="text-gray-400">Kayu yang digunakan untuk pondasi sloof berfungsi sebagai pengikat bangunan dan membantu meratakan beban yang ada di atasnya.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Serving