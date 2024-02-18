"use client";

import { useState } from 'react'

export const ApiTest = ({apiUrl}: {apiUrl?: string}) => {
  const [data, setData] = useState<string>('Click me to get Api data.')
  const [failed, setFailed] = useState(true)
  
  const handleClick = (_$event: any) => {
    setData('Loading...')
    fetch(`${apiUrl}/api/webapiserver?myVal=doc`)
      .then((res) => res.json())
      .then((data) => {
        setData(JSON.stringify(data, null, 2))
        setFailed(false)
      })
      .catch(e => {
        setData(`Api call Failed!!!                                                    ${e.message}`)
        setFailed(true)
      })
  }

  return (
    <button style={{
      width: '80%',
      minHeight: '20em',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      
    }}
      onClick={handleClick}>
        <p>{process.env.API_URL}</p>
      {!failed && (<pre>{data}</pre>)}
      {failed && (<span>{data}</span>)}
    </button>
  )
}