import { SignInForm } from '@features/auth/ui/SignIn/SignInForm'
import { Checkbox } from 'radix-ui'

export const SignIn = () => {

    return (
        <div >
            <div
                style={{
                    fontSize: 'var(--text-h0)',
                    lineHeight: 'var(--text-h0--line-height)',
                    fontWeight: 'var(--text-h0--font-weight)',
                }}
                className='w-[720px]'
            >유멘토에 오신 것을 환영합니다.</div>
            <SignInForm />
            <div>
                <div>
                    <Checkbox.Root>
                        <Checkbox.Indicator/>
                    </Checkbox.Root>
                </div>
                <div></div>
            </div>
        </div>
    )
}