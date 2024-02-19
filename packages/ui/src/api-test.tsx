"use client";

import { useState } from 'react'

export const ApiTest = ({
  apiUri, path, params
}: {
  apiUri?: string
  path?: string
  params?: {
    [key: string]: any
  }
}) => {
  const [data, setData] = useState<string>('Click me to get Api data.')
  const [failed, setFailed] = useState<boolean | undefined>(undefined)

  const handleClick = (_$event: any) => {
    setData('Loading...')
    let url = `${apiUri}${path ? '/' : ''}${path}`
    const queryParams: string[] = []
    Object
      .entries(params ?? {})
      .forEach((p, i) =>
        queryParams.push(`${i == 0 ? '?' : ''}${p[0]}${p[1]}`))

    fetch(`${apiUri}${path ? '/' : ''}${path}${queryParams.join('&')}`)
      .then((res) => res.json())
      .then((data) => {
        setData(
          JSON.stringify(data, null, 2)
            .replaceAll('\n', '<br/>')
            .replaceAll(' ', '&nbsp;&nbsp;&nbsp;')
        )
        setFailed(false)
      })
      .catch(e => {
        setData(`Api call Failed!!!<br/>${e.message}`)
        setFailed(true)
      })
  }
  return (
    <button style={{
      width: '80%',
      minHeight: '10em',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      fontSize: '1.5em',
      backgroundColor: (() => {
        switch(failed) {
          case false: return 'green'
          case true: return 'red'
          default: return 'none'
        }
      })()
    }}
      onClick={handleClick}>
        <span
        style={{
          textAlign: 'left',
          maxWidth: '80%'
        }}
      dangerouslySetInnerHTML={{ __html: data }}/>
    </button>
  )
}