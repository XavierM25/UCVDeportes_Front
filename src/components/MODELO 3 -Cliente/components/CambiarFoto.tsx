import React from "react";
import './App.css'

const UploadImageModal = () => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        {}
        <div className="absolute top-2 right-2">
          <div className="bg-red-500 text-white w-8 h-8 rounded-md flex items-center justify-center font-bold">
            X
          </div>
        </div>
        
        {}
        <div className="p-8 pt-12">
          {/* Título */}
          <h2 className="text-xl font-semibold text-center mb-8">Cambiar foto</h2>
          
          {}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex items-center w-full justify-center gap-4">
              <div className="bg-gray-200 text-gray-700 py-1 px-3 rounded border border-gray-300">
                Choose File
              </div>
              <span className="text-gray-500">No file chosen</span>
            </div>
            
            <div className="bg-gray-200 text-gray-700 py-1 px-3 rounded border border-gray-300">
              Subir Imagen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImageModal;