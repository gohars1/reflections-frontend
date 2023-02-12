import CallBackendButton from "./CallBackendButton"
import { Textarea, Text } from '@chakra-ui/react'
import React from 'react'


const SendChapterSummaryToBuddy = () => {
    let [value, setValue] = React.useState('')
  
    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    
    // React.useEffect(() => {
    //   getChapterReflect(value);
    // }, [value]);

    return (
      <>
        <Text mb='8px'>Value: {value}</Text>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder='Here is a sample placeholder'
          size='sm'
        />
        <CallBackendButton text={value}/>
      </>
    )

}

export default SendChapterSummaryToBuddy;