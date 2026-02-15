import { Button } from "@/components/ui/button"

const variants = [
  { variant: "primary", label: "Primary" },
  { variant: "secondary", label: "Secondary" },
  { variant: "outline", label: "Outline" },
  { variant: "neutral", label: "Neutral" },
] as const

const disabledVariants = [
  { variant: "primary", label: "Primary" },
  { variant: "secondary", label: "Secondary" },
] as const

const sizes = [
  { size: "xs", label: "XS" },
  { size: "sm", label: "SM" },
  { size: "default", label: "Default" },
  { size: "lg", label: "LG" },
] as const

export default function ButtonsPage() {
  return (
    <div className="min-h-screen w-full bg-bglight py-16 px-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-secondary mb-12">Buttons</h1>

      {/* Variants */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-xl font-semibold text-secondary mb-6">Variantes</h2>
        <div className="flex flex-col gap-4">
          {variants.map(({ variant, label }) => (
            <Button key={variant} variant={variant} size="lg" className="w-full">
              {label}
            </Button>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-xl font-semibold text-secondary mb-6">Tamanhos</h2>
        <div className="flex flex-wrap items-center gap-4">
          {sizes.map(({ size, label }) => (
            <Button key={size} variant="primary" size={size}>
              Button {label}
            </Button>
          ))}
        </div>
      </section>

      {/* Disabled */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-xl font-semibold text-secondary mb-6">Disabled</h2>
        <div className="flex flex-wrap items-center gap-4">
          {disabledVariants.map(({ variant, label }) => (
            <Button key={variant} variant={variant} disabled>
              {label}
            </Button>
          ))}
        </div>
      </section>

      {/* All combinations */}
      <section className="w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-secondary mb-6">
          Todas as combinações
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-[#364153] p-3">
                  Variante
                </th>
                {sizes.map(({ size, label }) => (
                  <th
                    key={size}
                    className="text-center text-sm font-medium text-[#364153] p-3"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {variants.map(({ variant, label }) => (
                <tr key={variant} className="border-t border-[#E5E7EB]">
                  <td className="text-sm font-mono text-[#364153] p-3">
                    {label}
                  </td>
                  {sizes.map(({ size }) => (
                    <td key={size} className="text-center p-3">
                      <Button variant={variant} size={size}>
                        Button
                      </Button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
