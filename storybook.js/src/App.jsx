import TextInput from "./TextInput/Text-input"

function App() {

  return (
    <div className="p-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <TextInput
          label="Username"
          backgroundColor="lightblue"
          placeholder="Enter your username"
        />
        <TextInput
          label="Email"
          backgroundColor="pink"
          placeholder="Enter your email"
        />
        <TextInput
          label="Password"
          backgroundColor="lightgreen"
          placeholder="Enter your password"
        />
      </div>
    </div>
  )
}

export default App
