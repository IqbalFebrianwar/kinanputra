const Hero = () => {
    return (
        <div
            className="hero h-96"
            style={{
                backgroundImage: "url(https://res.cloudinary.com/dehqnfmjw/image/upload/v1722155794/IMG-20240723-WA0021_xtbulo.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Kayu Berkualitas, Solusi Terbaik untuk Konstruksi Kamu</h1>
                    <p>UD Kinan Putra Mandiri Hadir untuk Kamu, yang sedang mencari Kayu Berkualitas.</p>
                </div>
            </div>
        </div>
    )
}
export default Hero