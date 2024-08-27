function Register() {
  return (
    <div>
      <form>
        <div className="space-y-12 mt-5 p-2">
          <div className="border border-cyan-600 px-2 py-1 rounded">
            <h1 className="text-xl font-bold mb-2 text-cyan-600">
              Personal Details
            </h1>
            <div>
              <div className="grid grid-cols-1 mb-2">
                <label className="text-base font-medium text-cyan-600">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="placeholder:text-sm text-cyan-600 placeholder:text-cyan-600 placeholder:opacity-50 pl-1"
                />
              </div>
              <div className="grid grid-cols-1 mb-2">
                <label className="text-base font-medium text-cyan-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  className="placeholder:text-sm text-cyan-600 placeholder:text-cyan-600 placeholder:opacity-50 pl-1"
                />
              </div>
              <div className="grid grid-cols-1 mb-2">
                <label className="text-base font-medium text-cyan-600">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  className="placeholder:text-sm text-cyan-600 placeholder:text-cyan-600 placeholder:opacity-50 pl-1"
                />
              </div>
              <div className="flex justify-center mb-2">
                <button
                  type="submit"
                  className="ring-1 ring-cyan-600 rounded px-2 py-1 text-cyan-600 text-sm font-medium hover:bg-cyan-600 hover:text-white"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
