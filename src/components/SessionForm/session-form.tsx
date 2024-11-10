"use client";

import { useState } from "react";
import InsightfyButton from "../InsightfyButton/insightfy-button";

interface LoginInfo {
    empresa?: string;
    email: string;
    senha: string;
}

interface SessionFormProps {
    type: "login" | "register";
}

function SessionForm({ type }: SessionFormProps) {
    const fields = type === "register" ? ["empresa", "email", "senha"] : ["email", "senha"];
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({
        email: "",
        senha: "",
        empresa: ""
    });

    const handleChangeInfo: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="w-80 flex flex-col gap-10">
            <section className="flex flex-col gap-4">
                {fields.map((item) => (
                    <div key={item} className="flex flex-col gap-2">
                    <label className="capitalize font-medium">{item} <span className="text-insightfy-red font-bold">*</span></label>
                    <input
                        id={item}
                        type="text"
                        onChange={handleChangeInfo}
                        value={loginInfo[item as keyof LoginInfo]}
                        className="w-full h-[60px] outline-none border border-insightfy-gray rounded-md px-4"
                    />
                </div>
                ))}

                {type === "login" && (
                    <p className="text-sm text-right font-semibold text-insightfy-blue cursor-pointer">Esqueceu sua senha?</p>
                )}
            </section>

            <InsightfyButton
                type="submit"
                width="350"
                variant="contained"
                text={type === "login" ? "Login" : "Próximo"}
                disabled={false}
            />
        </form>
    );
}

export default SessionForm;