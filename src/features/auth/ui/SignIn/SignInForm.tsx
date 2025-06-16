'use client'

import { Form } from "radix-ui"
import { useForm, FieldValues } from "react-hook-form"
import { Input } from '@shared/ui/input/input'
import { FormField } from "@shared/ui/formField"
import * as React from 'react'


function SignInForm() {
    const method = useForm()
    const { handleSubmit, control } = method;

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <Form.Root onSubmit={handleSubmit(onSubmit)}>
            <FormField
                control={control}
                rules={{ required: true }}
                name='email'
                type='email'
                label='이메일'
                placeholder='이메일을 입력해주세요'>
            </FormField>
            <FormField
                control={control}
                rules={{ required: true }}
                name='password'
                type='password'
                label='비밀번호'
                placeholder='비밀번호를 입력해주세요'>
            </FormField>
            <Form.Submit asChild className='outline-none mt-[32px]'>
                <Input
                    className='border-none w-[720px] bg-(--color-primary-50) text-[#FFFFFF] hover:bg-(--color-primary-60) focus:bg-(--color-primary-70) disabled:bg-(--color-gray-10)'
                    value='로그인'
                />
            </Form.Submit>
        </Form.Root>
    )
}

export { SignInForm }