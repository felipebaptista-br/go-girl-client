
const colors = [
  { name: "Primary", className: "bg-primary", hex: "#F6339A" },
  { name: "Secondary", className: "bg-secondary", hex: "#55305C" },
  { name: "Success", className: "bg-success", hex: "#04BF68" },
  { name: "Warning", className: "bg-warning", hex: "#EBBB3C" },
  { name: "Danger", className: "bg-danger", hex: "#E44345" },
  { name: "Black", className: "bg-black", hex: "#000000" },
  { name: "White", className: "bg-white border border-gray-200", hex: "#FFFFFF" },
  { name: "Neutrals", className: "bg-neutrals", hex: "#ED83BA" },
  { name: "BG Light", className: "bg-bglight border border-gray-200", hex: "#F8F8F8" },
]

const gradients = [
  { name: "Vertical", className: "bg-gradient-vertical", value: "90deg, #C42981 → #55305C" },
  { name: "Horizontal", className: "bg-gradient-horizontal", value: "135deg, #E60076 → #A800B7" },
]

export default function Colors() {
  return (
    <div className="min-h-screen w-full bg-bglight py-16 px-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-secondary mb-12">Brand Colors</h1>

      <div className="grid grid-cols-3 gap-8 max-w-3xl w-full mb-16">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col items-center gap-3">
            <div className={`w-28 h-28 rounded-full shadow-md ${color.className}`} />
            <span className="text-sm font-semibold text-black">{color.name}</span>
            <span className="text-xs text-gray-500 font-mono">{color.hex}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-secondary mb-8">Gradients</h2>

      <div className="grid grid-cols-2 gap-8 max-w-2xl w-full">
        {gradients.map((gradient) => (
          <div key={gradient.name} className="flex flex-col items-center gap-3">
            <div className={`w-full h-28 rounded-2xl shadow-md ${gradient.className}`} />
            <span className="text-sm font-semibold text-black">{gradient.name}</span>
            <span className="text-xs text-gray-500 font-mono">{gradient.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}