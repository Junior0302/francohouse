import { Construction } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface PlaceholderViewProps {
  title: string
}

export function PlaceholderView({ title }: PlaceholderViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 animate-in fade-in duration-500">
      <Card className="w-full max-w-md border-dashed">
        <CardContent className="flex flex-col items-center justify-center p-12 text-center space-y-4">
          <div className="p-4 rounded-full bg-muted">
            <Construction className="h-8 w-8 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            <p className="text-muted-foreground">
              Coming Soon 🚧
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
