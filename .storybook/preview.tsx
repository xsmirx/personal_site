import type {Preview} from '@storybook/react'
import React from 'react'
import {dmSans, outfit} from '../src/style/fonts'
import '@/style/globals.css'

const preview: Preview = {
  decorators: [
    Story => (
      <div className={`${outfit.variable} ${dmSans.variable}`}>
        <Story />
      </div>
    ),
  ],
}

export default preview
