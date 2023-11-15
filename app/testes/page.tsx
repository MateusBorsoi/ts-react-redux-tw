const Testes = () => {
    return (
        <div className="w-[500px]">
 <form className="mt-6">
                    <div className="relative mb-8">
                        <input id="email" name="email" type="text"
                            className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-600"
                            placeholder="john@doe.com" />
                        <label htmlFor="email"
                            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                            address</label>
                    </div>
                    <div className="relative mb-4">
                        <input id="password" name="password" type="password"
                            className="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-600"
                            placeholder="john@doe.com" />
                        <label htmlFor="Password"
                            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Password</label>
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default Testes