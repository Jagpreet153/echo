import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"
export default function Page() { 
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello web/app</h1>
        <Button size="sm">Button</Button>
        
        <p className="text-lg">{add(2, 3)}</p>
      </div>
    </div>
  )
}
