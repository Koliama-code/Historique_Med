import { Card } from "@/components/ui/card";
import { Plus, Calendar, FileText } from "lucide-react";

const stats = [
  {
    title: "Consultations",
    value: 1,
    icon: <Plus className="text-white" size={16} />,
    bg: "bg-blue-100",
    iconWrapper: "bg-blue-500",
    border: "border-blue-300",
  },
  {
    title: "Rendez-vous",
    value: 1,
    icon: <Calendar className="text-white" size={16} />,
    bg: "bg-purple-100",
    iconWrapper: "bg-purple-500",
    border: "border-gray-200",
  },
  {
    title: "Ordonnances",
    value: 1,
    icon: <FileText className="text-white" size={16} />,
    bg: "bg-orange-100",
    iconWrapper: "bg-orange-500",
    border: "border-gray-200",
  },
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {stats.map((item, index) => (
        <Card
          key={index}
          className={`flex justify-between items-center p-24 rounded-2xl border-gray-200 ${item.border} border`}
        >
          <div>
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="text-lg font-semibold text-gray-800">{item.value}</p>
          </div>
          <div className={`${item.bg} p-2 rounded-lg`}>
            <div className={`${item.iconWrapper} p-1 rounded`}>{item.icon}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
