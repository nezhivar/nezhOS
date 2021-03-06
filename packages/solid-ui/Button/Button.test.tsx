import { describe, expect, test } from 'vitest'
import { render, screen } from '@nezhos/testing/solid';

import { Button } from './Button'

test('Button renders', async () => {
  render(
    <Button>Nezhivar</Button>,
  )

  expect(screen.getByText('Nezhivar')).toBeTruthy()
})
