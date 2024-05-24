import RegisterBackground from "../../../public/register-background.svg";
import InsightfyLogo from "../../../public/insightfy-logo.svg";
import SessionForm from "@/components/SessionForm/session-form";

function RegisterPage() {
    return (
        <div className="flex justify-evenly items-center p-6">
            <img
                className="h-full"
                src={RegisterBackground.src} 
                alt="Mountain"     
            />

            <div className="flex flex-col items-center gap-6 w-1/2 p-8">
                <div className="flex flex-col items-center gap-8">
                    <img
                        width={185}
                        height={90}
                        src={InsightfyLogo.src}
                        alt="Insightfy Logo"
                    />
                    <div>
                        <h1 className="text-center text-3xl font-bold">Cadastre-se no Insightfy</h1>
                        <p className="text-center text-gray-600">Venha conhecer seu negócio.</p>
                    </div>
                </div>

                <SessionForm type="register" />
            </div>
        </div>
    );
}

export default RegisterPage;