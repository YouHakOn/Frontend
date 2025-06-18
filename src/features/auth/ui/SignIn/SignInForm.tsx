'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSubmit
} from '@shared/ui/form'
import { useForm, FieldValues, FormProvider } from 'react-hook-form'
import { Input } from '@shared/ui/input/input'
// import { FormField } from "@shared/ui/formField"
import * as React from 'react'
import { z } from 'zod/v4'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@shared/ui/button'

function SignInForm() {
  const formSchema = z.object({
    email: z.email({ error: '정확한 이메일을 입력해주세요.' }),
    password: z
      .string()
      .min(1, { message: '비밀번호를 입력해주세요.' })
      .max(15, { message: '비밀번호는 15자 이하로 입력해주세요.' })
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const { handleSubmit, control } = form

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <FormProvider {...form}>
      <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="이메일을 입력해주세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  maxLength={15}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormSubmit asChild>
          <Button variant="filled" className="w-full mt-2">
            로그인
          </Button>
        </FormSubmit>
      </Form>
    </FormProvider>
  )
}

export { SignInForm }
