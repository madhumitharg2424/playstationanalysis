import PredictionResults from '../PredictionResults'

export default function PredictionResultsExample() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <PredictionResults 
        prediction={8.52}
        accuracy={0.82}
        console="PS4"
        region="North America"
        genre="Action"
      />
    </div>
  )
}
