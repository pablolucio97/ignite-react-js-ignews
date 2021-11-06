import { render } from '@testing-library/react'
import { debug } from 'console'
import ActiveLink from '../components/ActiveLink'

jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/'
            }
        }
    }
})

describe('ActiveLink component', () => {
    it('active link should renders correctly', () => {
        const { debug, getByText } = render(
            <ActiveLink
                activeClassName='active'
                href='/'
            >
                <p>OK!</p>
            </ActiveLink>
        )
        debug()
        expect(getByText('OK!')).toBeInTheDocument()
    })
    
    it('active link is receiving the href attribute string', () => {
        const { getByText } = render(
            <ActiveLink
                activeClassName='active'
                href='/'
            >
                <p>OK!</p>
            </ActiveLink>
        )
        expect(getByText('OK!')).toHaveClass('active')
    })
    
})