
import '@styles/global.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'
import HomeCarousel from '@components/HomeCarosel'







export const metadata = {
  title: "PromptEase",
description: "Explore & Collaborate Ai Features",
}

const RootLayout = ({children})  => {
  return (
  <html lang='en'>
    
<body>
    <Provider>
    <div className='main'>
<div className='gradient'/>
    </div>
    <main className='app'>
        <Nav/>
        <HomeCarousel/>
        {children}
    </main>
    </Provider>
</body>
  </html>
  )
}

export default RootLayout