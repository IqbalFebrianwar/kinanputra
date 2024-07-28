import type { Metadata } from "next";
import dynamic from "next/dynamic";

const DrawerSide = dynamic (()=> import("@/components/drawerside"))
const Navbar = dynamic(() => import("@/components/navbar"))

export const metadata: Metadata = {
    title: "Kinan Putra Mandiri",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <Navbar />
                {children}
            </div>
            <DrawerSide />
        </div>
    );
}
