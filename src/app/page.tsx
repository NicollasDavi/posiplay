import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F99F1B] flex items-center justify-center">
      <div className="w-full max-w-md text-center p-10 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-[#F99F1B] mb-4">Posiplay</h1>
        <p className="text-lg text-gray-600 mb-6">Acesse suas aulas ao vivo e comece a aprender!</p>
        <LoginForm />
      </div>
    </div>
  );
}
