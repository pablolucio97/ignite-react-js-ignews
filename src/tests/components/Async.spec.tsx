import {render, screen, waitFor} from '@testing-library/react'
import {Async} from '../../components/Async'

describe('Async', () => {
    it('Should wait the button render ad find this element', async () => {
        render(
            <Async />
            )
           await waitFor(() => {
              return expect(screen.getByText('Button')).toBeInTheDocument()
          })
    })
})


