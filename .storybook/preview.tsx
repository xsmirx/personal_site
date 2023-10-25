import type {Preview} from '@storybook/react'
import React from 'react'
import {dmSans, outfit} from '../src/style/fonts'
import '@/style/globals.css'

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: false,
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#232339', // --gray-darkest
        },
      ],
    },
  },
  decorators: [
    Story => (
      <div
        className={`${outfit.variable} ${dmSans.variable} text-gray-darker dark:text-gray-lightest`}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview
