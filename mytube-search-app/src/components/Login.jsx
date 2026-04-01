import { Link } from "react-router-dom";

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            alert("Sai tài khoản hoặc mật khẩu");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Đăng nhập thành công");
        window.location.href = "/";
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-2xl shadow-lg w-80"
                >
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Đăng nhập
                    </h2>

                    <input
                        name="email"
                        placeholder="Email"
                        className="w-full mb-3 p-2 border rounded-lg"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full mb-5 p-2 border rounded-lg"
                    />

                    <button className="w-full bg-green-500 text-white py-2 rounded-lg">
                        Login
                    </button>
                    <p className="text-center mt-4 text-sm">
                        Chưa có tài khoản?{" "}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Đăng ký
                        </Link>
                    </p>
                </form>
            </div>
        </>

    );
}

export default Login;