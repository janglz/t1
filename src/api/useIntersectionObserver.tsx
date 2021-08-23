import * as React from 'react'
interface entryDef {
  isIntersecting: boolean
  intersectionRatio: number
}
type scrollObserver = () => IntersectionObserver
type isIntersecting = boolean
type setisIntersecting = React.Dispatch<
  React.SetStateAction<boolean>
>

interface IObserver {
  createScrollObserver: scrollObserver
  isIntersecting: isIntersecting
  setisIntersecting: setisIntersecting
}

export const useIntersectionObserver = (
  props: React.RefObject<HTMLDivElement>,
): IObserver => {
  const [isIntersecting, setisIntersecting] =
    React.useState(false)

  const observer = new IntersectionObserver(executeJob, {
    threshold: 0.1,
    root: props.current ?? document.body,
    rootMargin: '1800px 1800px 1800px 1800px',
  })

  React.useEffect(() => {
    observer.disconnect()
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
