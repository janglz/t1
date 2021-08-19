import * as React from 'react'
interface entryDef {
  isIntersecting: boolean
  intersectionRatio: number
}

export const useIntersectionObserver = (
  props: React.RefObject<HTMLDivElement>,
) => {
  const [isIntersecting, setisIntersecting] =
    React.useState(false)

  const observer = new IntersectionObserver(executeJob, {
    threshold: 0.1,
    root: props.current ?? null,
    rootMargin: '0px',
  })

  React.useEffect(() => {
    observer.disconnect()
    console.log(observer, isIntersecting)
  }, [isIntersecting])

  function executeJob(entries: Array<entryDef>) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setisIntersecting(true)
      }
    })
  }

  function createScrollObserver() {
    return observer
  }

  return {
    createScrollObserver,
    isIntersecting,
    setisIntersecting,
  }
}
