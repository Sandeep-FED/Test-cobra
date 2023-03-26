import "./App.css"
import { Button, TextField, IconButton } from "@material-ui/core"
import { useState } from "react"
import { Panel, PanelType } from "@fluentui/react/lib/Panel"
import { useBoolean } from "@fluentui/react-hooks"
import DeleteIcon from "@material-ui/icons/Delete"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"

function App() {
  // TODO: useboolean hook for controlling the state of the panel
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false)

  let options = [
    { label: "first_name", value: "First name" },
    { label: "last_name", value: "Last name" },
    { label: "gender", value: "Gender" },
    { label: "account_name", value: "Account name" },
    { label: "city", value: "City" },
    { label: "state", value: "State" },
  ]

  // TODO: For storing the input data in states for later sending purpose
  const [optionss, setOptions] = useState("Select segment")
  const [segmentName, setSegmentName] = useState("")

  const Addsections = () => {
    console.log("new section added")
  }

  const handleInputChange = (event, value) => {
    setSegmentName(event.target.value)
  }
  console.log(segmentName)

  const handleChange = (event) => {
    setOptions(event.target.value)
  }
  console.log(optionss)

  // handle for sending data to server
  const handleSubmit = () => {}

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
          type={PanelType.small}
          onDismiss={dismissPanel}
          closeButtonAriaLabel='Close'
        >
          <div className='container'>
            <TextField
              label='Name of the segment'
              placeholder='Enter the name of the segment'
              variant='outlined'
              onChange={handleInputChange}
              size='small'
            />
            <p>
              To save your segment, you need to add the schemas to build the
              query
            </p>
            <div className='drop-down'>
              <select onChange={handleChange}>
                <option>-- Select a segment --</option>

                {options.map((optionss) => (
                  <option key={optionss.label} value={optionss.value}>
                    {optionss.value}
                  </option>
                ))}
              </select>
              <IconButton aria-label='delete'>
                <DeleteIcon />
              </IconButton>
              <div>
                <Button
                  onClick={Addsections}
                  startIcon={<AddCircleOutlineIcon />}
                >
                  Add new schema
                </Button>
              </div>
            </div>
            <div className='footer'>
              <Button
                variant='outlined'
                color='primary'
                onClick={handleSubmit}
                className='btn'
              >
                Submit
              </Button>
              <Button
                variant='outlined'
                color='primary'
                onClick={dismissPanel}
                className='btn'
              >
                Close
              </Button>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  )
}

export default App
