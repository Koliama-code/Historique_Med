"use client";
import React, { useState } from "react";
import { Edit2, Trash2, Plus, Search } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const DoctorsManagement = () => {
  const [search, setSearch] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const doctors = [
    {
      nom: "Nom Exemple",
      specialite: "Cardiologie",
      email: "email@example.com",
      telephone: "123456789",
    },
  ];

  const filteredDoctors = doctors.filter((doc) =>
    (doc.nom + doc.specialite).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Gestion des Médecins
        </h2>
        <Dialog.Root open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <Dialog.Trigger asChild>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={20} />
              Ajouter un médecin
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
            <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-xl font-semibold text-gray-800">
                  Ajouter un nouveau médecin
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button className="text-gray-500 hover:text-gray-700">
                    <X />
                  </button>
                </Dialog.Close>
              </div>

              {/* Formulaire conservé tel quel */}
              <form className="space-y-5">
                <div>
                  <label className="block text-gray-600 mb-2">
                    Nom complet
                  </label>
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
                  <label className="block text-gray-600 mb-2">Spécialité</label>
                  <div className="flex gap-2">
                    <select className="w-1/2 h-11 bg-gray-50 text-gray-800 rounded-lg px-4 border border-gray-300">
                      <option value="">Sélectionner une spécialité</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Ou saisir une nouvelle spécialité"
                      className="w-1/2 h-11 bg-gray-50 text-gray-800 rounded-lg px-4 border border-gray-300"
                    />
                  </div>
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
                  <label className="block text-gray-600 mb-2">
                    Mot de passe
                  </label>
                  <input
                    type="password"
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
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="flex-1 h-11 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Annuler
                    </button>
                  </Dialog.Close>
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Rechercher par nom ou spécialité..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Nom</th>
              <th className="py-3 px-4">Spécialité</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Téléphone</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredDoctors.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 py-4">
                  Aucun médecin trouvé
                </td>
              </tr>
            ) : (
              filteredDoctors.map((doc, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{doc.nom}</td>
                  <td className="py-3 px-4">{doc.specialite}</td>
                  <td className="py-3 px-4">{doc.email}</td>
                  <td className="py-3 px-4">{doc.telephone}</td>
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorsManagement;
