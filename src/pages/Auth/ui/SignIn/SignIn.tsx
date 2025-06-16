import { SignInForm } from '@features/auth/ui/SignIn/SignInForm'
import { Checkbox } from 'radix-ui'

export const SignIn = () => {

    return (
        <div className='container'>
            <div
                style={{
                    fontSize: 'var(--text-h0)',
                    lineHeight: 'var(--text-h0--line-height)',
                    fontWeight: 'var(--text-h0--font-weight)',
                }}
                className='w-[720px]'
            >유멘토에 오신 것을 환영합니다.</div>
            <SignInForm />
            <Checkbox.Root>
                <Checkbox.Indicator />
            </Checkbox.Root>
        </div>
    )
}