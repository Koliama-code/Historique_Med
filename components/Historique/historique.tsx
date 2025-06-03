import {
  Calendar,
  User,
  Stethoscope,
  FileText,
  PlusCircle,
  Trash2,
} from "lucide-react";

function Historique() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Historique Médical
        </h2>
        <div className="space-y-4">
          {/* Exemple d'élément d'historique */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Consultation Générale
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 mt-1">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Dr. Dupont</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 mt-3">
                    <PlusCircle className="w-4 h-4" />
                    <p className="text-sm">
                      Diagnostic: Fièvre et maux de tête
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <p className="text-sm">15/06/2023</p>
                </div>
                <button
                  className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
                  title="Supprimer l'historique"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-2 text-gray-700">
                <FileText className="w-5 h-5 mt-0.5 text-orange-500" />
                <div>
                  <p className="text-sm font-medium text-orange-500 mb-1">
                    Prescription
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Paracétamol - 3 fois par jour</li>
                    <li>• Durée: 5 jours</li>
                    <li>• Dosage: 500mg</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Deuxième exemple d'élément d'historique */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-300 hover:border-blue-500 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Consultation Cardiologie
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 mt-1">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Dr. Martin</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 mt-3">
                    <PlusCircle className="w-4 h-4" />
                    <p className="text-sm">Diagnostic: Contrôle cardiaque</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <p className="text-sm">10/05/2023</p>
                </div>
                <button
                  className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
                  title="Supprimer l'historique"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-2 text-gray-700">
                <FileText className="w-5 h-5 mt-0.5 text-orange-500" />
                <div>
                  <p className="text-sm font-medium text-orange-500 mb-1">
                    Prescription
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Atorvastatine - 1 fois par jour</li>
                    <li>• Durée: 30 jours</li>
                    <li>• Dosage: 20mg</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historique;
