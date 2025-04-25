export const BookContainer = ({ children, title, styles, formElement }: { children?: React.ReactNode, title?: string, styles?: { container?: string, title?: string, children?: string }, formElement?: boolean }) => {
  return (
    <div className={`${styles?.container} flex flex-col items-center gap-4 border-2 border-dark rounded-[10px] p-6 bg-[#0000005d]`}>
      <div>
        <h1 className={`${styles?.title}`}>{title}</h1>
      </div>
      {formElement ? (
        <form className={`${styles?.children}`}>
          {children}
        </form>
      ) : (
        <div className={`${styles?.children}`}>
          {children}
        </div>
      )}
    </div>
  )
}