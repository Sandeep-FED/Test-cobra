import "./App.css"
import Button from "@material-ui/core/Button"
import { useState } from "react"
import { Panel, PanelType } from "@fluentui/react/lib/Panel"
import { useBoolean } from "@fluentui/react-hooks"
import TextField from "@material-ui/core/TextField"

function App() {
  // TODO: useboolean hook for controlling the state of the panel
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false)

  // TODO: For storing the input data in states for later sending purpose
  const [age, setAge] = useState("")
  const [segmentName, setSegmentName] = useState("")

  const Addsections = () => {
    console.log("new section added")
  }

  const handleInputChange = (event, value) => {
    setSegmentName(event.target.value)
  }
  console.log(segmentName)
  return (
    <div className='App'>
      <section>
        <Button
          variant='outlined'
          color='primary'
          onClick={openPanel}
          className='btn'
        >
          Save segment
        </Button>
        <Panel
          headerText='Saving Segment'
          isOpen={isOpen}
          type={PanelType.medium}
          onDismiss={dismissPanel}
          closeButtonAriaLabel='Close'
        >
          <div className='container'>
            <TextField
              label='Name of the segment'
              placeholder='Enter the name of the segment'
              variant='outlined'
              fullWidth={true}
              onChange={handleInputChange}
            />
            <p>
              To save your segment, you need to add the schemas to build the
              query
            </p>
            <p onClick={Addsections}>Add new schema</p>
          </div>
        </Panel>
      </section>
    </div>
  )
}

export default App
