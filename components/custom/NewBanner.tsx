import { Banner } from "@/components/ui/banner"
import { ArrowRight } from "lucide-react"

function NewBanner() {
  return (
    <Banner variant="muted" className="dark text-foreground my-2 animate-bounce mt-5 rounded-2xl">
      <div className="w-full">
        <p className="flex justify-center text-sm">
          <a href="#" className="group">
            <span className="me-1 text-base leading-none">✨</span>
            Take limited time discount on our next offbeat trek
            <ArrowRight
              className="-mt-0.5 ms-2 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </p>
      </div>
    </Banner>
  )
}

export { NewBanner }
