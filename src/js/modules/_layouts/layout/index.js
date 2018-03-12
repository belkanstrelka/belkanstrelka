import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import Header from 'modules/common/header'
import Footer from 'modules/common/footer'

export default ({ children, className }) => {
  return (
    <div className={className} style={{ minHeight: '100vh' }}>
      <StickyContainer>
        <Sticky>
          {
            ({
              style,

              // the following are also available but unused in this example
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => {
              return (
                <header style={{
                  ...style,
                  ...{ zIndex: '100' }
                }}>
                  <Header isSticky={isSticky} style={{ }} />
                </header>
              )
            }
          }
        </Sticky>

        { children }
        
        <Footer />
      </StickyContainer>
    </div>
  )
}
