import Image from "next/image"

const Navbar = () => {
    return (
        <div className="fixed z-40 navbar bg-white lg:px-40 max-lg:px-5 text-gray-950">
            <div className="navbar-start">
                <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden btn-circle drawer-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
                <button className="btn btn-ghost text-xl">
                    <Image
                        src="https://res.cloudinary.com/dehqnfmjw/image/upload/v1722157030/logo_ud_kinan_putra_merah_vcsv1u.png"
                        alt="logo"
                        width={10000}
                        height={100000}
                        className="w-12"
                    />
                    <h1 className="text-red-600 max-lg:text-xs lg:text-md">
                        UD KINAN PUTRA MANDIRI
                    </h1>
                </button>
            </div>
            <div className="navbar-end max-lg:hidden">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#s1">Beranda</a></li>
                    <li><a href="#s2">Layanan</a></li>
                    <li><a href="#s3">Galeri</a></li>
                    <li><a href="#s4">Kontak</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar