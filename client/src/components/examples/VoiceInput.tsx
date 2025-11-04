import VoiceInput from '../VoiceInput'

export default function VoiceInputExample() {
  return (
    <div className="max-w-md mx-auto p-4">
      <VoiceInput 
        onVoiceInput={(transcript) => console.log('Voice input:', transcript)}
      />
    </div>
  )
}
