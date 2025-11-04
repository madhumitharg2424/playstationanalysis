import PredictionForm from '../PredictionForm'

export default function PredictionFormExample() {
  return (
    <div className="max-w-md mx-auto p-4">
      <PredictionForm 
        onSubmit={(data) => console.log('Form submitted:', data)}
        isLoading={false}
      />
    </div>
  )
}
