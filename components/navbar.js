import React from "react";

export default function Navbar() {
    return(
                <div className="w-full border-b border-rose max-w-1xl ">
                    <div className="relative flex items-center justify-between h-20 mx-0 max-w-1xl">
                        <div className="items items-center mx-20 justify-between w-full text-center sm:flex lg:flex">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <h1 className="font-PhantomRush text-5xl cursor-pointer text-rose">
                                <span className="text-fuschia">Axo</span><span className="text-rose">Swap</span>
                                </h1>
                            </div>
                                    <button className="bg-rose text-black text-2xl font-PhantomRush inline-flex items-center px-5 py-2 shadow-sm rounded-md">Mint Now</button>
                            </div>
                        </div>
                    </div>
    )
}


