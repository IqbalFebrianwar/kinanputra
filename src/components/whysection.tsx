import Image from "next/image"

const Whysection = () => {
    return (
        <div className="w-full justify-center grid text-center bg-red-600 p-10 text-white">
            <h1 className="font-semibold text-3xl">Mengapa Harus UD Kinan Putra Mandiri ?</h1>
            <div className="w-full justify-center grid lg:grid-cols-2 py-20 gap-20">
                <div className="flex items-center text-start max-w-md space-x-4">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722161367/high-quality_zmmv8x.png"
                        alt="icon"
                        width={45}
                        height={45}
                    />
                    <div>
                        <h1 className="font-semibold text-xl">Berkualitas</h1>
                        <p className="font-normal">Material Kayu yang Kami Gunakan Adalah Kayu Pilihan Terbaik dan Sangat Berkualitas.</p>
                    </div>
                </div>
                <div className="flex items-center text-start max-w-md space-x-4">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722161366/money_lfmtn3.png"
                        alt="icon"
                        width={45}
                        height={45}
                    />
                    <div>
                        <h1 className="font-semibold text-xl">Harga Terjangkau</h1>
                        <p className="font-normal">Harga yang Akan di tawarkan Pastinya Terjangkau.</p>
                    </div>
                </div>
                <div className="flex items-center text-start max-w-md space-x-4">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722161366/clock_pbgdvo.png"
                        alt="icon"
                        width={45}
                        height={45}
                    />
                    <div>
                        <h1 className="font-semibold text-xl">24 Jam</h1>
                        <p className="font-normal">Kami Siap Melayani Kamu dalam 24 Jam Nonstop.</p>
                    </div>
                </div>
                <div className="flex items-center text-start max-w-md space-x-4">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722161366/emoticon-square-smiling-face-with-closed-eyes_aqp79d.png"
                        alt="icon"
                        width={45}
                        height={45}
                    />
                    <div>
                        <h1 className="font-semibold text-xl">Ramah</h1>
                        <p className="font-normal">Pelayanan yang Sangat Ramah Bagi para Konsumen.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Whysection