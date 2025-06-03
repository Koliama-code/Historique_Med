import React from "react";
import {
  Calendar,
  User,
  Pill,
  Clock,
  Timer,
  FileText,
  Save,
  Thermometer,
} from "lucide-react";

const Prescription = () => {
  return (
    <div className="bg-white p-8 rounded-xl ">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes Ordonnances</h2>

      <div className="space-y-6">
        {/* Exemple d'ordonnance */}
        <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  Ordonnance du 15/06/2023
                </h3>
                <p className="text-gray-600 text-sm flex items-center gap-2 mt-1">
                  <User className="w-4 h-4" />
                  Dr. Dupont
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                  <Pill className="w-4 h-4 text-purple-600" />
                  Médicament
                </h4>
                <p className="text-gray-900 font-medium">
                  Paracétamol - Comprimé
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                  <Timer className="w-4 h-4 text-green-600" />
                  Dosage
                </h4>
                <p className="text-gray-900 font-medium">500mg</p>
              </div>

              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  Posologie
                </h4>
                <p className="text-gray-900 font-medium">3 fois par jour</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-yellow-600" />
                  Durée du traitement
                </h4>
                <p className="text-gray-900 font-medium">5 jours</p>
              </div>

              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                  <Thermometer className="w-4 h-4 text-red-600" />
                  Symptômes traités
                </h4>
                <p className="text-gray-900 font-medium">
                  Fièvre et maux de tête
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              Sauvegarder Ordonnance
            </button>
          </div>
        </div>

        {/* Deuxième exemple d'ordonnance */}
        <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  Ordonnance du 10/05/2023
                </h3>
                <p className="text-gray-600 text-sm flex items-center gap-2 mt-1">
                  <User className="w-4 h-4" />
                  Dr. Martin
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                  <Pill className="w-4 h-4 text-purple-600" />
                  Médicament
                </h4>
                <p className="text-gray-900 font-medium">
                  Atorvastatine - Comprimé
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                  <Timer className="w-4 h-4 text-green-600" />
                  Dosage
                </h4>
                <p className="text-gray-900 font-medium">20mg</p>
              </div>

              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  Posologie
                </h4>
                <p className="text-gray-900 font-medium">1 fois par jour</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-yellow-600" />
                  Durée du traitement
                </h4>
                <p className="text-gray-900 font-medium">30 jours</p>
              </div>

              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <h4 className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                  <Thermometer className="w-4 h-4 text-red-600" />
                  Symptômes traités
                </h4>
                <p className="text-gray-900 font-medium">
                  Contrôle du cholestérol
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              Sauvegarder Ordonnance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
