const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
        <h2>Detalhes do carro:</h2>
        <ul style={{listStyleType: "none"}}>
            <li>Marca: {brand}.</li>
            <li>Quilometragem: {km}.</li>
            <li>Cor: {color}.</li>
            {newCar && <li>Este carro é novo!</li>}
        </ul>
    </div>
  )
}

export default CarDetails