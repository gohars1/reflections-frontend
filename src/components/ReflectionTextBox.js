import { Textarea, Text } from '@chakra-ui/react'
import React from 'react'

const ReflectionTextBox = () => {
    let [value, setValue] = React.useState('')
  
    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return (
      <>
        <Text mb='8px'>Value: {value}</Text>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder='Here is a sample placeholder'
          size='sm'
        />
      </>
    )
  }

export default ReflectionTextBox;