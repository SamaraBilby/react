
const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este é o Título do Container</h2>
        {children}
        <p>Este valor é {myValue}</p>
    </div>
  )
}

export default Container