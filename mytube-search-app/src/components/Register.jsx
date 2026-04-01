import { Link } from "react-router-dom";

function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target.confirm.value;

        if (password !== confirm) {
            alert("Mật khẩu không khớp");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existed = users.find((u) => u.email === email);
        if (existed) {
            alert("Email đã tồn tại");
            return;
        }

        const newUser = {
            email,
            password,
            favorites: [],
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Đăng ký thành công");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg w-80"
            >
                <h2 className="text-2xl font-bold text-center mb-6">
                    Đăng kí
                </h2>
                <input
                    name="email"
                    placeholder="Email"
                    className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    name="confirm"
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full mb-5 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Đăng kí
                </button>
                <p className="text-center mt-4 text-sm">
                    Đã có tài khoản?{" "}
                    <Link to="/" className="text-blue-500">
                        Về trang chủ
                    </Link>
                </p>
            </form>
        </div>
    );
}
export default Register