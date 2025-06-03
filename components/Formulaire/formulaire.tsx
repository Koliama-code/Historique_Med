"use client";
import React from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
// import { useLocation } from "react-router-dom";

const Formulaire = () => {
  return (
    <div className="mx-auto p-4 md:p-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b border-gray-200 pb-4">
          Formulaire Admission Patient
        </h2>

        <form className="space-y-8">
          {/* Section Informations Personnelles */}
          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Informations Personnelles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label
                  htmlFor="nom"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Nom
                </label>
                <input
                  id="nom"
                  type="text"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="Dupont"
                />
              </div>
              <div>
                <label
                  htmlFor="prenom"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Prénom
                </label>
                <input
                  id="prenom"
                  type="text"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="Jean"
                />
              </div>
              <div>
                <label
                  htmlFor="dateNaissance"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Date de Naissance
                </label>
                <input
                  id="dateNaissance"
                  type="date"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="sexe"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Sexe
                </label>
                <select
                  id="sexe"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                >
                  <option value="">Sélectionner...</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="adresse"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Adresse Complète
                </label>
                <input
                  id="adresse"
                  type="text"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="123 Rue de l'Hôpital, Ville, Code Postal"
                />
              </div>
              <div>
                <label
                  htmlFor="telephone"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Numéro de Téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="0123456789"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Email (Optionnel)
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="jean.dupont@example.com"
                />
              </div>
            </div>
          </section>

          {/* Section Contact d'Urgence */}
          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Contact Urgence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
              <div>
                <label
                  htmlFor="nomUrgence"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Nom Complet
                </label>
                <input
                  id="nomUrgence"
                  type="text"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="relationUrgence"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Relation avec le Patient
                </label>
                <input
                  id="relationUrgence"
                  type="text"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="Épouse, Frère, Ami..."
                />
              </div>
              <div>
                <label
                  htmlFor="telephoneUrgence"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Téléphone Urgence
                </label>
                <input
                  id="telephoneUrgence"
                  type="tel"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                />
              </div>
            </div>
          </section>

          {/* Section Informations Médicales */}
          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Informations Médicales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label
                  htmlFor="groupeSanguin"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Groupe Sanguin (Optionnel)
                </label>
                <input
                  id="groupeSanguin"
                  type="text"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="Ex: A+, O-"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="allergies"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Allergies Connues (Optionnel)
                </label>
                <textarea
                  id="allergies"
                  rows={3}
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="Pénicilline, fruits de mer, etc."
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="medicamentsActuels"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Médicaments Pris Actuellement (Optionnel)
                </label>
                <textarea
                  id="medicamentsActuels"
                  rows={3}
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="Nom du médicament, dosage, fréquence"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="antecedentsMedicaux"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Antécédents Médicaux Pertinents (Optionnel)
                </label>
                <textarea
                  id="antecedentsMedicaux"
                  rows={3}
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="Diabète, hypertension, chirurgies antérieures, etc."
                />
              </div>
            </div>
          </section>

          {/* Section Motif de Consultation */}
          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Motif de la Consultation et Orientation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label
                  htmlFor="motifConsultation"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Motif Principal de la Consultation
                </label>
                <input
                  id="motifConsultation"
                  type="text"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="Douleur thoracique, fièvre, contrôle annuel..."
                />
              </div>
              <div>
                <label
                  htmlFor="specialisteSouhaite"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Spécialiste Souhaité / Orientation
                </label>
                <select
                  id="specialisteSouhaite"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                >
                  <option>Choisir un spécialiste</option>
                  <option>Médecin généraliste</option>
                  <option>Cardiologue</option>
                  <option>Dermatologue</option>
                  <option>Neurologue</option>
                  <option>Pédiatre</option>
                  <option>Psychiatre</option>
                  <option>Gynécologue</option>
                  <option>Ophtalmologue</option>
                  <option>ORL (Oto-rhino-laryngologiste)</option>
                  <option>Rhumatologue</option>
                  <option>Pneumologue</option>
                  <option>Gastro-entérologue</option>
                  <option>Endocrinologue</option>
                  <option>Urologue</option>
                  <option>Néphrologue</option>
                  <option>Chirurgien général</option>
                  <option>Orthopédiste</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="symptomesInitiaux"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Description des Symptômes Initiaux
                </label>
                <textarea
                  id="symptomesInitiaux"
                  rows={4}
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                  placeholder="Décrivez en détail les symptômes que le patient ressent..."
                />
              </div>
            </div>
          </section>

          {/* Section Assurance (Optionnel) */}
          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Informations Assurance (Optionnel)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label
                  htmlFor="nomAssurance"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Nom de la Compagnie Assurance
                </label>
                <input
                  id="nomAssurance"
                  type="text"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="numeroPoliceAssurance"
                  className="block text-gray-700 mb-1 text-sm font-medium"
                >
                  Numéro de Police
                </label>
                <input
                  id="numeroPoliceAssurance"
                  type="text"
                  className="w-full bg-gray-50 text-gray-900 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300"
                />
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-3.5 px-6 font-semibold hover:bg-blue-700 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Enregistrer les Informations du Patient
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulaire;
