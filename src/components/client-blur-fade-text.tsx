'use client'

import BlurFadeText from "./magicui/blur-fade-text"

interface Props {
  className?: string
  delay?: number
  text: string
  yOffset?: number
}

export default function ClientBlurFadeText({ className, delay, text, yOffset }: Props) {
  const handleClick = () => {
    window.open('/cv.pdf', '_blank')
  }

  return (
    <div 
      onClick={handleClick} 
      className="cursor-pointer"
    >
      <BlurFadeText
        className={className}
        delay={delay}
        text={text}
        yOffset={yOffset}
      />
    </div>
  )
}