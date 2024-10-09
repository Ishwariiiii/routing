
export default function RootLayout({ children, navbar, sidebar }) {
    return (
        <html lang="en">
            <body>
                <div className="w-[100vw] h-[100vh] flex flex-col">
                    <div className="h-[10%] w-[100%] bg-black text-white">
                        {navbar}
                    </div>
                    <div className="h-[90%] flex flex-row ">
                        <div className="h-[100%] w-[20%] bg-orange-300">
                            {sidebar}
                        </div>
                        <div className="h-[100%] w-[80%] bg-red-400">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}
