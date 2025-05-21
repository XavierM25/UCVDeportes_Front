
const PasswordRecoveryDesign = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-xl  bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Recuperar contraseña</h1>
          <p className="mt-2 text-gray-800 text-sm/4.5">
            Ingresa el correo asociado con tu cuenta y te enviaremos un correo con las instrucciones para recuperar tu contraseña.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="ej: leoav@outlook.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="button"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Enviar correo
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecoveryDesign;