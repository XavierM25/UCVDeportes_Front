import React from "react";
import './App.css'

const StudentDetails = () => {
  return (
    <section className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Detalle Estudiante</h3>

      <div className="detailsCon space-y-6">
        <div className="detailHead flex items-center justify-between border-b pb-3">
          <h2 id="studentPosition" className="text-3xl font-bold">#1</h2>
          <p id="studentCategorySubca" className="text-gray-500 text-sm">- | -</p>
        </div>

        {/* Avatar: solo sombra circular */}
        <div className="mx-auto w-40 h-40 rounded-full bg-gray-200 shadow-lg"></div>

        <div className="detailsBody text-center">
          <h3 id="studentFullName" className="text-lg font-medium mb-1"> </h3>
          <p id="studentCareer" className="text-gray-400 text-sm"> </p>
        </div>

        <form className="detailsForm space-y-4">
          <div className="relative">
            <input
              id="detailCat"
              type="text"
              readOnly
              value=""
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
              placeholder="Categoría"
            />
            <label
              htmlFor="detailCat"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Categoría
            </label>
          </div>

          <div className="relative">
            <input
              id="detailSubCat"
              type="text"
              readOnly
              value=""
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
              placeholder="Subcategoría"
            />
            <label
              htmlFor="detailSubCat"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Subcategoría
            </label>
          </div>

          <div className="relative">
            <input
              id="detailPuntos"
              type="text"
              readOnly
              value=""
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
              placeholder="Puntos"
            />
            <label
              htmlFor="detailPuntos"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Puntos
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StudentDetails;