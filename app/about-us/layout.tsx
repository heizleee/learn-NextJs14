// layout.tsx 는 중첩된다. 필요한 컴포넌트의 폴더 안에 layout.tsx를 만들어주는 방식으로 추가해준다.
export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      I'm AboutUsLayout! only rendered in about-us component.
      {children}
    </>
  )
}
