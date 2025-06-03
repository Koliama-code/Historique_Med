"use client";
import React, { useState } from "react";
import { Edit2, Trash2, Plus, Search } from "lucide-react";

const PatientsManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Gestion des Patients
        </h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Ajouter un patient
        </button>
      </div>

      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Rechercher par nom ou numéro..."
          className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Nom</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Téléphone</th>
              <th className="py-3 px-4">Adresse</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4">Patient Exemple</td>
              <td className="py-3 px-4">patient@example.com</td>
              <td className="py-3 px-4">987654321</td>
              <td className="py-3 px-4">Adresse Exemple</td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center text-gray-500 py-4">
          Aucun patient trouvé
        </div>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Ajouter un nouveau patient
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-600 mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full h-11 bg-gray-50 text-gray-800 rounded-lg px-4 border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Sexe</label>
                <select className="w-full h-11 bg-gray-50 text-gray-800 rounded-lg px-4 border border-gray-300">
                  <option value="">Sélectionner</option>
                  <option value="M">Masculin</option>
                  <option value="F">Féminin</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full h-11 bg-gray-50 text-gray-800 rounded-lg px-4 border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Téléphone</label>
                <input
                  type="text"
                  className="w-full h-11 bg-gray-50 text-gray-800 rounded-lg px-4 border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Adresse</label>
                <input
                  type="text"
                  className="w-full h-11 bg-gray-50 text-gray-800 rounded-lg px-4 border border-gray-300"
                />
              </div>
              <div className="flex gap-4 mt-8">
                <button
                  type="submit"
                  className="flex-1 h-11 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ajouter
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 h-11 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientsManagement;
