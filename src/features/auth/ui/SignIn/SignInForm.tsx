'use client'

import { Form } from "radix-ui";
import { Input } from '@shared/ui/input/input';
import styles from './SignIn.module.css';
import * as React from 'react'
import { useState } from "react"


export const SignInForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        //TODO: submit FormData
    }

    return (
        <Form.Root>
            <Form.Field name='email' className='mt-[24px]'>
                <div>
                    <Form.Label className={styles.label}>이메일</ Form.Label>
                </div>
                <Form.Control asChild>
                    <Input
                        id='email'
                        className={styles.input}
                        type='email'
                        placeholder='이메일을 입력해주세요'
                        value={email}
                        onChange={handleChangeValue}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field name='password' className='mt-[24px]'>
                <div>
                    <Form.Label className={styles.label}>비밀번호</ Form.Label>
                </div>
                <Form.Control asChild>
                    <Input
                        id='password'
                        className={styles.input}
                        type='password'
                        placeholder='비밀번호를 입력해주세요'
                        value={password}
                        onChange={handleChangeValue}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild className='outline-none mt-[32px]'>
                <Input
                    className='border-none w-[720px] bg-(--color-primary-50) text-[#FFFFFF] hover:bg-(--color-primary-60) focus:bg-(--color-primary-70) disabled:bg-(--color-gray-10)'
                    value='로그인'
                    onClick={handleSubmit}
                />
            </Form.Submit>
        </Form.Root>
    )
}