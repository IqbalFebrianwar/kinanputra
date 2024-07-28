const DrawerSide = () => {
    return (
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-red-600 font-bold space-y-2 text-xl text-white min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li><a href="#s1">Beranda</a></li>
                <li><a href="#s2">Layanan</a></li>
                <li><a href="#s3">Galeri</a></li>
                <li><a href="#s4">Kontak</a></li>
            </ul>
        </div>
    )
}
export default DrawerSide