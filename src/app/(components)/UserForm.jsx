"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errMessage, setErrMessage] = useState("");

  const handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setErrMessage("");
    const res = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application.json",
    });
    if (!res.OK) {
      const response = await res.json();
      setErrMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col gap-3 w-1/2"
      >
        <h1>Đăng ký</h1>
        <div>
          <label htmlFor="name">Tên</label>
          <input
            type="text"
            placeholder="Nhập tên"
            required={true}
            value={formData.name}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Nhập email"
            required={true}
            name="email"
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            required={true}
            name="password"
            value={formData.password}
          />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      <p className="text-red-400">{errMessage}</p>
    </>
  );
};

export default UserForm;
