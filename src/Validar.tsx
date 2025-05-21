

const VerificationCodeDesign = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-md overflow-hidden p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-3 tracking-normal  ">Revisa tu correo</h1>
          <p className="text-gray-600">
            Hemos enviado un correo con el código de verificación para recuperar tu contraseña.
          </p>
        </div>

        <div className="border-t border-gray-200 my-6"></div>

        <div className="text-center mb-6">
          <h2 className="text-2x1 font-bold text-gray-800 mb-5">Ingresa el código de verificación</h2>
          
          <div className="flex justify-center space-x-3 mb-8">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 border-2 border-gray-300 rounded-md text-center text-xl font-medium focus:outline-none focus:border-blue-500"
              />
            ))}
          </div>
     

          <button
            type="button"
            className="w-90 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-xl transition duration-200"
          >
            Verificar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationCodeDesign;